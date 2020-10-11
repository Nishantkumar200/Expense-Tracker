import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);

// Creating an array of transaction and store it into amoun
  console.log(amount);

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h3>Total Balance </h3>
      <h4>
        $ <span>{total}</span>
      </h4>
    </div>
  );
}

export default Balance;
