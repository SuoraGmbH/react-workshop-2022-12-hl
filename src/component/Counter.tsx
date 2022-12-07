import React, { useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);

  // const stateArray = useState(0);
  // const count = stateArray[0];
  // const setCount = stateArray[1];

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count is currently {count}</p>
    </div>
  );
};

export default Counter;
