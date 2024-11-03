class Machine extends React.Component {
    render() {
        let msg;
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const slotStyle = { fontSize: '30px', backgroundColor: 'pink' };
        const outcome = (winner) ? 'win' : 'lose';

        return (
            <div className="Machine">
                <p style={slotStyle}>{s1} {s2} {s3}</p>
                <p className={outcome}>{winner ? "You win!" : "You lose!"}</p>
            </div>
        );
    }
}
