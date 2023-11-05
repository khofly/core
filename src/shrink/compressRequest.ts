import { gzip } from "pako";

const compress = (s: string = ""): string => {
  return gzip(s).toString();
};

export const compressRequest = (arr: string[]): string[] => {
  const compressed = [];

  for (const unmin of arr) {
    const c = compress(unmin);
    compressed.push(c);
  }

  return compressed;
};
