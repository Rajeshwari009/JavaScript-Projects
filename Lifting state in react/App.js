
import Expenses from "./components/Expenses/Expenses"

import NewExpense from "./components/Expenses/NewExpense/NewExpense";
function App() {

const addExpenseHandler=(expense)=>{
  console.log("In app.js")
  // console.log(expense)

}

  return (
    <div>
      <NewExpense onAddExpense= {addExpenseHandler}/>
      <Expenses></Expenses>
    </div>
  );
}

export default App;

