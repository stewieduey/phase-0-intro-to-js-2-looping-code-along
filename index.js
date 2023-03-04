// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
};

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(name, birthday) {
    let messages = [];
    for (let i = 0; i < name.length; i++) {
        messages.push (`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    } 
    return messages;
};
function countDown(positiveNumber){
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
}