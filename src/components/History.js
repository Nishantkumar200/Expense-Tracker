import React, { useContext } from "react";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function History() {
  // Destructuring the GlobalContext
  const { transactions } = useContext(GlobalContext);

  return (
    <div >
      <h5>History</h5>
      
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key = {transaction.id} />
      ))}
    </div>
  
  );
}

export default History;
