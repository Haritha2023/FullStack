import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(0);
  function handleIncre() {
    setCount(count + factor);
  }
  function handleDecre() {
    setCount(count - factor);
  }
  function factorIncre() {
    setFactor(factor + 1);
  }
  function factorDecre() {
    setFactor(factor - 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>

      <button onClick={handleIncre}>Increment</button>
      <button onClick={handleDecre}>Decrement</button>

      <h1>Factor</h1>
      <h2>{factor}</h2>
      <button onClick={factorIncre}>Increment</button>
      <button onClick={factorDecre}>Decrement</button>
    </div>
  );
}

export default Counter;
