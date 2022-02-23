// TASK 1:

// Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3. 


var n = 23617;
var str = n.toString();
console.log(str);

function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    var k = 3;
    console.log('The Reversed string is: '+rev);

    for(let item = 0; item<rev.length; item++){
        if(k==item){
            console.log('The Kth Element is: '+rev[item]);
        }
    }
    return 0;
}

console.log(reverseString(str));