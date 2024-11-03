class App extends React.Component {
    render() {
        return (
            <div>
                <Friend 
                    name="Elton"
                    hobbies={["Piano", "Guitar", "Football"]}
                />
                <Friend 
                    name="Frieda"
                    hobbies={["Drawing", "Painting"]}
                />
                <Friend 
                    name="Jane"
                    hobbies={["Chess", "Debating"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
