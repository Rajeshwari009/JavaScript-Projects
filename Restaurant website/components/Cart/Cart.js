// Cart.js
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React, { useContext } from 'react';
import CartContext from '../../Store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  
  const itemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };



  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id} className={classes['cart-item']}>
      <div>
        <img src={item.image} alt={item.name} className={classes['cart-item-image']} />
      </div>
      <div className={classes['cart-item-info']}>
        <div className={classes['cart-item-name']}>{item.name}</div>
        <div className={classes['cart-item-details']}>
          <span className={classes['cart-item-price']}>Price: ${item.price.toFixed(2)}</span>
          <span className={classes['cart-item-quantity']}>Quantity: {item.quantity}</span>
        </div>
      </div>
      <button className={classes['cart-item-remove']} onClick={() => itemRemoveHandler(item.id)}>Remove</button>
      
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span className={classes.amount}>${cartCtx.totalPrice.toFixed(2)}</span>      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
