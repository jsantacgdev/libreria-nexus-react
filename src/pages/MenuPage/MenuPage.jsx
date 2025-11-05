import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import OrderModal from "../../components/OrderModal/OrderModal";
import Toast from "../../components/Toast/Toast";
import "./MenuPage.css";

const menuItems = [
  {
    id: 1,
    name: "Espresso Doble",
    price: 2.5,
    desc: "Café intenso y aromático.",
    img: "/images/espresso.jpg"
  },
  {
    id: 2,
    name: "Croissant de Mantequilla",
    price: 1.8,
    desc: "Recién horneado, hojaldre crujiente.",
    img: "/images/croissant.jpg"
  },
  {
    id: 3,
    name: "Latte Macchiato",
    price: 3.2,
    desc: "Café con leche espumosa y suave.",
    img: "/images/latte.jpg"
  },
  {
    id: 4,
    name: "Tarta de Zanahoria",
    price: 4.0,
    desc: "Con frosting de queso crema.",
    img: "/images/carrot-cake.jpg"
  },
  {
    id: 5,
    name: "Sandwich Club",
    price: 5.5,
    desc: "Pollo, bacon, lechuga y tomate.",
    img: "/images/sandwich.jpg"
  },
  {
    id: 6,
    name: "Brownie de Chocolate",
    price: 3.5,
    desc: "Intenso chocolate con nueces.",
    img: "/images/brownie.jpg"
  },
];

const MenuPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
  };

  const handleConfirmOrder = (order) => {
    setOrderDetails(order);
    setSelectedItem(null);
    setShowToast(true);
  };

  return (
    <Layout>
      <div className="menu-page">
        <h1>Nuestro Menú</h1>
        <p>
          Elige tus productos favoritos. Todos nuestros cafés son de
          especialidad y nuestra bollería se hornea diariamente en nuestro
          obrador.
        </p>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item-card">
              <img src={item.img} alt={item.name} className="menu-item-img" />
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="menu-item-price">
                    {item.price.toFixed(2)}€
                  </span>
                </div>
                <p>{item.desc}</p>
                <button 
                  className="button button-small"
                  onClick={() => handleOrderClick(item)}
                >
                  Hacer Pedido
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <OrderModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            onConfirm={handleConfirmOrder}
          />
        )}

        {showToast && orderDetails && (
          <Toast
            message={`Pedido confirmado: ${orderDetails.quantity}x ${orderDetails.item.name}`}
            onClose={() => setShowToast(false)}
            type="success"
          />
        )}
      </div>
    </Layout>
  );
};

export default MenuPage;
