import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useCart } from "../../hooks/useCart";
import { formatPriceDisplay } from "../../utils/price";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    metodoPago: "tarjeta"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Pedido realizado con éxito! Recibirás un email de confirmación.");
    clear();
    navigate("/catalogo");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="checkout-page">
          <h1>Finalizar Compra</h1>
          <p className="text-center text-ink-700 mt-6">
            Tu carrito está vacío. 
            <a href="/catalogo" className="text-primary-600 hover:underline ml-2">
              Ir al catálogo
            </a>
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="checkout-page">
        <h1>Finalizar Compra</h1>
        <p>
          Completa tus datos para finalizar la compra de tus libros.
        </p>

        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>1. Resumen del pedido</h3>
            <ul className="order-summary">
              {items.map((item) => (
                <li key={item.id}>
                  {item.titulo || item.title} x{item.qty}
                  <span>{formatPriceDisplay(item.price * item.qty)}</span>
                </li>
              ))}
              <li className="total">
                Total <span>{formatPriceDisplay(total)}</span>
              </li>
            </ul>

            <h3>2. Datos de envío</h3>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required 
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="text" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección de envío *</label>
              <input
              type="text" 
                id="direccion" 
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required 
                placeholder="Calle, número, piso, código postal, ciudad"
              />
            </div>

            <h3>3. Método de pago</h3>
            <fieldset className="delivery-options">
              <div className="radio-group">
                <input
                  type="radio"
                  id="tarjeta"
                  name="metodoPago"
                  value="tarjeta"
                  checked={formData.metodoPago === "tarjeta"}
                  onChange={handleChange}
                />
                <label htmlFor="tarjeta">Tarjeta de crédito/débito</label>
              </div>
              <div className="radio-group">
                <input 
                  type="radio" 
                  id="paypal" 
                  name="metodoPago" 
                  value="paypal"
                  checked={formData.metodoPago === "paypal"}
                  onChange={handleChange}
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
              <div className="radio-group">
                <input 
                  type="radio" 
                  id="transferencia" 
                  name="metodoPago" 
                  value="transferencia"
                  checked={formData.metodoPago === "transferencia"}
                  onChange={handleChange}
                />
                <label htmlFor="transferencia">Transferencia bancaria</label>
              </div>
            </fieldset>

            <button type="submit" className="button">
              Confirmar Compra
            </button>
          </form>

          <div className="checkout-image">
            <p>
              Gracias por elegir Librería Nexus. Todos nuestros libros son 
              cuidadosamente seleccionados para ofrecerte la mejor experiencia 
              de lectura.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
