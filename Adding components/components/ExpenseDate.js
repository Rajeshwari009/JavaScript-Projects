import React from 'react';
import './ExpenseItems.css';
function ExpenseDate(props){
    const month= props.date.toLocaleString('en-US',{month: 'long'});
    const day= props.date.toLocaleString('en-US', {day: '2-digit'});
    const year=props.date.getFullYear();


    return (
        <div className='expense-item'>
        <div className='expense-date_'>{day}</div>
        <div className='expense-date_'>{month}</div>
        <div className='expense-date_'>{year}</div>
        </div>
    )
}


export default ExpenseDate

