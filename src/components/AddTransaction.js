import React, { useState, useContext } from "react";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const { AddTransaction } = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: Math.random() * 1000,
      text,
      amount: +amount,
    };

  AddTransaction(newTransaction)
    // Here we are setting after adding trasaction, set textfield and amount field to blank;
    setText("");
    setAmount("");
  }

  return (
    <div>
      <h5 className="transactionHeading">Add Transaction</h5>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Text</label>
        <br />
        <input
          type="text"
          value={text}
          placeholder="Enter a text"
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <label htmlFor="text">Amount</label>
        <br />
        <p>(negative -expense, positive-income )</p>
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <button className="addTransaction" type="submit" onClick={onSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
