export function parsePrice(raw) {
  if (raw == null) return 0;
  if (typeof raw === 'number') return raw;
  // Acepta formatos como "10,95" o "10.95" y limpia espacios
  const str = String(raw).trim().replace(/\s+/g, '').replace(',', '.');
  const n = parseFloat(str);
  return Number.isFinite(n) ? n : 0;
}

export function formatPriceDisplay(n) {
  const num = Number.isFinite(n) ? n : 0;
  // Mostrar con coma decimal y símbolo euro: 10,95 €
  return num.toFixed(2).replace('.', ',') + ' €';
}
