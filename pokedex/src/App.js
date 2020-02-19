import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Pokedex</h1>
      </div>
      <Pokegame />
    </div>
  );
}

export default App;
