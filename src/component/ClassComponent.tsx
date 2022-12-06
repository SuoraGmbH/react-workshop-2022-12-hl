import React from "react";
interface Props {
  city: string;
}
class Welcome extends React.Component<Props> {
  render(): JSX.Element {
    return <h1 onClick={this.handleEvent}>Hallo {this.props.city}</h1>;
  }

  handleEvent = () => {
    // This always points to the instance of the class
    console.log(this);
  };

  handleEvent2() {
    // This often points to undefined
    console.log(this);
  }
}

export default Welcome;
