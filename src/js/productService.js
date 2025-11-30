const API_BASE = "http://localhost:8080/product";

export async function createProduct(form) {
  const resp = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: form.name,
      description: form.description,
      price: Number(form.price),
    }),
  });

  if (!resp.ok) throw new Error("Error al crear el producto");
  return true;
}

export async function deleteProduct(id) {
  const resp = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  if (!resp.ok) throw new Error("Error al eliminar");
}

export async function updateProduct(producto) {
  const name = prompt("Nuevo nombre:", producto.name);
  if (name === null) return null;

  const priceStr = prompt("Nuevo precio:", producto.price);
  if (priceStr === null) return null;

  const resp = await fetch(`${API_BASE}/${producto.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...producto,
      name,
      price: Number(priceStr)
    }),
  });

  if (!resp.ok) throw new Error("Error al editar");
  return true;
}
