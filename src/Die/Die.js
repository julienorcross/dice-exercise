import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    // let dieClassName = {`Die fas fa-dice-${this.props.num} ${this.props.rolling ? 'shaking' : ''}`};

    return (
      <i
        className={`Die fas fa-dice-${this.props.num} ${this.props.rolling &&
          'shaking'}`}
      />
    );
  }
}

export default Die;
