import './cards.scss';

class Deck extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    shuffleCards(deck) {
      console.log('shuffling deck');
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
      const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
      const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      let cardDeck = [];
      let card = [];
  
      for (let x = 0; x < suits.length; x++) {
        for (let y = 0; y < values.length; y++) {
          card = {suit: suits[x], val: values[y]};
          cardDeck.push(card);
        }
      };
      
      this.shuffleCards(cardDeck);
  
  
      return (  
        <div>
          <button onClick={this.shuffleCards(cardDeck)}>Shuffle</button>
          <div className="deck">
            {cardDeck.map(function(card) {
              return <Card suit={card.suit} value={card.val} />
            })}
          </div>
        </div>
      );
    }
  };
  
  const Card = (props) => {
    if (props.suit == "♣︎" || props.suit == "♠︎") {
      return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
    } else {
      return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        </div>);
    }
  };
  
  const App = () => {
    return (
      <div>
        <Deck />
      </div>
    );    
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));


























// const Card = (props) => {
//     if (props.suit == "♣︎" || props.suit == "♠︎") {
//       return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
//     } else {
//       return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
//         <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
//         </div>);
//     }
//   };
// class Deck extends React.Component{
//     constructor () {
//         let deck = this.deck = []

//         let suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
//         let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//         for (var idx = 0; idx < suits.length; idx++) {
    
//             for (var idx2 = 0; idx2 < points.length; idx2++) {

//                 let card = {
//                     point: points[idx2],
//                     suit: suits[idx]
//                 }
//                 deck.push(card)
//             }
//         }
//     }
//     draw() {
//         let randomNumberBetween1and52 = (Number((Math.random()* 52).toFixed(0)))
//         return this.deck[randomNumberBetween1and52]
//     }
    
//     shuffle() {
//         let startingDeck = this.deck
        
//         for (let idx = startingDeck.length; idx >= 0; idx--) {
//             startingDeck.push(Math.floor(Math.random() * startingDeck.length))
//         console.log()
//         }

//     }
    
// }
// // class Hand {
// //     constructor () {
// //         this.hand = []
// //     }
// //     addCard(card) {
// //         this.hand.push(card)
// //     }
// // }
