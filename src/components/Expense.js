import React from "react";
import "./stylesheet/Expense.css";

function Expense(props) {
  const { amount, to, note, date } = props.expense;
  return (
    <div className="result">
      <div className="resultTab">
        <span className="title">Amount:</span>
        <span>{amount}</span>
      </div>
      <div className="resultTab">
        <span className="title">to:</span>
        <span>{to}</span>
      </div>
      <div className="resultTab">
        <span className="title">date:</span>
        <span>{date}</span>
      </div>
      <div className="resultTab">
        <span className="title">note:</span>
        <span>{note}</span>
      </div>
    </div>
  );
}

export default Expense;
