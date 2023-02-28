import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { increment } from "../redux/counterSlice";

const CounterFromRedux: React.FunctionComponent = () => {
  const count = useAppSelector((state) => state.count.count);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      Current Count: {count}
    </div>
  );
};

export default CounterFromRedux;
