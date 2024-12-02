import React from "react";

const ProductItem = ({ product, onBuy, onSell, canBuy, canSell }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toLocaleString()}</p>
      <button onClick={() => onBuy(product)} disabled={!canBuy}>
        Buy
      </button>
      <button onClick={() => onSell(product)} disabled={!canSell}>
        Sell
      </button>
    </div>
  );
};

export default ProductItem;
