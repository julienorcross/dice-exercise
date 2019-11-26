import React, { Component } from 'react';
import Die from '../Die/Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one', rolling: false };
  }

  static defaultProps = {
    dice: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  roll() {
    const die1 = this.props.dice[Math.floor(Math.random() * 6)];
    const die2 = this.props.dice[Math.floor(Math.random() * 6)];
    this.setState({ rolling: true });

    // wait one sec, then set rolling to false
    setTimeout(() => {
      this.setState({ die1, die2, rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="game">
        <Die num={this.state.die1} rolling={this.state.rolling} />
        <Die num={this.state.die2} rolling={this.state.rolling} />
        <button onClick={e => this.roll(e)} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
