import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, clearCart } from "./redux/cartSlice";

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <div className="cart"><h2>Your Cart</h2><p>Cart is empty.</p></div>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: "1rem" }}>
            <strong>{item.name}</strong> x {item.quantity} - ${item.price.toFixed(2)} each
            <br />
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
