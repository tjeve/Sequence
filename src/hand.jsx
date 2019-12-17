import React from 'react';
import './cards.scss';
import { MakeCard, makeCol, makeRow } from './cards.js';
import './board.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

//**************************************************************************************************************************
// Deck of Cards //

const TwoDecks = () => {
  const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let cardDeck = [];
  let card = [];
  // code below added to create 2 decks for the gameboard
  if (cardDeck <= 44) {
     
      for (let x = 0; x < suits.length; x++) {
          for (let y = 0; y < values.length; y++) {
            card = {key: [x][y], suit: suits[x], val: values[y], type: 'card'};
            cardDeck.push(card);
          }
        };  
  }
  let doubleDeck = cardDeck.concat(cardDeck)
  console.assert(doubleDeck.length === 104, "CardDeck does not have 104 cards")
  return doubleDeck
}

//**************************************************************************************************************************
// Hand Logic //

let blankCard = () => {
  return (
  <div className="player-1">
    <div className="big-card card-blank">
    </div>
  </div>
  )
}

let initialDraw = (cards) => {
  let hand = cards.slice(0, 5)
  return hand
}
let initialReturnDeck = (cards) => {
  let deck = cards.slice(5, cards.length)
  return deck
}
let drawCard = (cards) => {
  let hand = cards.slice(0, 1)
  return hand
}
let returnDeck = (cards) => {
  let deck = cards.slice(1, cards.length)
  return deck
}
let makeButton = (cardsHTML, index) => {
  let HandButtons = <button onClick={null} key={index} className="hand-buttons">{ cardsHTML }</button>
  return HandButtons
}
let formatHand = (deck) => {
  let cardDeck = deck.map( (card, index) => {return <MakeCard key={index} suit={card.suit} value={card.val}/>} )
  let cols = cardDeck.map(makeCol) // in cards.js
  let buttons = cols.map(makeButton) //in cards.js
  let rowOfCards = makeRow(buttons) //in cards.js
  return rowOfCards
}

//**************************************************************************************************************************
// Hand Rendering

class Hand extends React.Component {
  constructor (props) {
      super (props);
      this.state = {
          currentHand: [],
          currentDeck: this.shuffleCards(TwoDecks())
      }
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
  handleDrawnCard = () => {
    let oldHand = this.state.currentHand
    let oldDeck = this.state.currentDeck
    console.log(oldHand)
    let newCards
    let restOfDeck

    if (oldHand.length === 0 && oldDeck.length === 104) {
      newCards = initialDraw(this.state.currentDeck)
      restOfDeck = initialReturnDeck(this.state.currentDeck)
    } else {
      newCards = drawCard(this.state.currentDeck)
      restOfDeck = returnDeck(this.state.currentDeck)
    }

    this.setState({
      currentHand: oldHand.concat(newCards),
      currentDeck: this.shuffleCards(restOfDeck)
    })
  }
  handleHand(deck) {
    let cols = makeCol(deck)
    let buttons = makeButton(cols)
    return buttons
  }
  render() {
    console.log("The currentHand array has " + this.state.currentHand.length + " cards")
    console.log("The currentDeck array has " + this.state.currentDeck.length + " cards")

      return (
      <div className="hand-deck-container">
        <div className="hand">{ <Container>{formatHand(this.state.currentHand)}</Container> }</div>
        <div className='deck-button-container'>
          <button className="deck-button" onClick={this.handleDrawnCard}>{ blankCard() }</button>
        </div>
      </div>
      )
  }

}
//*************************************************************************************************************************


export default Hand