class Card extends React.Component {
    constructor (suit, value) {
        this.suit = suit;
        this.value = value;
    }
    getImageURL(card) {
        return null

    }
}
class Deck extends React.Component{
    constructor () {
        let deck = this.deck = []

        let suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
        let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        for (var idx = 0; idx < suits.length; idx++) {
    
            for (var idx2 = 0; idx2 < points.length; idx2++) {

                let card = {
                    point: points[idx2],
                    suit: suits[idx]
                }
                deck.push(card)
            }
        }
    }
    draw() {
        let randomNumberBetween1and52 = (Number((Math.random()* 52).toFixed(0)))
        return this.deck[randomNumberBetween1and52]
    }
    
    shuffle() {
        let startingDeck = this.deck
        
        for (let idx = startingDeck.length; idx >= 0; idx--) {
            startingDeck.push(Math.floor(Math.random() * startingDeck.length))
        console.log()
        }

    }
    
}
class Hand {
    constructor () {
        this.hand = []
    }
    addCard(card) {
        this.hand.push(card)
    }
}

const Card = (props) => {
    if (props.suit == "♣︎" || props.suit == "♠︎") {
      return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
    } else {
      return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        </div>);
    }
  };
