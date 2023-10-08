import sha256 from 'crypto-js/sha256';

export function hashToRgb(hash: string) {
  const r = +parseInt(hash.slice(0, 2), 16);
  const g = +parseInt(hash.slice(2, 4), 16);
  const b = +parseInt(hash.slice(4, 6), 16);
  return `rgb(${r},${g},${b})`;
}

export function generateGradient(hash: string) {
  const color1 = hashToRgb(hash.slice(0, 6));
  const color2 = hashToRgb(hash.slice(6, 12));
  const deg = +parseInt(hash.slice(12, 14), 16)
  return `linear-gradient(${deg}deg, ${color1}, ${color2})`;
}

export function hashString(text: string): string {
  return sha256(text).toString()
}
