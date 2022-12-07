import React, { useState } from "react";

const ToggleButtonWithBooleanState: React.FunctionComponent = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    console.log("before", toggle);
    // setToggle(toggle => !toggle);
    setToggle(function (prevToggle) {
      const newToggle = !prevToggle;

      return newToggle;
    });
    console.log("after", toggle);
  };

  return (
    <div>
      <button onClick={handleClick}>{toggle ? "On" : "Off"}</button>
    </div>
  );
};

export default ToggleButtonWithBooleanState;
