import { useFetch } from "./js/useFetch";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";

function App() {
  const { data, loading, error } = useFetch(
    "http://localhost:8080/product?page=0&size=10"
  );

  return (
    <div className="app-container">
      <h1>Productos mente</h1>

      <div>
        <ProductForm />

        <div className="card">
          <ProductList data={data} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
}

export default App;
