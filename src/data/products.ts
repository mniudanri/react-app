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
  },
  {
    id: 4,
    name: "Cozy Socks Collection",
    shortDescription: "Stay warm & stylish with our latest designs",
    description:
      "A premium set of cozy cotton socks designed for comfort and style. Includes multiple patterns and colors perfect for lounging or casual wear. Soft, breathable, and machine washable for everyday use.",
    price: 12.99,
    category: "Apparel",
    image: "/products/socks.png",
  },
  {
    id: 5,
    name: "Elegant Lamps",
    shortDescription: "Brighten your home with timeless lighting pieces",
    description:
      "A curated collection of elegant lamps featuring ceramic, glass, and brass finishes. Perfect for adding warmth and sophistication to any living space. Compatible with standard bulbs and energy-efficient options.",
    price: 49.99,
    category: "Home & Living",
    image: "/products/lamp.png",
  },
  {
    id: 6,
    name: "Chic Handbags",
    shortDescription: "Find your perfect bag for every occasion",
    description:
      "Stylish handbags crafted from premium leather with gold accents. Includes satchels, crossbody bags, and purses designed for both casual and formal wear. Durable stitching and spacious compartments for daily essentials.",
    price: 89.99,
    category: "Accessories",
    image: "/products/bag.png",
  },
  {
    id: 7,
    name: "Wireless Headphones",
    shortDescription: "Comfortable over-ear design with rich sound",
    description:
      "Modern wireless headphones featuring soft cushioned ear cups, adjustable headband, and immersive sound quality. Ideal for work, travel, or leisure listening with up to 20 hours of battery life.",
    price: 79.99,
    category: "Electronics",
    image: "/products/head-phone.png",
  },
  {
    id: 8,
    name: "Smartwatch Pro",
    shortDescription: "Track fitness and stay connected on the go",
    description:
      "A sleek smartwatch with heart rate monitoring, step tracking, and message notifications. Features a durable silicone strap and customizable digital watch face for daily use.",
    price: 129.99,
    category: "Wearables",
    image: "/products/smart-watch.png",
  },
  {
    id: 9,
    name: "Wireless Earbuds",
    shortDescription: "Compact design with crystal-clear audio",
    description:
      "Lightweight wireless earbuds with noise isolation and a portable charging case. Perfect for workouts, commuting, or casual listening with up to 24 hours of playback.",
    price: 59.99,
    category: "Electronics",
    image: "/products/earbuds.png",
  },
  {
    id: 10,
    name: "Insulated Water Bottle",
    shortDescription: "Keeps drinks hot or cold for hours",
    description:
      "A stainless steel insulated bottle with a sleek brushed finish. Leak-proof screw lid and double-wall vacuum insulation maintain temperature for up to 12 hours hot or 24 hours cold.",
    price: 24.99,
    category: "Outdoor & Lifestyle",
    image: "/products/bottle.png",
  },
];