import React, { Component } from 'react';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {die1: 'one', die: 'two'}
    }
    render() {
        return(
            <h2>Die!</h2>
        )
    }
}

export default RollDice;