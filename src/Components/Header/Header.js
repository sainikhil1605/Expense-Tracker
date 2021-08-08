import React, { useContext, useEffect, useState } from 'react'
import { ExpenseContext } from '../ExpensesProvider'
import "./Header.css"
export default function Header() {
    const [transactions, setTransactions] = useContext(ExpenseContext)
    const [bal, setBal] = useState(0);
    useEffect(() => {
        setBal(transactions !== undefined ? transactions.reduce((a, b) => (a + parseInt(b.value, 10)), 0) : 0)
    }, [transactions])
    function handleDelete(k) {
        setTransactions(prevState => {
            const temp = prevState.filter((val, i) => i !== parseInt(k, 10));

            return temp;

        }
        );
    }

    return (
        <div className="header">
            <h1 className="heading">Expense Tracker</h1>
            <div className="balance">
                <p>Your Balance is </p>
                <span className={bal > 0 ? "greenClass" : "redClass"}>{bal}</span>
            </div>
            <p>History</p>
            {transactions !== undefined ?
                transactions.map((transaction, k) => (
                    <div className="tableOuter">
                        <div className={transaction.value > 0 ? "expenseTable greenTable" : "expenseTable redTable"}>
                            <div style={{ float: "left", flex: "1", paddingLeft: "10%" }}>{transaction.description}</div>
                            <div style={{ float: 'right', flex: "1" }}>{transaction.value}</div>
                            <button id={k} className="delete" onClick={(e) => handleDelete(e.target.id)}>Delete</button>
                        </div>
                    </div>
                )) : null}
        </div>
    )
}
