import React, { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import CartContext from "../CartContext";
import classes from "./MainCart.module.css";

const MainCart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = () => {
    let total = 0;
    for (const item of ctx.items) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2); // rounding to 2 decimal places
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-container"]}>
        {ctx.items.map((item) => {
          return (
            <div className={`cart-item ${classes["cart-item"]}`}>
              <img src={item.image} alt="Cart"></img>
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              <button className={classes.buttons}>Remove</button>
            </div>
          );
        })}
      </div>

      <h4>
        <i>AGENDA- Make You Happy & Healthy....!</i>
      </h4>

      <div>
        <h3>Total Amount: {totalAmount}</h3>
      </div>
      <button onClick={props.onClose} className={classes.closeButton}>
        Close
      </button>
      <button className={classes.mainButton}>Order</button>
    </Modal>
  );
};

export default MainCart;
