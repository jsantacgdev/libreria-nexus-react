const API_URL = import.meta?.env?.VITE_API_URL || 
                 process.env.REACT_APP_API_URL || 
                 "https://mock.apidog.com/m1/1080009-1068938-default";

export async function getBooks() {
  // Intenta API de Apidog; si falla, usa fallback local /books.json (en public/)
  try {
    const res = await fetch(`${API_URL}/books`);
    if (!res.ok) throw new Error("bad status");
    return await res.json();
  } catch (e) {
    console.warn("⚠️ API no disponible, usando datos locales de fallback");
    const res = await fetch("/books.json");
    if (!res.ok) throw new Error("fallback not found");
    return await res.json();
  }
}

// Obtener libro por ID
export async function getBookById(id) {
  try {
    const res = await fetch(`${API_URL}/books/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.error("Error obteniendo libro:", e);
    throw e;
  }
}

// Obtener libros por categoría
export async function getBooksByCategory(categoria) {
  try {
    const res = await fetch(`${API_URL}/books?categoria=${encodeURIComponent(categoria)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.error("Error obteniendo libros por categoría:", e);
    throw e;
  }
}

// Obtener la biblioteca
export async function getLibrary() {
  try {
    const res = await fetch(`${API_URL}/library`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.error("Error obteniendo biblioteca:", e);
    throw e;
  }
}

// Obtener reseñas de un libro
export async function getBookReviews(id) {
  try {
    const res = await fetch(`${API_URL}/books/${id}/reviews`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.error("Error obteniendo reseñas:", e);
    throw e;
  }
}

// Añadir reseña a un libro
export async function addBookReview(id, reviewData) {
  try {
    const res = await fetch(`${API_URL}/books/${id}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    // La API devuelve 204 No Content en éxito
    if (res.status === 204) return { success: true };
    return await res.json();
  } catch (e) {
    console.error("Error añadiendo reseña:", e);
    throw e;
  }
}
