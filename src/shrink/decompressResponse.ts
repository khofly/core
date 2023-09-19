import { decompress } from "shrink-string";

export const decompressResponse = async (arr: string[]): Promise<string[]> => {
  const decompressed = [];

  for (const min of arr) {
    const d = await decompress(min);
    decompressed.push(d);
  }

  return decompressed;
};
