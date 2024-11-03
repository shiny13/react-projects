class Friend extends React.Component {
    render() {
        const {name, hobbies} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <p>
                    <ul>
                        {hobbies.map(h => <li>{h}</li>)}
                    </ul>
                </p>
            </div>
        );
    }
}
