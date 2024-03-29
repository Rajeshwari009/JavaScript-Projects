import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (newItem) => {
    setItems([...items, newItem]);
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };



  const cartContext = {
    items: items,
    addItems: addItemToCartHandler,
    totalPrice: calculateTotalPrice(),
    totalAmount: calculateTotalAmount(),
    price: 0,
    // removeItems:removeItemFromCartHandler ,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
