import { compress } from "shrink-string";

export const compressRequest = async (arr: string[]): Promise<string[]> => {
  const compressed = [];

  for (const unmin of arr) {
    const c = await compress(unmin);
    compressed.push(c);
  }

  return compressed;
};
