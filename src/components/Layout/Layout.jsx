// src/components/Layout/Layout.jsx
import React from "react";

/**
 * Mantiene la misma API (children) y la misma ubicación,
 * pero ahora el contenedor usa Tailwind y las utilidades globales.
 */
const Layout = ({ children }) => {
  return (
    <main className="container-page my-5 rounded-xl2 bg-white shadow-soft min-h-[70vh] p-5">
      {children}
    </main>
  );
};

export default Layout;
