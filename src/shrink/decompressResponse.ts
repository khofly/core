import { ungzip } from "pako";

const decompress = (s: string = ""): string => {
  var enc = new TextEncoder();
  return ungzip(enc.encode(s)).toString();
};

export const decompressResponse = (arr: string[]): string[] => {
  const decompressed = [];

  for (const min of arr) {
    const d = decompress(min);
    decompressed.push(d);
  }

  return decompressed;
};
