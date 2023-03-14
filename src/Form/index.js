import "./style.css";
import React, { useState } from "react";

const Form = ({ setResult }) => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const convertCurrency = (event) => {
    event.preventDefault();
    const rates = {
      USD: 1,
      EUR: 0.83,
      GBP: 0.72,
      PLN: 3.88
    };

    const exchangeRate = rates[toCurrency] / rates[fromCurrency];
    setResult(amount * exchangeRate);
  };

  return (
    <>
      <form onSubmit={convertCurrency}>
        <label>Amount</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <label>From:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(event) => setFromCurrency(event.target.value)}
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
        </select>
        <label>To:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(event) => setToCurrency(event.target.value)}
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
        </select>
        <button type="submit">See the result</button>
      </form>
    </>
  );
};

export default Form;
