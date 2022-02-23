var input = 23617;
var str = input.toString();
var even = 0
var isEven = function (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 == 0) {
            even += parseInt(str[i]);
        }
    }
    return console.log('The Sum of the Even In a String is: '+even);
}
isEven(str);