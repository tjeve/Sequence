import React from 'react';
import './cards.scss';
// import { create } from 'domain';
//From board.js
import './board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const makeCardDeck = () => {
    const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K"];
    let cardDeck = [];
    let card = [];
    // Added to create 2 decks for the gameboard
    if (cardDeck <= 44) {
       
        for (let x = 0; x < suits.length; x++) {
            for (let y = 0; y < values.length; y++) {
              card = {key: [x,y], suit: suits[x], val: values[y], type: 'card'};
              cardDeck.push(card);
            }
          };  
    }
    let doubleDeck = cardDeck.concat(cardDeck)
    let freeSpace = {key: null, suit: 'free', val: null, type: 'freeSpace'}
    let freeSpaceArray = [freeSpace, freeSpace, freeSpace, freeSpace]
    let doubleDeckWithFreeSpaces = doubleDeck.concat(freeSpaceArray)
    console.log('The Deck has ' + doubleDeckWithFreeSpaces.length + ' cards')
    console.log(doubleDeckWithFreeSpaces)
        return doubleDeckWithFreeSpaces
 }

 /* This is the part of the code you need to fix below 
 You need to put the array being returned from Gameboard.render() and place that inside the array you're going
 use for the gameBoard */
 const createRenderedGameBoard = (cardDeck) => {

    let createCardsHTML = cardDeck.map((card) => {return <MakeCard key={card.key} suit={card.suit} value={card.val}/>} )

    // console.log(createCardsHTML)
    return createCardsHTML

 }


/* This is the part of the code you need to fix above */

class GameBoardDeck extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          cardDeck: makeCardDeck()
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

    handleShuffleCards = () => {
        let shuffledCards = this.shuffleCards(this.state.cardDeck)
        // console.log(shuffledCards)

        this.setState({
            cardDeck: shuffledCards
        })

    }
    
    // Jacks have been removed from the Deck because they are not on the gameboard. They will need to be re-added when you create
    // the deck for the game.
    
    
    render() {
      //consider rendering the gameboard here inside of this return function.
        console.log(BuildGameBoard(createRenderedGameBoard(this.state.cardDeck)))
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
/*
  {this.state.cardDeck.map(function(card) {
              return <MakeCard key={card.key} suit={card.suit} value={card.val} />
            })}
*/
  
  const MakeCard = (props) => {
    if (props.suit === "♣︎" || props.suit === "♠︎") {
      return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
    } else {
      return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        </div>);
    }

  };

// const BuildGameBoard = (renderedDeck) => {
//     console.log(renderedDeck)
//     // const createRowOfTen
//     let newRow = []
//     let grid = []
    for (let idx = 0; idx < 10; idx++) {
        if (renderedDeck[idx].key === "0" || "0,9" || "9,0" || "9,9") {
            newRow.push(<Col><span role="img" aria-label="star">⭐0-0 </span></Col>)
        } else {newRow.push(<Col>{ renderedDeck[idx] }</Col>)}
    }
//     return newRow
//     }




  const BuildGameBoard = (renderedCards) => {

    //Keep BuildSingleSpace.
    const buildSingleSpace = (singleCard) => {
        return <Col>{singleCard}</Col>
    }

    const buildSingleRow = (singleRowOfCards) => {
        return <Row>{ singleRowOfCards }</Row>
    }

    const createGrid = (CardArray) => {
        let gridContainer = [[],[],[],[],[],[],[],[],[],[]]
        for (let gridContIdx = 0; gridContIdx < gridContainer.length; gridContIdx++) {

            for (let rowIdx = 0; rowIdx < CardArray.length; rowIdx++) {
                
                if (gridContainer[gridContIdx].length < 10) {
                    gridContainer[gridContIdx].push(CardArray[rowIdx])
                } else { 
                    gridContIdx++
                    gridContainer[gridContIdx].push(CardArray[rowIdx])
                    console.assert(gridContainer[gridContIdx].length === 10, "All 100 cards have not been pushed to the gridContainer")
                }
            }
        }
        // Bug --> The last card in each row is not appearing (ex. Q spades for row[0], 10 hearts for row[1], 9 clubs for row[2], etc.)
        console.assert(gridContainer.length === 10, "Make sure all 100 cards have been pushed to the gridContainer")
        return gridContainer
    }
    let grid = createGrid(renderedCards.map(buildSingleSpace))
    let renderRows = grid.map(buildSingleRow)
    let renderGrid = <Container>{ renderRows }</Container>

    return renderGrid
  }


export default GameBoardDeck

