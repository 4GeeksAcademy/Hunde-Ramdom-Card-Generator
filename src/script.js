// script.js

// Possible suits and values
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

// Function to get a random card
function getRandomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    return { value: randomValue, suit: randomSuit };
}

// Set card text on page load
document.addEventListener('DOMContentLoaded', () => {
    const cardValueElement = document.getElementById('card-value');
    const cardSuitElement = document.getElementById('card-suit');

    // Get a new random card every time the page is loaded
    const card = getRandomCard();
    cardValueElement.textContent = card.value;
    cardSuitElement.textContent = card.suit;
});
