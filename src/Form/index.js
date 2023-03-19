
import "./style.css";
import { useState } from "react";

const Form = ({ setResult, setShowResult }) => {
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
    setShowResult(true);
  };

  return (
    <>
      <form
        className="form"
        onSubmit={convertCurrency}>
        <label className="form__item--label">Amount</label>
        <input
          className="form__item--input"
          id="amount"
          type="number"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <label className="form__item--label">From:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(event) => setFromCurrency(event.target.value)}
          className="form__item--select"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
        </select>
        <label className="form__item--label">To:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(event) => setToCurrency(event.target.value)}
          className="form__item--select"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
        </select>
        <button className="form__item--button" type="submit">See the result</button>
      </form>
    </>
  );
};

export default Form;
