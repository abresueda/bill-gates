import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './App.css';

const App = () => {
  const [balance, setBalance] = useState(100000000000);
  const [cart, setCart] = useState({});

  const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Smartphone", price: 1000 },
    { id: 3, name: "Bicycle", price: 500 },
    { id: 4, name: "Electric Scooter", price: 800 },
    { id: 5, name: "Gaming Console", price: 400 },
    { id: 6, name: "Car", price: 30000 },
    { id: 7, name: "Motorcycle", price: 12000 },
    { id: 8, name: "Boat", price: 75000 },
    { id: 9, name: "Jet", price: 5000000 },
    { id: 10, name: "Yacht", price: 10000000 },
    { id: 11, name: "Private Island", price: 75000000 },
    { id: 12, name: "Luxury Watch", price: 15000 },
    { id: 13, name: "Designer Handbag", price: 3000 },
    { id: 14, name: "Concert Tickets", price: 200 },
    { id: 15, name: "Art Piece", price: 2000000 },
    { id: 16, name: "Gold Bar", price: 60000 },
    { id: 17, name: "Space Flight", price: 250000 },
    { id: 18, name: "Supercar", price: 300000 },
    { id: 19, name: "Mansion", price: 15000000 },
    { id: 20, name: "Helicopter", price: 3000000 },
  ];  

  const buyItem = (product) => {
    if (balance >= product.price) {
      setBalance(balance - product.price);
      setCart((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 0) + 1,
      }));
    }
  };

  const sellItem = (product) => {
    if (cart[product.id] > 0) {
      setBalance(balance + product.price);
      setCart((prev) => ({
        ...prev,
        [product.id]: prev[product.id] - 1,
      }));
    }
  };

  return (
    <div className="app">
      <Header balance={balance} />
      <ProductList
        products={products}
        balance={balance}
        cart={cart}
        onBuy={buyItem}
        onSell={sellItem}
      />
      <Cart cart={cart} products={products} />
    </div>
  );
};

export default App;
