import type { Product } from "../models/Product";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%"
        }}
      >
        <h2>{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: "4px" }}
        />
        <p>{product.description}</p>
        <strong>${product.price.toFixed(2)}</strong>
        <p style={{ fontStyle: "italic" }}>{product.category}</p>
        <button
          style={{
            marginTop: "12px",
            padding: "8px 12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}