import { deleteProduct, updateProduct } from "../js/productService";
export function ProductList({ data, loading, error }) {
  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;

    try {
      await deleteProduct(id);
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = async (producto) => {
    try {
      const updated = await updateProduct(producto);
      if (updated) window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((producto) => (
        <li key={producto.id}>
          {producto.name} : {producto.price}{" "}
          <button onClick={() => handleEdit(producto)}>Editar</button>
          <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
