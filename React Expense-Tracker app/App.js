
import React ,{useState} from "react";
import Expenses from "./components/Expenses/Expenses"

import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const Dummy_Expenses= [
  {
    id: "e1",
    title: "Business Meet",
    amount: 90,
    date: new Date(2020, 6, 20),
    location: "United states",
  },

  {
    id: "e2",
    title: "Insurance",
    amount: 200,
    date: new Date(2021, 2, 28),
    location: "SBI",
  },
  {
    id: "e3",
    title: "Home loan",
    amount: 290,
    date: new Date(2022, 1, 22),
    location: "Bhopal",
  },
  {
    id: "e4",
    title: "Trip to Manali",
    amount: 50,
    date: new Date(2023, 4, 14),
    location: "Manali",
  },
];



const App = ()=> {

  const [expenses, setExpenses]= useState(Dummy_Expenses);


const addExpenseHandler=(expense) => {
 setExpenses((prevExpenses) => {
  return [expense, ...prevExpenses]
  
 })
}

  return (
    <div>
      <NewExpense onAddExpense= {addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

