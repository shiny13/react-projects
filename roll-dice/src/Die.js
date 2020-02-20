import React, { Component } from 'react';
import "./Die.css";

class Die extends Component {
    static defaultProps = {
        face: 'five'      
    }
    render() {
        return(
            <i className={`Die fas fa-dice-${this.props.face}`}></i>
        )
    }
}

export default Die;