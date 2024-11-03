class Machine extends React.Component {
    render() {
        let msg;
        if (this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3) {
            msg = 'You win!';
        } else {
            msg = 'You lose!';
        }
        console.log(this.props, msg)

        return (
            <div>
                <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
                <p>{msg}</p>
            </div>
        );
    }
}
