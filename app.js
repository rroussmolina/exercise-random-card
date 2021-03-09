window.onload = () => {
    document.querySelector('.card').classList.add(RandomSuit());
    document.querySelector('.card').innerHTML = RandomNumber();
    // let button = document.querySelector("#btn");
    // button.addEventListener("click", function () {
    //     document.querySelector('.card').classList.add(RandomSuit());
    //     document.querySelector('.card').innerHTML = RandomNumber();
    //});
}

let RandomNumber = () => {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumber = Math.floor(Math.random() * number.length);
    return number[indexNumber];
}

let RandomSuit = () => {
    let suit = ["spades", "clubs", "hearts", "diamonds"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
}