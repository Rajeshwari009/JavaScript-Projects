// DummyWelcome.js

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Store/AuthContext';
import classes from './DummyWelcome.module.css'; // Importing CSS module

const DummyWelcome = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [moneySpent, setMoneySpent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
console.log(setEditingExpense, setExpenses)
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

  const handleSubmit = () => {

  };

  const handleEdit = () => {

  };

  const handleDelete = () => {

  };

  const handleUpdate = () => {

  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>Welcome to Expense Tracker...!</h1>
        <h3>Your user profile is incomplete</h3>
        <button onClick={profileHandler} className={classes.completeButton}>COMPLETE NOW</button>
        <button onClick={emailVerification} className={classes.verifyButton}>Verify Email</button>
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
            <button type="submit" className={classes.submitButton}>{editingExpense ? 'Update' : 'Submit'}</button>
          </form>
        </div>
        <div>
          <h2>Expenses List</h2>
          <ul className={classes.expensesList}>
            {expenses.map((item, index) => (
              <li key={index}>
                Money Spent: {item.moneySpent}
                Description: {item.description}
                Category: {item.category}
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => { handleDelete(item.id) }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DummyWelcome;
