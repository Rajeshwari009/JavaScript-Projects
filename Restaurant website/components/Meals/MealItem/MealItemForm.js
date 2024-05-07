// MealItemForm.js
import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const amountInputRef = useRef();



  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  const changeHandler = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
    setAmountIsValid(true);
    props.onChange(value);


  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label>Quantity</label>
        <input
          ref={amountInputRef}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          onChange={changeHandler}
          className={classes.inputField} // Apply input class here
        />
        
      </div>
      
      <button>+ Add</button>
      {!amountIsValid && <p className={classes.error}>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
