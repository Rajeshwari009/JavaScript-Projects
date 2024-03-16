import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title:
            <input
              type="text"
              id="Expense title"
              onChange={titleChangeHandler}
            ></input>
          </label>
        </div>
        <div className="new-expense__control">
          <label>
            Amount:
            <input
              type="number"
              min="0.01"
              steps="0.01"
              onChange={amountChangeHandler}
            ></input>
          </label>
        </div>

        <div className="new-expense__control">
          <label>
            Date:
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            ></input>
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>{" "}
      </div>
    </form>
  );
};

export default ExpenseForm;
