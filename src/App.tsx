import { useState } from "react";
import { CatalogService } from "./services/CatalogService";
import { ProductCard } from "./components/ProductCard";
import { ProductModal } from "./components/ProductModal";
import type { Product } from "./models/Product";

function App() {
  const products = CatalogService.listProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        {products.map((p) => (
          <div key={p.id} onClick={() => setSelectedProduct(p)}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;