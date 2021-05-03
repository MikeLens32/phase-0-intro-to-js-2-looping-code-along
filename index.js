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

function writeCards(cards) {
    const array = []
    for (let i = 0; i <cards.length; i++) {
        array.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return array;
}



function countDown(num) {
    let loop = num
    while (loop >= 0) {
        console.log(loop--);
    }
}


// countDown();

// function countDown() {
//     let number = 10;
//     while (number >= 0) {
//         console.log(number--);
//     }
//     return countDown;
// }
// countDown()