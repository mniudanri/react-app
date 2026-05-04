import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
  NavLink,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductCatalog } from "./pages/ProductCatalog";
import { CategorizedProductCatalog } from "./pages/CategorizedProductCatalog";
import { categories } from "./data/categories";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage"
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

  // search state and navigation
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get("q") || "";

  // auto expand when on category page
  useEffect(() => {
    if (location.pathname.startsWith("/category")) {
      setShowCategories(true);
    }

    // clear search textbox everytime do another action
    if (searchKeyword) {
      setKeyword("");
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
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `subcategory-link ${isActive ? "active" : ""}`
                        }
                      >
                        <span className="menu-text">{cat}</span>
                      </NavLink>
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
        <div className="page-header">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (!keyword.trim()) return;

              navigate(`/search?q=${encodeURIComponent(keyword)}`);
            }}
            style={{ marginBottom: "16px" }}
          >
            <input
              type="text"
              placeholder="Search products..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </form>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/category/:name" element={<CategorizedProductCatalog />} />
          <Route path="/search" element={<SearchPage />} />
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