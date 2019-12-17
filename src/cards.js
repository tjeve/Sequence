import React from 'react';
import './cards.scss';
// import { create } from 'domain';
//From board.js
import './board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//**************************************************************************************************************************
// Gameboard Card Logic

const makeGameBoardDeck = () => {
    const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K"];
    let cardDeck = [];
    let card = [];
    // code below added to create 2 decks for the gameboard
    if (cardDeck <= 44) {
       
        for (let x = 0; x < suits.length; x++) {
            for (let y = 0; y < values.length; y++) {
              card = {
                  key: null, 
                  suit: suits[x], 
                  val: values[y], 
                  type: 'card'
                };
              cardDeck.push(card);
            }
          }; 
    }
    
    let doubleDeck = cardDeck.concat(cardDeck)
    console.assert(doubleDeck.length === 96, "DoubleDeck does not have 96 cards")
        return doubleDeck
 }

const createHTMLCardsFromDeck = (cardDeck) => {

  let createCardsHTML = cardDeck.map( (card, index) => {return <MakeCard key={index} suit={card.suit} value={card.val}/>} )

  return createCardsHTML 
}
const MakeCard = (props) => {
  if (props.suit === "♣︎" || props.suit === "♠︎") {
    return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
  } else {
    return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
      <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
      </div>);
  }

};

const makeCol = (singleCard, index) => {
  return <Col key={index}>{singleCard}</Col>
}

const makeRow = (singleRowOfCards, index) => {
    return <Row key={index}>{ singleRowOfCards }</Row>
}

const BuildGameBoard = (renderedCards) => {

  let freeSpaceInfo = [
      {key: null, suit: 'FREE SPACE ⭐', val: null, type: 'freeSpace'},
      {key: null, suit: 'FREE SPACE ⭐', val: null, type: 'freeSpace'},
      {key: null, suit: 'FREE SPACE ⭐', val: null, type: 'freeSpace'},
      {key: null, suit: 'FREE SPACE ⭐', val: null, type: 'freeSpace'}
  ]
  
  let freeSpaceCard = freeSpaceInfo.map((card, index) => {return <MakeCard key ={index + 100} suit={card.suit} value={card.val}/>})
  // console.log(freeSpaceCard)
  // let freeSpaceCard = <MakeCard key={index} suit={freeSpaceInfo.suit} value={freeSpaceInfo.val}/>
  // let createCardsHTML = cardDeck.map((card, index) => {return <MakeCard key={index} suit={card.suit} value={card.val}/>} )
  let freeSpace = freeSpaceCard.map((card, index) => <Col key={index + 100}>{card}</Col>)

  const createGrid = (CardArray) => {
      let gridContainer = [[],[],[],[],[],[],[],[],[],[]]
      let freeSpaceCounter = 0
      let cardCounter = 0 // counts the number of cards added to the gameboard array
      for (let rowIdx = 0; rowIdx < gridContainer.length; rowIdx++) { // for every row...
          for (let spaceIdx = 0; spaceIdx < 10; spaceIdx++) { // in every space...
              let row = gridContainer[rowIdx] // define a row as this...
              // check the grid location and if the position is (0,0), (0,9), (9,0), or (9,9)...
              if ((spaceIdx === 0 || spaceIdx === 9) && (rowIdx === 0 || rowIdx === 9)) {
                  row.push(freeSpace[freeSpaceCounter]) // push a freespace to that location
                  freeSpaceCounter++ // and increment the freeSpaceCounter
              } else {    // otherwise...
                  row.push(CardArray[cardCounter]) // push a card from the cardArray (with length of 96)
                  cardCounter++;  // then increase the cardCounter to move to the next card of the cardArray
              }
              console.assert(gridContainer.length === 10, "Grid container should contain 10 rows.")
          }
      }
      
      console.assert(gridContainer.length === 10, "Make sure all 100 cards have been pushed to the gridContainer")
      return gridContainer
  }

  let grid = createGrid(renderedCards.map(makeCol))
  let renderRows = grid.map(makeRow)
  let renderGrid = <Container>{ renderRows }</Container>

  return renderGrid
}
//**************************************************************************************************************************
// Components
class GameBoard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          gameBoardDeck: this.shuffleCards(makeGameBoardDeck()),
      };
    }
    
    shuffleCards(deck) {
      // console.log('shuffling deck');
      let counter = deck.length;
      let t;
      let i;
      
      while (counter) {
        i = Math.floor(Math.random() * counter-- );
        t = deck[counter];
        deck[counter] = deck[i];
        deck[i] = t;
      }
      return deck;
    }


    render() {
      return (  
        <div>
            <div>
               
            </div>
            <div className="deck">
                {BuildGameBoard(this.shuffleCards(createHTMLCardsFromDeck(this.state.gameBoardDeck)))}
            </div>
          {/* <button onClick={this.handleShuffleCards}>Shuffle Game Board</button> */}
        </div>
      );
    }
  };
//**************************************************************************************************************************
// Exports

export default GameBoard
export { MakeCard, makeCol, makeRow } 
