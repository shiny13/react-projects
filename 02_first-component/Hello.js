function getMood() {
    const mood = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return mood[Math.floor(Math.random() * mood.length)];
}

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <p>This is a sample app to render a component.</p>
                <p>My mood right now is: <strong>{ getMood() }</strong></p>
            </div>
        );
    }
}

// function Hello() {
//     return(
//         <div>
//            <h1>Hello there!</h1>
//            <p>This is a sample app to render a component.</p>
//            <p>My mood right now is: <strong>{getMood()}</strong></p>
//         </div>
//     )
// }
