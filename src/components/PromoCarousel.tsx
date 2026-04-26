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
      <button onClick={prev} className="nav-btn">❮</button>
      <div className="promo-card">
        <img src={promos[index].image} alt={promos[index].title} />
        <h2>{promos[index].title}</h2>
        <p>{promos[index].text}</p>
      </div>
      <button onClick={next} className="nav-btn">❯</button>
    </div>
  );
}
