import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import { useState } from "react";

export function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "16px",
        width: "100%",
      }}
    >
      {products.map((p) => (
        <div key={p.id} onClick={() => setSelectedProduct(p)}>
          <ProductCard product={p} />
        </div>
      ))}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}