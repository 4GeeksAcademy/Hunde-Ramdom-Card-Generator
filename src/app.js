const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayRandomCard() {
    const suit = getRandomElement(suits);
    const value = getRandomElement(values);

    const suitSymbol = {
        Hearts: '♥️',
        Spades: '♠️',
        Clubs: '♣️',
        Diamonds: '♦️'
    };

    document.getElementById('suit').textContent = suitSymbol[suit];
    document.getElementById('value').textContent = value;
}

// Display a random card on page load
window.onload = displayRandomCard;
function displayCard() {
  console.log('DisplayCard function called');
  const cardContainer = document.querySelector('.deck');
  
  if (cardContainer) {
    // Clear existing cards
    cardContainer.innerHTML = '';

    // Example: Create and add a card element
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = 'Sample Card';
    cardContainer.appendChild(card);
  } else {
    console.error('Card container not found');
  }
}
