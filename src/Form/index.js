import "./style.css";
import { useState } from "react";
import Result from "../Result";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const API_KEY = "YOUR_API_KEY_HERE";
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(data.conversion_result))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Amount</label>
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <label>From</label>
        <select
          value={fromCurrency}
          onChange={(event) => setFromCurrency(event.target.value)}
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
        </select>
        <label>To</label>
        <select
          value={toCurrency}
          onChange={(event) => setToCurrency(event.target.value)}
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
        </select>
        <button>See the result</button>
      </form>
      <Result result={result} />
    </>
  );
};

export default Form;
