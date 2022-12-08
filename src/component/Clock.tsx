import React, { useEffect, useState } from "react";

const Clock: React.FunctionComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{date.toLocaleTimeString()}</div>;
};

export default Clock;
