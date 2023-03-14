import { useState, useEffect } from "react";
import "./style.css";


const Result = ({ amount, fromCurrency, toCurrency }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const API_KEY = "YOUR_API_KEY_HERE";
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(data.conversion_result))
      .catch((error) => console.log(error));
  }, [amount, fromCurrency, toCurrency]);

  return (
    <>
      <div>
        <h2>Result: {result}</h2>
      </div>
    </>
  );
};

export default Result;
