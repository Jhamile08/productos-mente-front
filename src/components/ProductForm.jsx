import { useState } from "react";
import { createProduct } from "../js/productService";

export function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    await createProduct(form);
    setForm({ name: "", price: "" });
    window.location.reload();
  } catch (err) {
    alert(err.message);
  }
  };

  return (
    <form onSubmit={handleSubmit} className="card" style={{ marginBottom: "1rem" ,display: "flex",alignItems: "center",gap: "1rem"}}>
      <div>
        <label>
          Nombre:
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label>
          Precio:
          <input
            type="number"
            step="0.01"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button type="submit">Crear producto</button>
    </form>
  );
}
