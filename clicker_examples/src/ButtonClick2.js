import React, { Component } from 'react';

class ButtonClick2 extends Component {
    state = {clicked: false}
    handleClicked = (e) => {
        this.setState({clicked: true});
    }
    render() {
        return(
            <div>
                <h2>Alternate syntax</h2>
                <strong>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked'}</strong><br />
                <button onClick={this.handleClicked}>Click this thing</button>
            </div>
        )
    }
}

export default ButtonClick2;