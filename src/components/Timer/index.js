import React, { Component } from "react";

// class based component
class Timer extends Component {

  constructor(props) {
    console.log('constructor exec');
    super(props);
    this.state = {
      time: new Date()
    };
  }

  // componentDidMount
  componentDidMount() {
    console.log('componentDidMount exec');
    setInterval(() => {
    this.setState({
      time: new Date()
    })
   }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate exec');
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUnmount() {
    // remove the interval here
  }

  render() {
    console.log('render exec');
    const { time } = this.state;
    return (
      <div>{`Time: ${time.toLocaleString()}`}</div>
    );
  }
}

export default Timer;
