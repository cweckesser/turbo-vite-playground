import { Product } from "models";
import { Maybe, truncateString } from "utils";

import { products } from "./datasource";

export function getProductById(productId: string): Maybe<Product> {
  return products.find((p) => p.id === productId);
}

export function getAllProducts(): Product[] {
  // Truncate the description so as to reduce the response size
  return products.map((p) => ({
    ...p,
    description: truncateString(p.description, 100),
  }));
}
