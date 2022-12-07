import React, { useState } from "react";

const ToggleButtonWithBooleanState: React.FunctionComponent = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={handleClick}>{toggle ? "On" : "Off"}</button>
    </div>
  );
};

export default ToggleButtonWithBooleanState;
