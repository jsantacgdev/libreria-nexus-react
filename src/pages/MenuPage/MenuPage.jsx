// src/pages/MenuPage/MenuPage.jsx
import React from "react";
import Layout from "../../components/Layout/Layout";
import "./MenuPage.css";
// import cafeImg from '../../assets/cafe.jpg';
// import croissantImg from '../../assets/croissant.jpg';
// import sandwichImg from '../../assets/sandwich.jpg';

// Datos de ejemplo para el menú
const menuItems = [
  {
    id: 1,
    name: "Espresso Doble",
    price: 2.5,
    desc: "Café intenso y aromático." /*, img: cafeImg*/,
  },
  {
    id: 2,
    name: "Croissant de Mantequilla",
    price: 1.8,
    desc: "Recién horneado, hojaldre crujiente." /*, img: croissantImg*/,
  },
  {
    id: 3,
    name: "Sandwich Mixto",
    price: 3.5,
    desc: "Jamón y queso en pan de molde tostado." /*, img: sandwichImg*/,
  },
  {
    id: 4,
    name: "Zumo de Naranja Natural",
    price: 3.0,
    desc: "Exprimido al momento." /*, img: null*/,
  },
];

const MenuPage = () => {
  return (
    <Layout>
      <div className="menu-page">
        <h1>Nuestro Menú</h1>
        <p>
          Elige tus productos favoritos. Todos nuestros cafés son de
          especialidad y nuestra bollería se hornea diariamente en nuestro
          obrador.
        </p>

        {/* Layout de filas y columnas para el menú  */}
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item-card">
              {/* <img src={item.img} alt={item.name} className="menu-item-img" />  */}
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="menu-item-price">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p>{item.desc}</p>
                <button className="button button-small">
                  Añadir al pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MenuPage;
