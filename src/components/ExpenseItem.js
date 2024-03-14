import './ExpenseItems.css';

function ExpenseItems(){

    const expenseDate= new Date(2021, 2, 28);
    const expenseTitle= "Car insurance"
    const expensePrice= 294.67
    const LocationOfExpenditure= "Bhopal"

    return <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div>{LocationOfExpenditure}</div>
            <div className='expense-item__price'>
                ${expensePrice}</div>
            
        </div>
    </div>
    
}

export default ExpenseItems;