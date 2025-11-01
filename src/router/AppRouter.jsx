import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Definimos las tres páginas  */}
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* Una ruta "catch-all" por si no encuentra la página */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
