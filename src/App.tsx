import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ProductCatalog } from "./pages/ProductCatalog";
import { Home } from "./pages/Home";
import { FaHome, FaBoxOpen, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./App.css";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <button onClick={() => setCollapsed(!collapsed)} className="collapse-btn">
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
          <ul>
            <li>
              <Link to="/" title="Home">
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/catalog" title="Product Catalog">
                <FaBoxOpen />
                <span>Product Catalog</span>
              </Link>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<ProductCatalog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}