import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductCatalog } from "./pages/ProductCatalog";
import { CategorizedProductCatalog } from "./pages/CategorizedProductCatalog";
import { categories } from "./data/categories";
import { Home } from "./pages/Home";
import {
  FaHome,
  FaBoxOpen,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
} from "react-icons/fa";
import "./App.css";

// separate layout component (needed for useLocation)
function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const location = useLocation();

  // auto expand when on category page
  useEffect(() => {
    if (location.pathname.startsWith("/category")) {
      setShowCategories(true);
    }
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* sidebar */}
      <nav className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="collapse-btn"
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft style={{alignItems: 'flex-start', flexDirection: 'column'}} />}
        </button>

        <ul>
          {/* home */}
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "menu-item active" : "menu-item"}
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>

          {/* products */}
          <li>
            <Link
              to="/catalog"
              className={
                location.pathname === "/catalog"
                  ? "menu-item active"
                  : "menu-item"
              }
            >
              <FaBoxOpen />
              <span>All Products</span>
            </Link>
          </li>

          {/* categories */}
          <li>
            <div
              className="menu-item"
              onClick={() => setShowCategories(!showCategories)}
            >
              <FaLayerGroup  />
              <span className="menu-text">Categories</span>
              <span style={{ marginLeft: "auto" }}>
                {showCategories ? "▼" : "▶"}
              </span>
            </div>

            {showCategories && (
              <ul className="subcategory">
                {categories.map((cat) => {
                  const path = `/category/${cat.toLowerCase()}`;
                  const isActive = location.pathname === path;

                  return (
                    <li key={cat}>
                      <Link to={path} className="subcategory-link">
                        <span className="menu-text">{cat}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* routing main */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/category/:name" element={<CategorizedProductCatalog />} />
        </Routes>
      </main>
    </div>
  );
}

// root app
export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}