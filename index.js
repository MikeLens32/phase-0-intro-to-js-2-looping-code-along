//   const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//      console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts)

// const cards = ["Mom", "Dad", "Brother"];

// function writeCards(cards) {
//     for (let i = 0; i <cards.length; i++) {
//         console.log(`Thank you ${cards[i]} for being the best!`);
//     debugger;
//     }
//     return cards;
// }
// writeCards(cards);



// function countDown() {
//     while (countDown > -1) {
//         console.log(countDown--);
//         debugger;
//     }
//     return countDown;
// }
// countDown();

function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number--);
    }
    return countDown;
}
countDown()