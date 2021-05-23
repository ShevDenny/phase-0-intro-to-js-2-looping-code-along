/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
    }

    return gifts;
}

wrapGifts(gifts); */

function writeCards(name, event) {
    let message = []
    for (let a = 0; a < name.length; a++) {
        message.push(`Thank you, ${name[a]}, for the wonderful surprise gift!`);
    }
    return message;
}
writeCards();

function countDown(start) { 
    while (start > 0) {
         console.log(start);
         start -= 1;
        }
        console.log(start);
}

