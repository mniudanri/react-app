import { useState, useEffect } from "react";
import { promos } from "../data/promos";
import "./components.css";

export default function PromoCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % promos.length);
  const prev = () => setIndex((prev) => (prev - 1 + promos.length) % promos.length);

  useEffect(() => {
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promo-carousel">
        <div
            className="promo-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
        >
            {promos.map((promo) => (
            <div key={promo.id} className="promo-card">
                <img src={promo.image} alt={promo.title} />
                <h2>{promo.title}</h2>
                <p>{promo.text}</p>
            </div>
            ))}
        </div>
        <button onClick={prev} className="nav-btn">❮</button>
        <button onClick={next} className="nav-btn">❯</button>
    </div>
  );
}
