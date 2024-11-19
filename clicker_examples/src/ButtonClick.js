import React, { Component } from 'react';

class ButtonClick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
        this.handleClicked = this.handleClicked.bind(this);
    }

    // state = {
    //     clicked: false
    // }

    handleClicked(e) {
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

export default ButtonClick;