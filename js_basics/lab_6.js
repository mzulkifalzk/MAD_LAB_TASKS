var num = Math.floor(Math.random() * 11);
var input = require('readline');

var userInput = input.createInterface(process.stdin, process.stdout);

userInput.question('Enter the number: ', (number) => {
    if (input == num) {
        console.log('Congrats! You Won');
    }
    else {
        console.log('Sorry! You lost because the number generated is: ',num);
    }
    // console.log('Your number is: ' + number);
    userInput.close();
});


