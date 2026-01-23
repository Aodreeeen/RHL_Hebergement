import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Estimation from './pages/Estimation';
import RapportEstimation from './pages/RapportEstimation';
import About from './pages/About';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import CGV from './pages/CGV';
import Connexion from './pages/Connexion';
import Profil from './pages/Profil';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/rapport" element={<RapportEstimation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route
            path="/profil"
            element={
              <ProtectedRoute>
                <Profil />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
