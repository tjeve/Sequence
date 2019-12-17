import React from 'react';
import './App.css';
import { Board } from './board.js';
import  Hand  from './hand.jsx'
import SequenceNavbar from './navbar';

function App() {
  return (
    <div className="App">
        <SequenceNavbar />
      {/* <header className="App-header">
        <h1>
          <a className="info-link" href="https://en.wikipedia.org/wiki/Sequence_(game)">
            Play Sequence
          </a>
        </h1>
      </header> */}
      <div className='board-container'>
        <div className='board'>
          <Board />
        </div>
      <div className='Hand'>
        <Hand />
      </div>
      </div>
    </div>
  );
}

export default App;
