import { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0)
function handleClick(){
    setCount(count+1)
}
  return (
    <div>
        <h1>Counter</h1>

        <h2>{count}</h2>

        <button onClick= {handleClick}>Increment</button>
        <button>Decrement</button>
    </div>
  )
}

export default Counter