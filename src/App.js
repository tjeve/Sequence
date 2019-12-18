import React from 'react';
import './App.css';
import { Board } from './board.js';
import  Hand  from './hand.jsx'
import SequenceNavbar from './navbar';

function App() {
  return (
    <div className="App">
        <SequenceNavbar />
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
