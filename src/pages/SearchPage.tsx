import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { ProductList } from "../components/ProductList";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q") || "";

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase()) ||
      p.description.toLowerCase().includes(keyword.toLowerCase())
  );

  return <ProductList products={filteredProducts} />;
}