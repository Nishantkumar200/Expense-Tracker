import React from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Heading from "./components/heading";
import History from "./components/History";
import Income from "./components/Income";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
  <GlobalProvider>
      <div className="main_container">
        <Heading />
        <div className="container">
          <Balance />
          <Income />
          <History />
          <AddTransaction />
        </div>
      </div>
      </GlobalProvider>
    
  );
}

export default App;
