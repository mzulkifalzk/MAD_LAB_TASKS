const vowels = ["a", "e", "i", "o", "u"];

function countVowelsIterative(text,numbers) {
    // for finding left most vowel
    for (let alphabet of text.toLowerCase()) {
        if (vowels.includes(alphabet)) {
            console.log('The left most vowel is: '+alphabet);
            break;
        }
    }
    
    // for reversing a number
    var str = numbers.toString();
    // console.log(str);
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    console.log('The Reversed string is: '+rev);    
}

var n = 23617;
countVowelsIterative('skadjfksiuweo',n);
