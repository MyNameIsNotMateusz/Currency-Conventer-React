import { ResultWrapper } from "./styled";

const Result = ({ result }) => {
  return (
    <ResultWrapper>
      <div>
        <h3>Result:</h3>
        <p>{result}</p>
      </div>
    </ResultWrapper>
  );
}

export default Result;