import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import { ProductList } from "../components/ProductList";
import { useState } from "react";

export function ProductCatalog() {
  return <ProductList products={products} />;
}