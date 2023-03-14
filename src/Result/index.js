import { useState, useEffect } from "react";
import "./style.css";


function Result(props) {
  const { amount, currencyFrom, currencyTo, exchangeRate } = props;
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
