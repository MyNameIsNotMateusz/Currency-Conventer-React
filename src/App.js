import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  
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