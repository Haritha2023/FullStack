import { useEffect, useState } from "react";

function UseEff1() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleChange(e) {
    setText(e.target.value);
  }
  console.log("component is mounted");
  useEffect(() => {
    console.log("useEffect is runs successfully");
    document.title = `Button is clicked ${count}`;
  }, []);
  // if we don't pass any variable useEffect will be called for every state update
  //and component update
  // if we pass [] it will excute only one time after component is mounted,
  //it won't update on document.title
  //to solve this problem we need to pass variable, this will only execute when you mount and update
  return (
    <div>
      <h2>This is count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}

export default UseEff1;
