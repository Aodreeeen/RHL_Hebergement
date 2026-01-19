import { Link } from 'react-router-dom';
import { Target, HelpCircle, Check } from 'lucide-react';

export default function Hero() {
  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-[#E0F4FF] to-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
          Estimez la valeur de votre bien immobilier a Tahiti
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Obtenez une estimation gratuite en 2 minutes, basee sur les annonces du marche polynesien.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/estimation"
            className="inline-flex items-center justify-center gap-2 bg-[#0077B6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#005f8a] transition-colors shadow-lg hover:shadow-xl"
          >
            <Target className="w-5 h-5" />
            Estimer mon bien
          </Link>
          <button
            onClick={scrollToHowItWorks}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0077B6] px-8 py-4 rounded-xl font-semibold text-lg border-2 border-[#0077B6] hover:bg-[#E0F4FF] transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            Comment ca marche ?
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-slate-600">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>100% gratuit</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Sans inscription</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>Resultat immediat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
