import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import CoworkingPage from "../pages/CoworkingPage/CoworkingPage";
import CafeteriaPage from "../pages/CafeteriaPage/CafeteriaPage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";


const AppRouter = () => {
  return (
    <Routes>
      {/* Definimos las tres páginas  */}
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* nuevas */}
      <Route path="/catalogo" element={<CatalogPage />} />
      <Route path="/coworking" element={<CoworkingPage />} />
      <Route path="/cafeteria" element={<CafeteriaPage />} />
      <Route path="/carrito" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/perfil" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

      {/* Una ruta "catch-all" por si no encuentra la página */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
