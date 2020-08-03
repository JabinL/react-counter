import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter defaultValue={0}/>
      </header>
    </div>
  );
}

export default App;
