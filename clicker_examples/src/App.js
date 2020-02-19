import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonClick from './ButtonClick';
import ButtonClick2 from './ButtonClick2';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React ...
        </a>
      </header>
      <body>
        
      </body> */}
      <ButtonClick />
      <ButtonClick2 />
    </div>
  );
}

export default App;
