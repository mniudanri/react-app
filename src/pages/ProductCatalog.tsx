import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function ProductCatalog() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
