import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses() {
  const expenses = [
    {
      id: "e1",
      title: "Business Meet",
      amount: 94.12,
      date: new Date(2020, 6, 20),
      location: "United states",
    },

    {
      id: "e1",
      title: "Insurance",
      amount: 94.12,
      date: new Date(2021, 2, 28),
      location: "SBI",
    },
    {
      id: "e1",
      title: "Home loan",
      amount: 94.12,
      date: new Date(2022, 1, 22),
      location: "Bhopal",
    },
    {
      id: "e1",
      title: "Trip to Manali",
      amount: 94.12,
      date: new Date(2023, 4, 14),
      location: "Manali",
    },
  ];
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
