// src/pages/CheckoutPage/CheckoutPage.jsx
import React from "react";
import Layout from "../../components/Layout/Layout";
import "./CheckoutPage.css";
// import checkoutImg from '../../assets/checkout.jpg';

const CheckoutPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pedido realizado. ¡Gracias por tu compra!");
  };

  return (
    <Layout>
      <div className="checkout-page">
        <h1>Finalizar Pedido</h1>
        <p>
          Ya casi está. Revisa tu pedido y dinos dónde quieres recibirlo. Puedes
          recogerlo cómodamente en el mostrador o te lo llevamos directamente a
          tu mesa de la zona de coworking.
        </p>

        {/* Layout de dos columnas  */}
        <div className="checkout-content">
          {/* Columna 1: Formulario */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>1. Revisa tu pedido (ejemplo)</h3>
            <ul className="order-summary">
              <li>
                Espresso Doble <span>$2.50</span>
              </li>
              <li>
                Croissant de Mantequilla <span>$1.80</span>
              </li>
              <li className="total">
                Total <span>$4.30</span>
              </li>
            </ul>

            {/* Requisito: Selección de entrega  */}
            <h3>2. Selecciona el punto de entrega</h3>
            <fieldset className="delivery-options">
              <legend>¿Dónde te lo llevamos?</legend>
              <div className="radio-group">
                <input
                  type="radio"
                  id="mostrador"
                  name="entrega"
                  value="mostrador"
                  defaultChecked
                />
                <label htmlFor="mostrador">Recoger en el mostrador</label>
              </div>
              <div className="radio-group">
                <input type="radio" id="mesa" name="entrega" value="mesa" />
                <label htmlFor="mesa">Entregar en mesa de Co-working</label>
              </div>
            </fieldset>

            <div className="form-group">
              <label htmlFor="mesa-numero">Número de Mesa (si aplica)</label>
              <input type="text" id="mesa-numero" placeholder="Ej: Mesa 12" />
            </div>

            <button type="submit" className="button">
              Confirmar Pedido
            </button>
          </form>

          {/* Columna 2: Imagen  */}
          <div className="checkout-image">
            {/* <img src={checkoutImg} alt="Persona pagando en cafetería" /> */}
            <p>
              Gracias por elegir Nexus. Tu apoyo nos permite seguir siendo un
              espacio abierto para la cultura y la creatividad en la
              universidad.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
