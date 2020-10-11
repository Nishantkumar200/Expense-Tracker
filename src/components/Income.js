import React, { useContext } from "react";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";

function Income() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transactions) => transactions.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);


  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);


  return (
    <div>
      <div className="incomeContainer">
        <div className="income">
          <h3>Income</h3>
          <h5>+${income}</h5>
        </div>
        <div className="expense">
          <h3>Expense</h3>
  <h5>-${Math.abs(expense)}</h5>
        </div>
      </div>
    </div>
  );
}

export default Income;
