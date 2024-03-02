import { Product } from "./types";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProduct(id: string | number): Promise<Product> {
  await sleep(2000 * Math.random());

  const response = await fetch(`/api/product/${id}.json`);
  const json = await response.json();

  return json;
}
