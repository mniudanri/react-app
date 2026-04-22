import type { Product } from "../models/Product";
import "./components.css";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <strong>${product.price.toFixed(2)}</strong>
        <p className="category">{product.category}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}