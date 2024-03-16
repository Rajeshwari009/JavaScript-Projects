import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    setTitle("updated");
  };

  const [amount, setAmount] = useState(props.amount);

  const changeAmount = () => {
    setAmount("$100");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
      <button onClick={changeAmount}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;
