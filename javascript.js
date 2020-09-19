const cards = document.querySelectorAll(".card");
console.log(cards);

//variables.
var isFlipped = false, firstCard, secondCard, score = 10, tries = 0;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
    this.classList.add("flip");
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
        firstCard.removeEventListener("click", flip);
    } else {
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkIt();
        firstCard.addEventListener("click", flip);
    }
}
// in html, we can have data-image attribute & we can access these values by accessing its dataset and then its values.
function checkIt() {
    firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
}

const success = () => {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    document.querySelector(".score").innerHTML = "SCORE : " + (score);
    if (score === 80) {
        let opacityChange = document.querySelector(".gameContainer");
        opacityChange.style.opacity = 0.2;
        showResult();
    }
    score += 10;
    document.querySelector(".try").innerHTML = "ATTEMPTS : " + (++tries);
    reset();
}
const fail = () => {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 300);
    document.querySelector(".try").innerHTML = "ATTEMPTS : " + (++tries);
}
const reset = () => {
    //  isFlipped = false;
    //  firstCard = null;
    //  secondCard = null;
    [isFlipped, firstCard, secondCard] = [false, null, null];
}

const showResult =  () => {
    var showresult = document.querySelector(".result");
    showresult.style.display = "flex";
    setTimeout(() => {
        var Display = document.querySelector("#star1");
        Display.style.display = "";
    }, 500);
}

(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16); // random no. b/w 0 and 15
        card.style.order = index;
    })
})(); // it will run automatically as soon as script run.
