import "./style.css";

function Result({ result }) {
  return (
    <div>
      {result !== null && (
        <div>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Result;
