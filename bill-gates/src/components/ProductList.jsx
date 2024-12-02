import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, balance, cart, onBuy, onSell }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onBuy={onBuy}
          onSell={onSell}
          canBuy={balance >= product.price}
          canSell={cart[product.id] > 0}
        />
      ))}
    </div>
  );
};

export default ProductList;
