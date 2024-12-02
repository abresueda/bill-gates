import React from "react";

const Cart = ({ cart, products }) => {
  const cartItems = Object.keys(cart).map((id) => {
    const product = products.find((p) => p.id === parseInt(id));
    const quantity = cart[id];
    return {
      ...product,
      quantity,
      totalPrice: product.price * quantity,
    };
  });

  return (
    <div className="cart">
      <h2>Purchased Items</h2>
      {cartItems.length === 0 ? (
        <p>No items purchased yet!</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name}: {item.quantity} x ${item.price.toLocaleString()} = $
              {item.totalPrice.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
