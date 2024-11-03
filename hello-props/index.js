class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4} 
                    data={[1,2,3,4,5]} 
                    isFunny={true}
                    isActive
                    img="https://i.pinimg.com/originals/4b/74/bb/4b74bbf5197ab483c311f6cb078c3ddb.gif"
                />
                <Hello 
                    to="Britney" 
                    from="Adele" 
                    bangs={10} 
                    img="https://media.tenor.com/pvFJwncehzIAAAAM/hello-there-private-from-penguins-of-madagascar.gif"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
