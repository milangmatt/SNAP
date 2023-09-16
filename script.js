
const cards = ['cards/2.jpeg','cards/3.jpeg','cards/4.jpeg','cards/5.jpeg','cards/6.jpeg','cards/1.jpeg','cards/7.jpeg','cards/8.jpeg','cards/9.jpeg','cards/10.jpeg'];


function generateRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    return randomCard;
}


function displayCard(card) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = `<img src="${card}" alt="Random Card">`;
    
    // Hide the button after generating
    document.getElementById("generate-card").style.display = "block";//change to none
}

document.getElementById("generate-card").addEventListener("click", () => {
    const randomCard = generateRandomCard();
    displayCard(randomCard);
    
    
    localStorage.setItem("selectedCard", randomCard);
});

const savedCard = localStorage.getItem("selectedCard");
if (savedCard) {
    displayCard(savedCard);
} else {
    // If there's no saved card, display the button
    document.getElementById("generate-card").style.display = "block";
}