import "./ExpenseItem.css";
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";




function ExpenseItem(props) {

  const changeTitle=()=>{
    console.log("clicked")
  }
  const deleteExpense=()=>{
    console.log("deleted")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
      <button onclick={deleteExpense}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
