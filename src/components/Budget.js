import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, expenses, budget, dispatch } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return(total += item.cost);
    },0);

    const handleBudgetChange = (event) => {
        
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })
    }

    if (budget < totalExpenses ){
        alert("You cannot reduce the budget value lower than the spending");
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                required='required'
                type="number" 
                step="10" 
                value={budget} 
                onChange={handleBudgetChange}>
            </input>
        </div>
    );
};
export default Budget;
