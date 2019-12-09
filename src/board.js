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
                    <Col>0-1</Col>
                    <Col>0-2</Col>
                    <Col>0-3</Col>
                    <Col>0-4</Col>
                    <Col>0-5</Col>
                    <Col>0-6</Col>
                    <Col>0-7</Col>
                    <Col>0-8</Col>
                    <Col><span role="img" aria-label="star">⭐</span></Col>
                </Row>
                <Row>
                    <Col>1-0</Col>
                    <Col>1-1</Col>
                    <Col>1-2</Col>
                    <Col>1-3</Col>
                    <Col>1-4</Col>
                    <Col>1-5</Col>
                    <Col>1-6</Col>
                    <Col>1-7</Col>
                    <Col>1-8</Col>
                    <Col>1-9</Col>
                </Row>
                <Row>
                    <Col>2-0</Col>
                    <Col>2-1</Col>
                    <Col>2-2</Col>
                    <Col>2-3</Col>
                    <Col>2-4</Col>
                    <Col>2-5</Col>
                    <Col>2-6</Col>
                    <Col>2-7</Col>
                    <Col>2-8</Col>
                    <Col>2-9</Col>
                </Row>
                <Row>
                    <Col>3-0</Col>
                    <Col>3-1</Col>
                    <Col>3-2</Col>
                    <Col>3-3</Col>
                    <Col>3-4</Col>
                    <Col>3-5</Col>
                    <Col>3-6</Col>
                    <Col>3-7</Col>
                    <Col>3-8</Col>
                    <Col>3-9</Col>
                </Row>
                <Row>
                    <Col>4-0</Col>
                    <Col>4-1</Col>
                    <Col>4-2</Col>
                    <Col>4-3</Col>
                    <Col>4-4</Col>
                    <Col>4-5</Col>
                    <Col>4-6</Col>
                    <Col>4-7</Col>
                    <Col>4-8</Col>
                    <Col>4-9</Col>
                </Row>
                <Row>
                    <Col>5-0</Col>
                    <Col>5-1</Col>
                    <Col>5-2</Col>
                    <Col>5-3</Col>
                    <Col>5-4</Col>
                    <Col>5-5</Col>
                    <Col>5-6</Col>
                    <Col>5-7</Col>
                    <Col>5-8</Col>
                    <Col>5-9</Col>
                </Row>
                <Row>
                    <Col>6-0</Col>
                    <Col>6-1</Col>
                    <Col>6-2</Col>
                    <Col>6-3</Col>
                    <Col>6-4</Col>
                    <Col>6-5</Col>
                    <Col>6-6</Col>
                    <Col>6-7</Col>
                    <Col>6-8</Col>
                    <Col>6-9</Col>
                </Row>
                <Row>
                    <Col>7-0</Col>
                    <Col>7-1</Col>
                    <Col>7-2</Col>
                    <Col>7-3</Col>
                    <Col>7-4</Col>
                    <Col>7-5</Col>
                    <Col>7-6</Col>
                    <Col>7-7</Col>
                    <Col>7-8</Col>
                    <Col>7-9</Col>
                </Row>
                <Row>
                    <Col>8-0</Col>
                    <Col>8-1</Col>
                    <Col>8-2</Col>
                    <Col>8-3</Col>
                    <Col>8-4</Col>
                    <Col>8-5</Col>
                    <Col>8-6</Col>
                    <Col>8-7</Col>
                    <Col>8-8</Col>
                    <Col>8-9</Col>
                </Row>
                <Row>
                    <Col><span role="img" aria-label="star">⭐</span></Col>
                    <Col>9-1</Col>
                    <Col>9-2</Col>
                    <Col>9-3</Col>
                    <Col>9-4</Col>
                    <Col>9-5</Col>
                    <Col>9-6</Col>
                    <Col>9-7</Col>
                    <Col>9-8</Col>
                    <Col><span role="img" aria-label="star">⭐</span></Col>
                </Row>
            </Container>
        </div>
    )
}

ReactDOM.render(<Board />, document.getElementById('root'));

export { Board } 