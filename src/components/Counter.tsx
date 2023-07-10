import React, { useState } from "react";
import classes from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={classes.button}>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
