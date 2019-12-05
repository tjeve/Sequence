import react from 'react'

// Instantiate a deck
var deck = Deck();

// display it in a html container
var $container = document.getElementById('board');
deck.mount($container);

export default { deck };