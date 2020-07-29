import React from 'react';
import './stylesheet/Expense.css';

function Expense(props) {
  const { amount, to, note, date } = props.expense;
  return (
    <React.Fragment>
      <div>
        <div className="result" style={{position: 'relative'}}>
          {/* <button style={{
            padding: '3px',
            fontWeight: 'bold',
            position: 'absolute',
            right: '20px',
            backgroundColor: 'rgba(39, 41, 59, 0.966)'
          }}>X</button> */}
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
