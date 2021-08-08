import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../ExpensesProvider';
import "./Body.css"
function Body() {
    const [transactions, setTransactions] = useContext(ExpenseContext);
    const [currTransaction, setTransaction] = useState('');
    const [currValue, setValue] = useState(0);
    function handleSubmit() {
        if (currValue === 0 || currTransaction === "") {
            alert("Fields Cannot be Empty");
        }
        else {
            setTransactions((prevState) => ([...prevState, { description: currTransaction, value: currValue }]));
            setTransaction("");
            setValue(0);
        }
    }
    return (
        <div>
            <h1 className="heading">Enter Description</h1>
            <input className="inputtag" type="text" value={currTransaction} required={true} placeholder="Enter Description" onChange={(e) => setTransaction(e.target.value)} />
            <h1 className="heading">Enter the Transaction</h1>
            <input className="inputtag" type="number" value={currValue} required placeholder="Enter the value" onChange={(e) => setValue(e.target.value)} />
            <br />
            <button className="submit" type="submit" onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
}

export default Body
