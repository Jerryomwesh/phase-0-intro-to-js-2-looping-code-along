// Function to generate thank-you messages
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// Function to count down from a given positive integer to zero
function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--; 
    }
}


module.exports = {
    writeCards,
    countDown
};
