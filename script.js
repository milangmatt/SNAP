
const cards = ['cards/1.png','cards/2.png','cards/3.png','cards/4.png','cards/5.png','cards/6.png','cards/7.png','cards/8.png','cards/9.png','cards/10.png','cards/11.png','cards/12.png'];


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