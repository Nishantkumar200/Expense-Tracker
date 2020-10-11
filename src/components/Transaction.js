import React from "react";
import "../App.css";

function Transaction(props) {
  const properties = props.transaction;
  const sign = properties.amount > 0 ? "+" : "-";
  // console.log(properties);
  return (
    
      <ul>
        <li className={properties.amount < 0 ? "minus" : "plus"}>
          <p>
            {properties.text}{" "}
            <span>
              {sign}${Math.abs(properties.amount)}
            </span>
          </p>
        </li>
      </ul>
  );
}

export default Transaction;
