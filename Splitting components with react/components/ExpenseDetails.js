import React from 'react';
import './ExpenseItems.css';
function ExpenseDetails(props){
    return(
        <div className='expense-item'>
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div>{props.location}</div>
            <div className='expense-item__price'>
                ${props.amount}</div>
             </div>
             </div>
    )
}



export default ExpenseDetails