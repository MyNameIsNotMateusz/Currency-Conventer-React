import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Header />
      <Form setResult={setResult} />
      <Result result={result} />
    </>
  );
}

export default App;
