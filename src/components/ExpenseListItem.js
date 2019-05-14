import React from 'react';
import { removeExpense } from '../actions/expenses';

export default ( { id,description,amount,createdAt }) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            <button onClick={(e)=>{
                
            }}>Remove</button>
            <br/>
        </div>
    );
};