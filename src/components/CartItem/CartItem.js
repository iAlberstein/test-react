import React from "react";

const CartItem = ({ id, name, quantity, price }) => {
  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Cantidad: {quantity}</p>
      <p>Precio unitario: ${price}</p>
    </div>
  );
};

export default CartItem;