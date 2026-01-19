import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-[#0077B6] font-bold text-xl hover:text-[#005f8a] transition-colors">
          <Home className="w-6 h-6" />
          <span>ValoFenua</span>
        </Link>
        <Link
          to="/estimation"
          className="bg-[#0077B6] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#005f8a] transition-colors"
        >
          Estimer mon bien
        </Link>
      </div>
    </header>
  );
}
