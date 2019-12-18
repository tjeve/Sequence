import React from 'react';
import ReactDOM from 'react-dom';
import './board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameBoard from './gameBoard.jsx'

function Board () {
    return (
        <div>
            <GameBoard />
        </div>
    )
}

ReactDOM.render(<Board />, document.getElementById('root'));

export { Board } 