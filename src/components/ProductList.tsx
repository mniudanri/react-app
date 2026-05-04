import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import type { Product } from "../models/Product";

type Props = {
  products: Product[];
};

export function ProductList({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((p) => (
          <div key={p.id} onClick={() => setSelectedProduct(p)}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p style={{ marginTop: "16px" }}>No products found.</p>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}