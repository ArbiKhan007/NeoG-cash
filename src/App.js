import "./App.css";
import { React, useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [cash, setCash] = useState(0);

  let cashDict = {
    2000: 0,
    500: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  //object keys and values to array
  let keyArr = Object.keys(cashDict).reverse();
  let valArr = Object.values(cashDict);

  const [valArray, setValArray] = useState(valArr);

  function handleClick(e) {
    e.preventDefault();

    if (typeof bill == "number" && typeof cash == "number") {
      if (bill > cash) {
        alert("Go wash plates");
      } else {
        let cashToReturn = cash - bill;
        let denomArr = Array(valArray.length).fill(0);

        while (cashToReturn !== 0) {
          for (let i = 0; i < keyArr.length; i++) {
            denomArr[i] = parseInt(cashToReturn / keyArr[i]);
            cashToReturn %= keyArr[i];
          }
        }

        setValArray(denomArr);
      }
    } else {
      alert("Invalid Values");
    }
  }

  return (
    <div className="App">
      <h1 className="heading">Cash Register Manager</h1>
      <p className="para">
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </p>

      <form>
        <div className="input-block">
          <label htmlFor="bill-amount">Bill Amount </label>
          <input
            onChange={(e) => {
              setBill(parseInt(e.target.value));
            }}
            type="number"
            name="billAmount"
            id="bAmount"
            placeholder="Bill Amount to be paid"
          />
        </div>

        <div className="input-block">
          <label htmlFor="cash-amount">Cash Amount </label>
          <input
            onChange={(e) => {
              setCash(parseInt(e.target.value));
            }}
            type="number"
            name="cashAmount"
            id="cAmount"
            placeholder="Cash given by customer"
          />
        </div>

        <button onClick={handleClick} className="submit-btn">
          Split
        </button>
      </form>

      <div>
        <h3 className="heading">Return Change</h3>
        <table>
          <tbody>
            <tr>
              <td>No. of Notes</td>
              {valArray.map((el) => {
                return <td key={Math.random()}>{el}</td>;
              })}
            </tr>
            <tr>
              <td>Note</td>
              {keyArr.map((el) => {
                return <td key={Math.random()}>{el}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h4 className="heading">
          &copy; | {new Date().getFullYear()} | shamsuzzoha
        </h4>
      </div>
    </div>
  );
}

export default App;
