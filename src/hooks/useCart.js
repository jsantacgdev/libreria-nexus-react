import { useEffect, useMemo, useState } from "react";

/**
 * Carrito simple en memoria con persistencia en localStorage.
 */
export function useCart(storageKey = "nexus_cart") {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, storageKey]);

  const add = (book) => {
    setItems((curr) => {
      const idx = curr.findIndex((i) => i.id === book.id);
      if (idx >= 0) {
        const copy = [...curr];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...curr, { ...book, qty: 1 }];
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
