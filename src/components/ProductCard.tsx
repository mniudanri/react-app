import type { Product } from "../models/Product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        margin: "12px",
        maxWidth: "250px",
        cursor: "pointer"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <strong>${product.price.toFixed(2)}</strong>
      <p style={{ fontStyle: "italic" }}>{product.category}</p>
    </div>
  );
}