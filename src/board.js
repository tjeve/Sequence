import React from 'react';
import ReactDOM from 'react-dom';
import './board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameBoardDeck from './cards.js'

// import deck from './cards.js'
/* 
Create a Board for Sequence that uses playing cards
*/

function Board (props) {
    // console.log(props)
    return (
        <div>
            <GameBoardDeck />
            <Container>
                <Row>
                    <Col><span role="img" aria-label="star">⭐</span></Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col><span role="img" aria-label="star">⭐</span></Col>
                </Row>
                <Row>
                    <Col>1 of 10</Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col>10 of 10</Col>
                </Row>
                <Row>
                    <Col>1 of 10</Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col>10 of 10</Col>
                </Row>
                <Row>
                    <Col>1 of 10</Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col>10 of 10</Col>
                </Row>
                <Row>
                    <Col>1 of 10</Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col>10 of 10</Col>
                </Row>
                <Row>
                    <Col>1 of 10</Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col>10 of 10</Col>
                </Row>
                <Row>
                    <Col>1 of 10</Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col>10 of 10</Col>
                </Row>
                <Row>
                    <Col>1 of 10</Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col>10 of 10</Col>
                </Row>
                <Row>
                    <Col>1 of 10</Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col>10 of 10</Col>
                </Row>
                <Row>
                    <Col><span role="img" aria-label="star">⭐</span></Col>
                    <Col>2 of 10</Col>
                    <Col>3 of 10</Col>
                    <Col>4 of 10</Col>
                    <Col>5 of 10</Col>
                    <Col>6 of 10</Col>
                    <Col>7 of 10</Col>
                    <Col>8 of 10</Col>
                    <Col>9 of 10</Col>
                    <Col><span role="img" aria-label="star">⭐</span></Col>
                </Row>
            </Container>
        </div>
    )
}

ReactDOM.render(<Board />, document.getElementById('root'));

export { Board } 