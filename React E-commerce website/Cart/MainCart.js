import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import classes from "../Cart/MainCart.module.css";

const MainCart = (props) => {
  const ctx = useContext(CartContext);

  const handleAddItem = (item) => {
    ctx.addItem(item, 1); // Pass the quantity as 1
  };
  


  const handleRemoveItem = (id) => {
    ctx.RemoveItem(id)
  };

  return (
    <Modal onClose={props.onClose}>
     
      <div className={classes["cart-container"]}>
        {ctx.items.map((item) => {
          return (
           
           
            <div className={`cart-item ${classes["cart-item"]}`} key={item.id}>
              <img src={item.image} alt="Cart" />
              <div className="cart-item-info">
                <h2 className="cart-item-title">{item.title}</h2>
                <div className="cart-item-price">{`$${item.price}`}</div>
                <div className="cart-item-quantity">{`${item.quantity}X`}</div>
              </div>

              <div className={classes['cart-buttons-container']}>
    <button className={classes['decrease-btn']} onClick={() => handleRemoveItem(item.id)}> - </button>
    <span className={classes['item-count']}>1</span>
    <button className={classes['increase-btn']} onClick={() => handleAddItem(item)}> + </button>
</div>


           
            </div>
          
          );
        })}
      </div>
   

      <h4>
        <i>Happy Shopping...!!</i>
      </h4>

      <div>
        <h3 > Total Amount: ${ctx.totalPrice.toFixed(2)}</h3>
      </div>
      <button onClick={props.onClose} className={classes.closeButton}>
        Close
      </button>
      <button className={classes.mainButton}>Order</button>
    </Modal>
  );
};

export default MainCart;
