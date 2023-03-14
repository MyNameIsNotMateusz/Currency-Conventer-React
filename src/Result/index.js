import { useState, useEffect } from "react";
import "./style.css";


function Result({ amount, currencyFrom, currencyTo, exchangeRate }) {
  const result = calculateExchangeRate(amount, currencyFrom, currencyTo, exchangeRate);


  return (
    <div>
      {result && (
        <div>
          <h3>Result:</h3>
          <p>
            {amount} {currencyFrom} = {result} {currencyTo}
          </p>
        </div>
      )}
    </div>
  );
};

export default Result;
