import { useEffect, useMemo, useState } from "react";
import { parsePrice } from "../utils/price";

/**
 * Carrito simple en memoria con persistencia en localStorage.
 */
export function useCart(storageKey = "nexus_cart") {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      // Normalizar precio a número si viene en formato string ("10,95")
      return Array.isArray(parsed)
        ? parsed.map((it) => ({ ...it, price: parsePrice(it.price ?? it.precio ?? 0) }))
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, storageKey]);

  const add = (book) => {
    setItems((curr) => {
      const priceNum = parsePrice(book.price ?? book.precio ?? 0);
      // Asegurarse de guardar también la imagen, título y autor
      const item = { 
        ...book, 
        price: priceNum,
        imagen: book.imagen || book.cover,
        titulo: book.titulo || book.title,
        autor: book.autor || book.author
      };
      const idx = curr.findIndex((i) => i.id === item.id);
      if (idx >= 0) {
        const copy = [...curr];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...curr, { ...item, qty: 1 }];
    });
  };

  const remove = (id) => setItems((curr) => curr.filter((i) => i.id !== id));
  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((acc, it) => acc + (it.price || 0) * (it.qty || 1), 0),
    [items]
  );

  return { items, add, remove, clear, total };
}
