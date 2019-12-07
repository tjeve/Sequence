import React from 'react';
import './App.css';
import { Board } from './board.js';
// import deck from './cards.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <a className="info-link" href="https://en.wikipedia.org/wiki/Sequence_(game)">
            Sequence
          </a>
        </h1>
      </header>
      <div className='board-container'>
        <div className='board'>
          
          <Board />
        </div>

      </div>
    </div>
  );
}

export default App;
