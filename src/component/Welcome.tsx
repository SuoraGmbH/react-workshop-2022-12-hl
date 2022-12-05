import React from "react";

type Props = {
  city: string;
};

const Welcome = ({ city }: Props): JSX.Element => {
  return <h1>Hello {city}</h1>;
};

export default Welcome;
