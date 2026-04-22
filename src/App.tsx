import { CatalogService } from "./services/CatalogService";
import "./App.css";

function App() {
  const allProducts = CatalogService.listProducts();

  return (
    <div className="App">
      <h1>Shopping Catalog</h1>
      <div className="catalog">
        {allProducts.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <span className="category">{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;