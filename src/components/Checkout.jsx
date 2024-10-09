
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./Checkout.css"

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  // Calcular el total usando el precio de cada carta
  const total = cart.reduce((acc, item) => {
    const price = item.cardmarket?.prices?.lowPrice || 0; 
    return acc + price * item.quantity; // Sumar precio * cantidad
  }, 0);

  const handlePurchase = () => {
    // Simular la compra
    alert('Compra realizada con éxito!');
    clearCart(); // Vaciar el carrito
  };

  return (
    <div>
      <h2>Detalles de Compra</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li class="list-group-item list-group-item-dark tam" key={index}>
                {item.name} - Cantidad: {item.quantity} - Precio: ${item.cardmarket?.prices?.lowPrice || 0}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3> {/* Mostrar total */}
          <button onClick={handlePurchase}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

