/**
 * Convert hex colors  with alpha number options to rgb string
 * @param hex
 * @param alpha
 * @returns string
 */

const hexToRgb = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

export default hexToRgb;
