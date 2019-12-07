import React from 'react';
import './cards.scss';
// import { create } from 'domain';


const makeCardDeck = () => {
    const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K"];
    let cardDeck = [];
    let card = [];

    for (let x = 0; x < suits.length; x++) {
      for (let y = 0; y < values.length; y++) {
        card = {key: [x,y], suit: suits[x], val: values[y]};
        cardDeck.push(card);
      }
    };
    return cardDeck
 }

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
        console.log(shuffledCards)

        this.setState({
            cardDeck: shuffledCards
        })

    }
    
    // Jacks have been removed from the Deck because they are not on the gameboard. They will need to be re-added when you create
    // the deck for the game.
    render() {
      console.log(this.state.cardDeck)
      
      //consider rendering the gameboard here inside of this return function.
  
      return (  
        <div>
          <button onClick={this.handleShuffleCards}>Shuffle</button>
          <div className="deck">
            {this.state.cardDeck.map(function(card) {
              return <MakeCard key={card.key} suit={card.suit} value={card.val} />
            })}
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


export default GameBoardDeck

