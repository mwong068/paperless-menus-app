import React from 'react';
import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header name="REACT" />
      <Description countBy={1} />
    </div>
  );
}

export default App;
