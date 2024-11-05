import logo from './logo.svg';
import './App.css';
import { choice, remove } from './helpers'
import foods from './foods';

function App() {
  let fruit = choice(foods);
  console.log(`I'd like one ${fruit}, please.`);
  let remaining = remove(foods, fruit);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          I would like one {fruit}, please. <br />
          There are {remaining.length} remaining fruits left in the store.
        </p>
      </header>
    </div>
  );
}

export default App;
