import React from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './Die'

function App() {
  return (
    <div className="App">
      <Die face="two" />
      <Die face="six" />
    </div>
  );
}

export default App;
