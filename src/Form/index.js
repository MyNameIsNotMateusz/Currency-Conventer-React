import { useState } from "react";
import { FormWrapper, LabelWrapper, Input, Button } from "./styled";

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
      <FormWrapper
        className="form"
        onSubmit={convertCurrency}>
        <LabelWrapper>Amount</LabelWrapper>
        <Input
          id="amount"
          type="number"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <label className="form__item--label">From:</label>
        <Input as="select"
          id="fromCurrency"
          value={fromCurrency}
          onChange={(event) => setFromCurrency(event.target.value)}
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
        </Input>
        <label className="form__item--label">To:</label>
        <Input as="select"
          id="toCurrency"
          value={toCurrency}
          onChange={(event) => setToCurrency(event.target.value)}
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
        </Input>
        <Button type="submit">See the result</Button>
      </FormWrapper>
    </>
  );
};

export default Form;