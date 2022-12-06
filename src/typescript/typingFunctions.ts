export const someFunctionExplained: (/* parameter type definition */) => {
  /* Return Value Type Definition, this function *returns* an empty object */
} = (/* parameter list */) => /* the next curly brace is the start of the function body */ {
  return {
    /* these curly braces create an empty object  */
  };
};

export const someFunction: ({}: {}) => {} = () => {
  return {};
};

export const janFunction: ({ name }: { name: string }) => {} = ({ name }) => {
  console.log(name);
  return {};
};

export const someFunctionYouWillHateMe: ({}: {}) => {} = ({}) => ({});

// Try to explain this again :-)
export const someFunctionIHateChristian: ({
  name: string,
}: {
  name: string;
}) => { name: string } = ({ name: string }) => ({ name: string });

someFunctionIHateChristian({ name: "some string" });

const string: string = "string";

someFunction({});

function Welcome({ city }: { city: string }) {
  return `Hello ${city}`;
}
