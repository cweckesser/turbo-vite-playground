export function isNumberInRange(
  num: number,
  min: number,
  max: number
): boolean {
  return num >= min && num <= max;
}

export function roundToDecimalPlaces(
  num: number,
  decimalPlaces: number
): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}

export function formatAsCurrency(
  num: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    num
  );
}
