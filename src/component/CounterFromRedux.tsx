import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { increment, incrementBy } from "../redux/counterSlice";

const CounterFromRedux: React.FunctionComponent = () => {
  const count = useAppSelector((state) => state.count.count);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(increment());
  };

  const handleBigTimeClick = () => {
    dispatch(incrementBy(10));
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleBigTimeClick}>Increment big time!</button>
      Current Count: {count}
    </div>
  );
};

export default CounterFromRedux;
