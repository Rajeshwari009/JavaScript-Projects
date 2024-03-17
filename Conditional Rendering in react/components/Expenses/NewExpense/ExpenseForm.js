import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle]= useState('')
  const [enteredAmount, setEnteredAmount]= useState('')
  const [enteredDate, setEnteredDate]= useState('')


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };
  
  const submitHandler = (event)=>{
    event.preventDefault()
    const expenseData= {
      title: enteredTitle,
      amount: enteredAmount,
      date:new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData)
 //clearing the input fields
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')


  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>
            Title:
            <input
              type="text"
              onChange={titleChangeHandler} value={enteredTitle}
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
              onChange={amountChangeHandler} value={enteredAmount}
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
              onChange={dateChangeHandler} value= {enteredDate}
            ></input>
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>{" "}
      </div>
    </form>
  );
};

export default ExpenseForm;
