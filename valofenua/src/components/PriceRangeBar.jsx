import { formatPriceMF } from '../utils/formatPrice';

export default function PriceRangeBar({ prixBas, prixMoyen, prixHaut }) {
  return (
    <div className="w-full py-6">
      <div className="flex justify-between items-end mb-2">
        <div className="text-center">
          <div className="text-lg font-semibold text-slate-700">{formatPriceMF(prixBas)}</div>
          <div className="text-sm text-slate-500">(bas)</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#0077B6]">{formatPriceMF(prixMoyen)}</div>
          <div className="text-sm text-slate-500">(estime)</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-slate-700">{formatPriceMF(prixHaut)}</div>
          <div className="text-sm text-slate-500">(haut)</div>
        </div>
      </div>
      <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E0F4FF] via-[#0077B6] to-[#005f8a] rounded-full" />
      </div>
      <div className="flex justify-between mt-1">
        <div className="w-3 h-3 bg-[#E0F4FF] rounded-full border-2 border-slate-300" />
        <div className="w-4 h-4 bg-[#0077B6] rounded-full border-2 border-white shadow-md -mt-0.5" />
        <div className="w-3 h-3 bg-[#005f8a] rounded-full border-2 border-slate-300" />
      </div>
    </div>
  );
}
