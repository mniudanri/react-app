import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import type { Product } from "../models/Product";
import { useState } from "react";

function capitalizeFirstLetter(str) {
    if (!str) return str; // handle empty strings
    return str.charAt(0).toUpperCase() + str.slice(1);
}

  
export const CategorizedProductCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { name } = useParams<{ name: string }>();

  const filteredProducts: Product[] =
    name === "all"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === name?.toLowerCase()
        );

  return (
    <div style={{ padding: "1rem" }}>
    
      {/* capitalize name */}
      <h2>{name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())} Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
          width: "100%",
        }}
      >
        {filteredProducts.map((p) => (
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
    </div>
 );
}