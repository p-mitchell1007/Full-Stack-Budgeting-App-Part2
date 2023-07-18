import React from "react";
import TransactionDetails from "../Components/TransactionDetails";
import "./Show.css";

function Show() {
  return (
    <div className="Show">
      <h2 className="show-heading">Show Transaction</h2>
      <TransactionDetails />
    </div>
  );
}

export default Show;