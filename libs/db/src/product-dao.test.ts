import { describe, it, expect } from "vitest";
import { Product } from "models";
import { getProductById, getAllProducts } from "./product-dao";

describe("getProductById", () => {
  it("should return a product with complete data structure when valid ID is provided", () => {
    const product = getProductById("7f3e9a2b-4c8d-4e1f-9b5a-6d2c8f1e4a7b");
    
    expect(product).toBeDefined();
    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("name");
    expect(product).toHaveProperty("description");
    expect(product).toHaveProperty("price");
  });

  it("should return undefined when product ID does not exist", () => {
    const product = getProductById("non-existent-id");
    
    expect(product).toBeUndefined();
  });

  it("should handle empty string ID", () => {
    const product = getProductById("");
    
    expect(product).toBeUndefined();
  });
});

describe("getAllProducts", () => {
  it("should return all products", () => {
    const products = getAllProducts();
    
    expect(products).toHaveLength(3);
  });

  it("should return products with all required fields", () => {
    const products = getAllProducts();
    
    products.forEach((product: Product) => {
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("name");
      expect(product).toHaveProperty("description");
      expect(product).toHaveProperty("price");
    });
  });

  it("should truncate descriptions to 100 characters", () => {
    const products = getAllProducts();
    
    products.forEach((product: Product) => {
      expect(product.description.length).toBeLessThanOrEqual(103); // 100 + "..."
    });
  });
});
