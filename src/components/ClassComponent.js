import React, { Component } from 'react';

export default class ClassComponent extends Component {
  state = {
    counter: 0,
  };

  incrementFunction = () => {
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment,
    // }));
    // this.setState({
    //   counter: state.counter + props.increment,
    // });
    // this.setState((state, props) => (
    //   counter: state.counter + props.increment
    // ));
    this.setState((state, props) => {
      return { counter: state.counter + props.increment };
    });
  };

  render() {
    return (
      <>
        <div>{this.state.counter}</div>
        <button onClick={this.incrementFunction}>Increment</button>
      </>
    );
  }
}
