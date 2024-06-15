// DummyWelcome.js

import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Store/AuthContext';
import classes from './DummyWelcome.module.css'; 

const DummyWelcome = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [moneySpent, setMoneySpent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
console.log(setEditingExpense, setExpenses)


// const userEmail=localStorage.getItem('email')
// const userName=userEmail && userEmail.split('@')[0];

const userEmail = localStorage.getItem('email');
// const encodedUserName = userEmail ? btoa(userEmail.split('@')[0]) : null;
const encodedUserName=userEmail && userEmail.split('@')[0]


  const profileHandler = () => {
    history.push("/profile");
  };

  const emailVerification = () => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCVbUdX67Ed2Oe0rBXhgPCM1avmUtDoOVk', {
      method: 'POST',
      body: JSON.stringify({ requestType: 'VERIFY_EMAIL', idToken: authCtx.token }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          alert('An email verification link has been sent to your email address.');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => alert(error));
  };


  useEffect(() => {
    fetch(`https://expense1-a807b-default-rtdb.firebaseio.com/expenses/${encodedUserName}.json`)
      .then((res) => {
        if (res.ok) { return res.json(); }
      })
      .then(data => {
        console.log(data);
        if (data) {
          const fetchedExpenses = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          setExpenses(fetchedExpenses);
        }
      });
  }, [encodedUserName]);
  


  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = { moneySpent, description, category };

    fetch(`https://expense1-a807b-default-rtdb.firebaseio.com/expenses/${encodedUserName}.json`,{
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data =>{ 
      console.log(data)
      console.log(encodedUserName)
      setExpenses([...expenses, { id: data.name, ...obj }]);
  })
    .catch(error => alert(error));
    setMoneySpent('');
    setDescription('');
    setCategory('');
  };




  const handleEdit = (item) => {
    setEditingExpense(item);
    setMoneySpent(item.moneySpent);
    setDescription(item.description);
    setCategory(item.category);
  };


  const handleUpdate = (event) => {
    event.preventDefault();
  
    const updatedExpense = { moneySpent, description, category };
    fetch(`https://expense1-a807b-default-rtdb.firebaseio.com/expenses/${encodedUserName}/${editingExpense.id}.json`, {
      method: "PATCH", // Use PATCH method to update existing data
      body: JSON.stringify(updatedExpense),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(() => {
      setExpenses(expenses.map(expense => {
        if (expense.id === editingExpense.id) {
          return { ...expense, ...updatedExpense };
        }
        return expense;
      }));
      console.log("Expense successfully updated");
      setEditingExpense(null);
    })
    .catch(error => alert(error));
  
    setMoneySpent('');
    setDescription('');
    setCategory('');
  };
  




  const handleDelete = (id) => {
    console.log("Deleting item with id:", id);
    fetch(`https://expense1-a807b-default-rtdb.firebaseio.com/expenses/${encodedUserName}/${id}.json`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete expense');
      }
      setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
      console.log("Expense successfully deleted");
    })
    .catch(error => {
      console.error('Error deleting expense:', error);
      alert('Failed to delete expense. Please try again.');
    });
  };
  

  

  return (
   <div className={classes.body2}>
    <div className={classes.container}>
    <div className={classes.content}>
      <h1>𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓔𝔁𝓹𝓮𝓷𝓼𝓮 𝓣𝓻𝓪𝓬𝓴𝓮𝓻...!</h1>
      <h3>Your user profile is incomplete</h3>
      <div className={classes.buttonContainer}>
        <button onClick={profileHandler} className={classes.completeButton}>COMPLETE NOW</button>
        <button onClick={emailVerification} className={classes.verifyButton}>Verify Email</button>
      </div>
      <div className={classes.formContainer}>
        <h2>Enter Expense Details</h2>
        <form onSubmit={editingExpense ? handleUpdate : handleSubmit} className={classes.form}>
          <div>
            <label>Money Spent:</label>
            <input type="number" value={moneySpent} onChange={(e) => setMoneySpent(e.target.value)} required />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select category</option>
              <option value="Food">Food</option>
              <option value="Petrol">Petrol</option>
              <option value="Salary">Salary</option>
            </select>
          </div>
          <button type="submit" className={classes['submit-button']}>{editingExpense ? 'Update' : 'Submit'}</button>
        </form>
      </div>  
    </div>
    <div>

      <h2>YOUR EXPENSE HISTORY:</h2>
      <ul className={classes['expenses-list']}>
  {expenses.map((item) => {
    console.log("Item ID:", item.id); // Log item.id to check if it's defined
    return (
      <li key={item.id}>
        Money Spent: {item.moneySpent}
        Description: {item.description}
        Category: {item.category}
        <button onClick={() => handleEdit(item)}>Edit</button>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </li>
    );
  })}
</ul>

    </div>
  </div>
  </div>

);
};

export default DummyWelcome;


 // const want=   prompt("You want to delete the Expense? ")
    //   if(want ==="yes"){
    //   alert('Expense Deleted')}