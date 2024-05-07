// MealItem.js
import React, { useState, useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const addItemHandler = (mealQuantity) => {
    const item = { ...props, quantity: mealQuantity };
    cartCtx.addItem(item);
  };

  const changeQuantityHandler = (value) => {
    setQuantity(value);
  };

  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <img src={props.image} alt={props.name} className={classes.image} />
      </div>
      <div>
        <MealItemForm
          onAddToCart={addItemHandler}
          onChange={changeQuantityHandler}
        />
      </div>
    </div>
  );
};

export default MealItem;
