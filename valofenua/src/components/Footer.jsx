import { Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Home className="w-5 h-5" />
            <span>ValoFenua</span>
          </div>
          <div className="text-center md:text-right text-slate-400 text-sm">
            <p>Estimation immobiliere en Polynesie francaise</p>
            <p>Donnees basees sur les annonces de immobilier.pf</p>
            <p className="mt-2 text-xs">
              Estimation indicative ne constituant pas une evaluation officielle. &copy; 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
