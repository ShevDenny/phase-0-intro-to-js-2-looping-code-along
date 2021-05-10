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
        console.log(message.push(`Thank you, ${name[a]}, for the wonderful surprise gift!`));
    }
    return message;
}
writeCards();

function countDown() {
    let countDown = 10; 
        while (countDown > -1) {
            console.log(countDown--);
        }
        return countDown;
}

countDown;