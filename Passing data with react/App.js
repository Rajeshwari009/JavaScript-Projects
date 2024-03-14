import "./App.css";
import ExpenseItems from "./components/ExpenseItem";
function App() {
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
      date: new Date(2022, 8, 22),
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
    <div>
      <h1>Let's get started !</h1>

      {expenses.map((expense)=>(
        <ExpenseItems 
        key={expense.id}
        title= {expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
        />
      ))}

      {/* <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItems>

      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItems>

      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItems>

      <ExpenseItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItems> */}
    </div>
  );
}

export default App;
