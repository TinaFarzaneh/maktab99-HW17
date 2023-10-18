import React, { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(198);
  return (
    <div className="container1 center" style={{ border: "3px solid #9400D3" }}>
      <h2>Question6</h2>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p className="paragh">Count : {counter}</p>
    </div>
  );
}
export default Counter;
