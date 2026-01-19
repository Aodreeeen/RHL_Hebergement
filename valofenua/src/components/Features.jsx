import { BarChart3, Lock, Zap, Gift } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Donnees du marche local',
      description: 'Base sur les annonces actives a Tahiti et ses communes.',
    },
    {
      icon: Lock,
      title: '100% confidentiel',
      description: 'Aucune inscription requise, aucune donnee personnelle collectee.',
    },
    {
      icon: Zap,
      title: 'Resultat instantane',
      description: 'Obtenez votre estimation en moins de 2 minutes.',
    },
    {
      icon: Gift,
      title: 'Totalement gratuit',
      description: 'Sans inscription, sans frais caches, sans engagement.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12">
          Pourquoi ValoFenua ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-slate-50 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#E0F4FF] rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#0077B6]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
