import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";

const menuItems = [
  { id: 1, name: "Espresso", price: 3.0, description: "Strong and bold espresso shot." },
  { id: 2, name: "Cappuccino", price: 4.0, description: "Espresso with steamed milk and foam." },
  { id: 3, name: "Latte", price: 4.5, description: "Smooth espresso with steamed milk." },
  { id: 4, name: "Mocha", price: 5.0, description: "Espresso, chocolate, and steamed milk." },
  { id: 5, name: "Croissant", price: 2.5, description: "Freshly baked buttery croissant." },
  { id: 6, name: "Muffin", price: 2.0, description: "Blueberry muffin." },
];

const Menu = () => {
  const dispatch = useDispatch();
  return (
    <div className="menu">
      <h2>Coffee Shop Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id} style={{ marginBottom: "1rem" }}>
            <strong>{item.name}</strong> - ${item.price.toFixed(2)}<br />
            <span>{item.description}</span>
            <br />
            <button onClick={() => dispatch(addToCart(item))} style={{ marginTop: "0.5rem" }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
