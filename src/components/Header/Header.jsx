import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="header-logo">
          {/* <img src={logo} alt="Nexus Logo" /> */}
          <h1>Nexus Café</h1>
        </NavLink>
        <nav className="header-nav">
          {/* Los tres enlaces de navegación [cite: 16] */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Menú
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Pedido
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
