// src/App.jsx
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./router/AppRouter";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Header />
      {/* AppRouter renderizará la página correspondiente (Home, Menu, Checkout) */}
      <AppRouter />
      <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
