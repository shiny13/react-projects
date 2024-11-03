class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4} 
                />
                <Hello 
                    to="George" 
                    bangs={8} 
                />
                <Hello 
                    to="Daniel" 
                    from="Gregory"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
