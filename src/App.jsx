// src/App.jsx
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      {/* AppRouter renderizará la página correspondiente (Home, Menu, Checkout) */}
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
