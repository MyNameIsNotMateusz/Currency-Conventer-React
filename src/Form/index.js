import { useState } from "react";
import axios from "axios";
import { FormWrapper, LabelWrapper, Input, Button } from "./styled";

const Form = ({ setResult, setShowResult }) => {

  const [conversionData, setConversionData] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
  
    try {
      const response = await axios.get(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
      const result = response.data.result;
      setResult(result);
      setShowResult(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <FormWrapper
      onSubmit={handleFormSubmit}
        className="form">
        <LabelWrapper>Amount</LabelWrapper>
        <Input
          id="amount"
          type="number"
          step="0.01"
        />
        <label className="form__item--label">From:</label>
        <Input as="select"
          id="fromCurrency"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
          <option value="NOK">NOK - Norwegian Kroner</option>
        </Input>
        <label className="form__item--label">To:</label>
        <Input as="select"
          id="toCurrency"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="PLN">PLN - Polish Zloty</option>
          <option value="NOK">NOK - Norwegian Kroner</option>
        </Input>
        <Button type="submit">See the result</Button>
      </FormWrapper>
    </>
  );
};

export default Form;