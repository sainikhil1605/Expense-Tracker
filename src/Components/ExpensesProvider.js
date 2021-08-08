import React, { useState } from 'react'

export const ExpenseContext = React.createContext();

function ExpensesProvider({ children }) {
    const [transactions, setTransactions] = useState([]);
    const data = [transactions, setTransactions];
    return (
        <ExpenseContext.Provider value={data}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpensesProvider
