function alphabeticallySorted(str){
    var splittedString = str.split('');
    var sortedString = splittedString.sort();
    return console.log(sortedString.join(''));
}

input = "COMSATS";
alphabeticallySorted(input);