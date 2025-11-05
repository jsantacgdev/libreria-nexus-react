import { useState } from "react";
import "./OrderModal.css";

export default function OrderModal({ item, onClose, onConfirm }) {
  const [quantity, setQuantity] = useState(1);
  const [deliveryType, setDeliveryType] = useState("mostrador");
  const [tableNumber, setTableNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      item,
      quantity,
      deliveryType,
      tableNumber: deliveryType === "mesa" ? tableNumber : null,
      total: item.price * quantity
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          <img src={item.img} alt={item.name} className="modal-img" />
          <div>
            <h2>{item.name}</h2>
            <p className="modal-desc">{item.desc}</p>
            <p className="modal-price">{item.price.toFixed(2)}€</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="quantity">Cantidad</label>
            <div className="quantity-control">
              <button 
                type="button" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
              >
                -
              </button>
              <input 
                type="number" 
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                className="quantity-input"
              />
              <button 
                type="button" 
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>¿Dónde lo quieres?</label>
            <div className="radio-group">
              <input
                type="radio"
                id="mostrador"
                name="delivery"
                value="mostrador"
                checked={deliveryType === "mostrador"}
                onChange={(e) => setDeliveryType(e.target.value)}
              />
              <label htmlFor="mostrador">Recoger en el mostrador</label>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                id="mesa"
                name="delivery"
                value="mesa"
                checked={deliveryType === "mesa"}
                onChange={(e) => setDeliveryType(e.target.value)}
              />
              <label htmlFor="mesa">Llevar a mi mesa (Co-working)</label>
            </div>
          </div>

          {deliveryType === "mesa" && (
            <div className="form-group">
              <label htmlFor="table">Número de mesa *</label>
              <input
                type="text"
                id="table"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="Ej: Mesa 5"
                required
                className="table-input"
              />
            </div>
          )}

          <div className="modal-total">
            <span>Total:</span>
            <span className="total-amount">{(item.price * quantity).toFixed(2)}€</span>
          </div>

          <button type="submit" className="button button-primary">
            Confirmar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}
