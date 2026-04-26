import type { Product } from "../models/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    shortDescription: "Ergonomic wireless mouse with 2.4GHz connectivity",
    description:
      "An ergonomic wireless mouse designed for comfort during long work sessions. Features 2.4GHz connectivity, adjustable DPI settings, and a battery life that lasts up to 12 months. Perfect for both office and gaming use.",
    price: 25.99,
    category: "Electronics",
    image: "/products/mouse.png"
  },
  {
    id: 2,
    name: "Running Shoes",
    shortDescription: "Lightweight running shoes with breathable mesh",
    description:
      "Lightweight running shoes with breathable mesh fabric and cushioned soles. Designed to provide maximum support and flexibility for daily jogs or marathon training. Available in multiple colors and sizes.",
    price: 59.99,
    category: "Sportswear",
    image: "/products/running-shoes.png"
  },
  {
    id: 3,
    name: "Coffee Mug",
    shortDescription: "Ceramic mug with 350ml capacity",
    description:
      "A durable ceramic mug with a 350ml capacity, ideal for coffee, tea, or hot chocolate. Dishwasher and microwave safe, with a sleek matte finish that adds style to your kitchenware collection.",
    price: 9.99,
    category: "Kitchenware",
    image: "/products/mug.png"
  }
];