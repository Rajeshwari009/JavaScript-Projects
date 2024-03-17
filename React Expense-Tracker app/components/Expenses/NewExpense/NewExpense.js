import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing, setIsediting]= useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(enteredExpenseData);
    setIsediting(false)
    console.log(expenseData);
  };


const startEditingHandler= ()=> {
  setIsediting(true)
}

const stopEditingHandler =()=>{
  setIsediting(false)
}

  return (
    <div className="new-expense">
     {!isEditing && <button onClick={startEditingHandler}>Add Expense</button> }
    {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel= {stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
