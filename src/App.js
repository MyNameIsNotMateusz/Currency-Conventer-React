import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <Header />
      <Form setResult={setResult} setShowResult={setShowResult} />
      {showResult && <Result result={result} />}
    </>
  );
}

export default App;