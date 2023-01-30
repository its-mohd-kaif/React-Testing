import React, { useState } from "react";

function Counter() {
  // useState For counter
  const [count, setCount] = useState(1);
  // Increment Handler
  const increHandler = () => {
    setCount((val) => ++val);
  };
  // Decrement Handler
  const decreHandler = () => {
    if (count >= 1) {
      setCount((val) => --val);
    }
  };
  return (
    <div>
      <center>
        <h1 className="mt-3">Counter</h1>
        <button
          data-testid="increment"
          onClick={increHandler}
          type="button"
          className="btn btn-success me-3 mt-3"
        >
          Increment
        </button>
        <button
          onClick={decreHandler}
          type="button"
          className="btn btn-dark mt-3"
          data-testid="decrement"
        >
          Decrement
        </button>
        <br></br>
        <h1 data-testid="counter" className="mt-3">
          {count}
        </h1>
      </center>
    </div>
  );
}

export default Counter;
