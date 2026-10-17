export type Line = { amount: number };
export function decimalsFor(currency: string): number {
  return new Intl.NumberFormat("en", { style: "currency", currency })
    .resolvedOptions().maximumFractionDigits ?? 2;
}
export function formatTotal(lines: Line | Line[], currency?: string): string {
  const list = Array.isArray(lines) ? lines : [lines];
  const sum = list.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(currency === undefined ? 0 : decimalsFor(currency));
}
