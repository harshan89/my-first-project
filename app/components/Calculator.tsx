import { useState } from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<number>();
  const [secondNumber, setSecondNumber] = useState<number>();
  const [sum, setSum] = useState<number>();

  const submitFullname = () => {
    let _sum = firstNumber! + secondNumber!;
    setSum(_sum);
  };

  return (
    <div>
      <input
        type="number"
        className="px-4 py-2 border"
        onChange={(event) => setFirstNumber(parseInt(event.target.value))}
      />
      <input
        type="number"
        className="px-4 py-2 border"
        onChange={(event) => setSecondNumber(parseInt(event.target.value))}
      />
      <button onClick={submitFullname}>Submit</button>
      <h1 className="p-10 text-red-700">Sum of two number: {sum}</h1>
    </div>
  );
};

export default Calculator;