class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <p>This is a sample app to render a component.</p>
            </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))
