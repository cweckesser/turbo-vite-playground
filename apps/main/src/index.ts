import express, { Request, Response } from "express";
import { getAllProducts, getProductById } from "db";
import { Product } from "models";
import { formatAsCurrency, truncateString } from "utils";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// GET /products - List all products
app.get("/products", (_req: Request, res: Response) => {
  const products = getAllProducts()
    .map((p: Product) => ({
      ...p,
      price: formatAsCurrency(p.price),
      description: truncateString(p.description, 50),
    }));

  res.json(products);
});

// GET /products/:id - Get product by ID
app.get("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const product = getProductById(id);

  if (product) {
    res.json({
      ...product,
      price: formatAsCurrency(product.price),
    });
  } else {
    res.status(404).json({ error: `Product with ID "${id}" not found.` });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
