import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import classes from "../Cart/MainCart.module.css";

const MainCart = (props) => {
  const ctx = useContext(CartContext);
  // const handleRemoveItem = (itemId) => {
  //   ctx.removeItems(itemId);
  // };


  return (
    <Modal onClose={props.onClose}>
      <div className={classes["cart-container"]}>
        {ctx.items.map((item) => {
          return (
            <div className={`cart-item ${classes["cart-item"]}`} key={item.id}>
              <img src={item.image} alt="Cart"></img>
              <h2>{item.title}</h2>
              <h4>${item.price}</h4>
              <h4>{item.quantity}X</h4>
              <button className={classes.buttons} >Remove</button>
            </div>
          );
        })}
      </div>

      <h4>
        <i>Happy shopping...!!</i>
      </h4>

      <div>
        <h3>Total Amount: ${ctx.totalPrice.toFixed(2)}</h3>
      </div>
      <button onClick={props.onClose} className={classes.closeButton}>
        Close
      </button>
      <button className={classes.mainButton}>Order</button>
    </Modal>
  );
};

export default MainCart;
