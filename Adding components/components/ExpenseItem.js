import React from 'react';
import './ExpenseItems.css';
import './ExpenseDate';
import './ExpenseDetails'; 
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';



function ExpenseItems(props){

    return <div className='expense-item'>
        <ExpenseDate date= {props.date}></ExpenseDate>
        <ExpenseDetails title= {props.title} amount={props.amount} location= {props.location}></ExpenseDetails>
    </div>
    
}

export default ExpenseItems;