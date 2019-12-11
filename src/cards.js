import React from 'react';
import './cards.scss';
// import { create } from 'domain';
//From board.js
import './board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const makeGameBoardDeck = () => {
    const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K"];
    let cardDeck = [];
    let card = [];
    // code below added to create 2 decks for the gameboard
    if (cardDeck <= 44) {
       
        for (let x = 0; x < suits.length; x++) {
            for (let y = 0; y < values.length; y++) {
              card = {key: null, suit: suits[x], val: values[y], type: 'card'};
              cardDeck.push(card);
            }
          };  
    }

    let doubleDeck = cardDeck.concat(cardDeck)
    console.log(doubleDeck)
        return doubleDeck
 }

//  const makeTwoCardDecks = () => {
//     const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
//     const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//     let cardDeck = [];
//     let card = [];
//     // code below added to create 2 decks for the gameboard
//     if (cardDeck <= 44) {
       
//         for (let x = 0; x < suits.length; x++) {
//             for (let y = 0; y < values.length; y++) {
//               card = {key: [x][y], suit: suits[x], val: values[y], type: 'card'};
//               cardDeck.push(card);
//             }
//           };  
//     }
//     let doubleDeck = cardDeck.concat(cardDeck)
//     console.assert(cardDeck.length === 104, "CardDeck does not have 104 cards")
//     return doubleDeck
//  }

 const createRenderedGameBoard = (cardDeck) => {

    let createCardsHTML = cardDeck.map((card, index) => {return <MakeCard key={index} suit={card.suit} value={card.val}/>} )

    // console.log(createCardsHTML)
    return createCardsHTML

 }


/* This is the part of the code you need to fix above */

class GameBoardDeck extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          cardDeck: makeGameBoardDeck()
      };
    }
    
    shuffleCards(deck) {
    //   console.log('shuffling deck');
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

    handleShuffleCards = () => { //Changes the state of cardDeck to the shuffled hand of cards
        let shuffledCards = this.shuffleCards(this.state.cardDeck)
        // console.log(shuffledCards)

        this.setState({
            cardDeck: shuffledCards
        })

    }
    
    render() {
      return (  
        <div>
          <button onClick={this.handleShuffleCards}>Shuffle</button>
          <div className="deck">
           {BuildGameBoard(createRenderedGameBoard(this.state.cardDeck))}
          </div>
        </div>
      );
    }
  };
  
  const MakeCard = (props) => {
    if (props.suit === "♣︎" || props.suit === "♠︎") {
      return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
    } else {
      return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        </div>);
    }

  };

  const BuildGameBoard = (renderedCards) => {

    //Keep BuildSingleSpace.
    const buildSingleSpace = (singleCard, index) => {
        return <Col key={index}>{singleCard}</Col>
    }

    const buildSingleRow = (singleRowOfCards, index) => {
        return <Row key={index}>{ singleRowOfCards }</Row>
    }

    let free = {key: null, suit: 'free', val: null, type: 'freeSpace'}
    let freeSpaceCard = MakeCard(free)
    let freeSpace = buildSingleSpace(freeSpaceCard)
    console.log(freeSpaceCard)
    const createGrid = (CardArray) => {
        let gridContainer = [[],[],[],[],[],[],[],[],[],[]]
        console.log(CardArray)
        let cardCounter = 0
        for (let gridContIdx = 0; gridContIdx < gridContainer.length; gridContIdx++) {
            for (let i = 0; i < 10; i++) {
                let row = gridContainer[gridContIdx]
                if ((i === 0 || i === 9) && (gridContIdx === 0 || gridContIdx === 9)) {
                    row.push(freeSpace)
                } else {
                    row.push(CardArray[cardCounter])
                    cardCounter++;
                }
            }
        }
        
        console.assert(gridContainer.length === 10, "Make sure all 100 cards have been pushed to the gridContainer")
        return gridContainer
    }
    let grid = createGrid(renderedCards.map(buildSingleSpace))
    let renderRows = grid.map(buildSingleRow)
    let renderGrid = <Container>{ renderRows }</Container>

    return renderGrid
  }


export default GameBoardDeck

