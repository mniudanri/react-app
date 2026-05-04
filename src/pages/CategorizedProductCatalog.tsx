import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import { ProductList } from "../components/ProductList";
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

  return <ProductList products={filteredProducts} />;
}