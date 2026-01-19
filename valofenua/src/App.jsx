import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Estimation from './pages/Estimation';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estimation" element={<Estimation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
