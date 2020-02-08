import React, { useState } from "react";

export interface BasicToggleProps {}

const Counter: React.SFC<BasicToggleProps> = () => {
  let [count, updateCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <span>{count}</span>
      <button onClick={() => updateCount(count + 1)}>+</button>
      <button onClick={() => updateCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
