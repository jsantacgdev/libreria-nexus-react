import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import BookDetailPage from "../pages/BookDetailPage/BookDetailPage";
import CoworkingPage from "../pages/CoworkingPage/CoworkingPage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import LibraryInfoPage from "../pages/LibraryInfoPage/LibraryInfoPage";
import ProtectedRoute from "../components/ProtectedRoute";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="/catalogo" element={<CatalogPage />} />
      <Route path="/libro/:id" element={<BookDetailPage />} />
      <Route path="/coworking" element={<CoworkingPage />} />
      <Route path="/carrito" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/perfil" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/biblioteca" element={<LibraryInfoPage />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
