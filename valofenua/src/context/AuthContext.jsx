import { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';
import { supabase } from '../utils/supabase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Refs pour éviter les race conditions
  const initializedRef = useRef(false);
  const isMountedRef = useRef(true);

  // Fonction pour récupérer le profil - mémorisée
  const fetchProfile = useCallback(async (userId) => {
    if (!isMountedRef.current) return;

    console.log('fetchProfile appelé pour userId:', userId);

    try {
      const { data, error } = await supabase
        .from('users_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      console.log('fetchProfile résultat:', { data, error });

      if (!isMountedRef.current) return;

      if (error) {
        if (error.code === 'PGRST116') {
          // Pas de profil trouvé - créer un profil vide
          console.log('Aucun profil trouvé, création...');
          const { data: newProfile, error: insertError } = await supabase
            .from('users_profiles')
            .insert([{ id: userId }])
            .select()
            .single();

          if (insertError) {
            console.error('Erreur création profil:', insertError);
            setProfile(null);
          } else {
            console.log('Nouveau profil créé:', newProfile);
            setProfile(newProfile);
          }
        } else {
          console.error('Erreur lors de la récupération du profil:', error);
          setProfile(null);
        }
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Erreur fetchProfile:', error);
      setProfile(null);
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;

    // Fonction d'initialisation
    const initializeAuth = async () => {
      console.log('initializeAuth démarré');

      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        console.log('getSession résultat:', { session: session?.user?.email, error });

        if (!isMountedRef.current) return;

        if (error) {
          console.error('Erreur getSession:', error);
          setUser(null);
          setProfile(null);
          setLoading(false);
          initializedRef.current = true;
          return;
        }

        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser) {
          await fetchProfile(currentUser.id);
        }

        // Marquer comme initialisé et terminer le loading
        initializedRef.current = true;
        if (isMountedRef.current) {
          setLoading(false);
          console.log('Auth initialisé avec succès');
        }
      } catch (error) {
        console.error('Erreur initialisation auth:', error);
        initializedRef.current = true;
        if (isMountedRef.current) {
          setUser(null);
          setProfile(null);
          setLoading(false);
        }
      }
    };

    // Écouter les changements d'authentification
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!isMountedRef.current) return;

        // Ignorer INITIAL_SESSION car on le gère avec getSession()
        if (event === 'INITIAL_SESSION') {
          return;
        }

        console.log('Auth state change:', event);

        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser) {
          await fetchProfile(currentUser.id);
        } else {
          setProfile(null);
        }
      }
    );

    // Lancer l'initialisation
    initializeAuth();

    // Timeout de sécurité (réduit à 3 secondes)
    const timeoutId = setTimeout(() => {
      if (isMountedRef.current && !initializedRef.current) {
        console.warn('Auth timeout (3s) - forçage fin du loading');
        setLoading(false);
        initializedRef.current = true;
      }
    }, 3000);

    return () => {
      isMountedRef.current = false;
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  const login = useCallback(async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error && data.user) {
        setUser(data.user);
        await fetchProfile(data.user.id);
      }

      return { data, error };
    } catch (error) {
      console.error('Erreur login:', error);
      return { data: null, error };
    }
  }, [fetchProfile]);

  const logout = useCallback(async () => {
    // Réinitialiser l'état AVANT d'appeler signOut pour une UI réactive
    setUser(null);
    setProfile(null);

    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }

    return { error: null };
  }, []);

  const updateProfile = useCallback(async (updates) => {
    if (!user) return { error: { message: 'Non connecté' } };

    try {
      const { data, error } = await supabase
        .from('users_profiles')
        .update(updates)
        .eq('id', user.id)
        .select()
        .single();

      if (!error && data) {
        setProfile(data);
      }
      return { data, error };
    } catch (error) {
      console.error('Erreur updateProfile:', error);
      return { data: null, error };
    }
  }, [user]);

  const uploadLogo = useCallback(async (file) => {
    if (!user) return { error: { message: 'Non connecté' } };

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/logo.${fileExt}`;

      // Supprimer l'ancien logo s'il existe
      if (profile?.logo_url) {
        const oldPath = profile.logo_url.split('/').slice(-2).join('/');
        await supabase.storage.from('logos').remove([oldPath]);
      }

      // Upload du nouveau logo
      const { error: uploadError } = await supabase.storage
        .from('logos')
        .upload(fileName, file, { upsert: true });

      if (uploadError) {
        return { error: uploadError };
      }

      // Récupérer l'URL publique
      const { data: { publicUrl } } = supabase.storage
        .from('logos')
        .getPublicUrl(fileName);

      // Mettre à jour le profil avec l'URL du logo
      const { data, error } = await updateProfile({ logo_url: publicUrl });
      return { data, error, url: publicUrl };
    } catch (error) {
      console.error('Erreur uploadLogo:', error);
      return { error };
    }
  }, [user, profile, updateProfile]);

  const refreshProfile = useCallback(() => {
    if (user) {
      return fetchProfile(user.id);
    }
  }, [user, fetchProfile]);

  const value = {
    user,
    profile,
    loading,
    login,
    logout,
    updateProfile,
    uploadLogo,
    refreshProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
