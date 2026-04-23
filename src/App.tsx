import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductCatalog } from "./pages/ProductCatalog";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <nav
          style={{
            width: "200px",
            background: "#f4f4f4",
            padding: "20px",
            height: "100vh"
          }}
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Product Catalog</Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<ProductCatalog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}