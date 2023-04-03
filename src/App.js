import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { useCurrentDate } from "./Header/useCurrentDate";

function App() {
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const { date, setDate, } = useCurrentDate();
  
  return (
    <>
      <Header 
      date={date.toDateString()}
      />
      <Form setResult={setResult} 
      setShowResult={setShowResult} />
      {showResult && <Result result={result} />}
    </>
  );
}

export default App;