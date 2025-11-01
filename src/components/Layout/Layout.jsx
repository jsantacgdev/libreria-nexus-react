// src/components/Layout/Layout.jsx
import React from "react";
import "./Layout.css";

// Este componente recibe 'children', que será el contenido de cada página
const Layout = ({ children }) => {
  return <main className="layout-container">{children}</main>;
};

export default Layout;
