import type { Product } from "../models/Product";
import "./components.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <strong>${product.price.toFixed(2)}</strong>
      <p className="category">{product.category}</p>
    </div>
  );
}