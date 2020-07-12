import React from 'react';
import './stylesheet/Expense.css';

function Expense(props) {
  const {amount, to , note, date} = props.expense;
  return (
    <React.Fragment>
      <div>
        <div className="result">
          <div className="resultTab">
            <p>Amount:</p>
            <p>{amount}</p>
          </div>
          <div className="resultTab">
            <p>to:</p>
            <p>{to}</p>
          </div>
          <div className="resultTab">
            <p>date:</p>
            <p>{date}</p>
          </div>
          <div className="resultTab">
            <p>note:</p>
            <p>{note}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Expense;
