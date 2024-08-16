import './styles.css';

// Possible suits and values
const suits = [
    { symbol: '♠', name: 'Spades', color: 'black' },
    { symbol: '♣', name: 'Clubs', color: 'black' },
    { symbol: '♥', name: 'Hearts', color: 'red' },
    { symbol: '♦', name: 'Diamonds', color: 'red' }
];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Function to get a random card
function getRandomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    return { value: randomValue, suit: randomSuit };
}

// Set card text on page load
document.addEventListener('DOMContentLoaded', () => {
    const cardValueElement = document.getElementById('card-value');
    const cardSuitTopLeft = document.getElementById('card-suit-top-left');
    const cardSuitBottomRight = document.getElementById('card-suit-bottom-right');

    // Get a new random card every time the page is loaded
    const card = getRandomCard();
    cardValueElement.textContent = card.value;
    cardSuitTopLeft.textContent = card.suit.symbol;
    cardSuitBottomRight.textContent = card.suit.symbol;

    // Apply the suit color
    cardSuitTopLeft.style.color = card.suit.color;
    cardSuitBottomRight.style.color = card.suit.color;
    cardValueElement.style.color = card.suit.color;
});
