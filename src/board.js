import React from 'react';
import ReactDOM from 'react-dom';
import './board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import GameBoard from './cards.js'

function Board (props) {
    // console.log(props)
    return (
        <div>
            <GameBoard />
        </div>
    )
}

ReactDOM.render(<Board />, document.getElementById('root'));

export { Board } 