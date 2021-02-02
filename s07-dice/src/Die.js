import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    // why is 'Die' put here as a class name???
    return <i className={`Die fas fa-dice-${this.props.num} ${this.props.rolling && 'rolling'}`} />;
  }
}

export default Die;
