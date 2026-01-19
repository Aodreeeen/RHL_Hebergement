// Format complet : 116 500 000 XPF
export function formatPriceXPF(price) {
  if (!price) return '—';
  return new Intl.NumberFormat('fr-FR').format(price) + ' XPF';
}

// Format millions : 116,5 MF
export function formatPriceMF(price) {
  if (!price) return '—';
  const millions = price / 1000000;
  if (millions >= 1) {
    return millions.toFixed(1).replace('.', ',') + ' MF';
  }
  return new Intl.NumberFormat('fr-FR').format(price) + ' XPF';
}
