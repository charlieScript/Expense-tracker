import React, { useState, useEffect } from 'react';
import './stylesheet/Form.css';
import Expense from './Expense';
import localstorageFunctions from './LocalStorage';

// holds the basic data
let dataStr = [];

function Form() {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    amount: '',
    to: '',
    note: '',
    date: '',
    total: 0,
  });
  const [totalNum, setTotalNum] = useState(0);

  // component did mount
  useEffect(() => {
    // loads data from local storage
    // re initialised the local state from local storage
    if (localstorageFunctions.getData('expense') !== undefined) {
      dataStr = localstorageFunctions.getData('expense');
      setTotalNum(localstorageFunctions.getData('total'));
    }
    // sets data on load to state
    setData(dataStr);
  }, []);

  function handleInput(e) {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { amount, to, note, date } = state;
    // push input state to dataStr
    dataStr.push({
      amount: parseInt(amount),
      to,
      note,
      date,
    });
    // sets datastr to data
    setData(dataStr, console.log(data));

    localstorageFunctions.storeData('expense', dataStr);
    // resets form
    setState({
      amount: '',
      to: '',
      date: '',
      note: '',
    });
    getTotal();
  }

  function getTotal() {
    let initialValue = 0;
    dataStr.forEach((num) => (initialValue += num.amount));
    setTotalNum(initialValue);
    localStorage.setItem('total', initialValue);
  }

  function clearExp() {
    setData([]);
    setTotalNum(0);
    localstorageFunctions.clearData('expense');
    localStorage.removeItem('total');
  }

  const expenseList = data
    ? data.map((exp, index) => <Expense expense={exp} key={index} />)
    : null;
  return (
    <div>
      <div className="card">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="amount">Amount</label>
              <input
                onChange={handleInput}
                value={state.amount}
                type="number"
                id="amount"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="to">To</label>
              <input
                type="text"
                value={state.to}
                onChange={handleInput}
                id="to"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="note">Note</label>
              <textarea
                id="note"
                onChange={handleInput}
                cols="10"
                rows="5"
                required
                value={state.note}
              ></textarea>
            </div>

            <div className="input-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                value={state.date}
                onChange={handleInput}
                id="date"
                required
              />
            </div>

            <input type="submit" value="Add expense" />
          </form>
          <div className="functions">
            <button onClick={clearExp} className="clear">
              Clear Expense
            </button>
          </div>
        </section>
        <div className="aside">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid grey",
            }}
          >
            <h3>Expenses</h3>
            <p className="total">Total Amount: #{totalNum} </p>
          </div>
          {expenseList}
        </div>
      </div>
    </div>
  );
}

export default Form;
