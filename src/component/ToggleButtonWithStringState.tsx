import React, { useState } from "react";

const ToggleButtonWithStringState: React.FunctionComponent = () => {
  const [toggle, setToggle] = useState<"On" | "Off">("On");

  const handleClick = () => {
    if (toggle === "On") {
      setToggle("Off");
    } else {
      setToggle("On");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{toggle}</button>
    </div>
  );
};

export default ToggleButtonWithStringState;
