// Codecademy Mixed Messages Project!
possiblePhrases = {
    firstPhrase : ['On this monday','On this tuesday','On this wednesday', 'On this thursday','Friday'],
    secondPhrase : ['you will eat', 'you will receive', 'you will find'],
    thirdPhrase : ['a Hamburger!', 'some chicken wings on the street!', 'a fully functional cassette player!', 'a 98 Volkswagen Golf!']
}

const messageMan = obj =>{
    let firstIter = true;
    let message = '';
    for (phrase in obj){
        const random = obj[phrase][Math.floor(Math.random() * obj[phrase].length)]
        if (firstIter){
            message += random;
            firstIter = false;
        } else {
        message += ' ' + random;
        }
    }
    return message;
}

console.log(messageMan(possiblePhrases));

