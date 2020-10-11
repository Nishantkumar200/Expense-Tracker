import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  // here we can add dummy data like following

  /** transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 100 },
    { id: 3, text: "Book", amount: 80 },
    { id: 4, text: "Camera", amount: -50 },
    
  ] */

  transactions: [],
};

// create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Add transaction
  function AddTransaction(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        AddTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
