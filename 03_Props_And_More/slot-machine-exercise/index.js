class App extends React.Component {
    render() {
        function getItem() {
            const item = ['🍒', '🍇', '🍊'];
            return item[Math.floor(Math.random() * item.length)];
        }

        return (
            <div>
                <Machine 
                    s1={getItem()}
                    s2={getItem()}
                    s3={getItem()}
                />
                <Machine 
                    s1={getItem()}
                    s2={getItem()}
                    s3={getItem()}
                />
                <Machine 
                    s1={getItem()}
                    s2={getItem()}
                    s3={getItem()}
                />
                <Machine 
                    s1='🍒'
                    s2='🍒'
                    s3='🍒'
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
