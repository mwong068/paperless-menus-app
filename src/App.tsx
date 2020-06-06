import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name="REACT" />
      </header>
        <Description countBy={1} />
    </div>
  );
}

export default App;
