const API_URL = import.meta?.env?.VITE_API_URL || process.env.REACT_APP_API_URL || "http://localhost:3001";

export async function getBooks() {
  // Intenta API externa; si falla, usa fallback local /books.json (en public/)
  try {
    const res = await fetch(`${API_URL}/books`);
    if (!res.ok) throw new Error("bad status");
    return await res.json();
  } catch (e) {
    const res = await fetch("/books.json");
    if (!res.ok) throw new Error("fallback not found");
    return await res.json();
  }
}
