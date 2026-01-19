import { Link } from 'react-router-dom';
import { Target } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 bg-[#0077B6]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Pret a estimer votre bien ?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Obtenez une estimation gratuite en moins de 2 minutes
        </p>
        <Link
          to="/estimation"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#0077B6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg"
        >
          <Target className="w-5 h-5" />
          Estimer maintenant
        </Link>
      </div>
    </section>
  );
}
