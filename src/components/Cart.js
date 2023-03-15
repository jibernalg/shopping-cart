import React from "react";

function Cart({ cartItems }) {
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // Redirect the user to the checkout page
  };

  return (
    <div className="Cart">
      {cartItems.length === 0 && <p>No items in cart.</p>}
      {cartItems.map((item, index) => (
        <div key={index} className="item">
          <div className="name">{item.product.name}</div>
          <div className="quantity">Quantity: {item.quantity}</div>
          <div className="price">${item.product.price * item.quantity}</div>
        </div>
      ))}
      <h3>Total Cost: ${cartTotal}</h3>
      <button className="checkout" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
