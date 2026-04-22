import type { Product } from "../models/Product";
import { products } from "../data/products";

export class CatalogService {
  static listProducts(): Product[] {
    return products;
  }
}