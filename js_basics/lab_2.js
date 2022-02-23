var input = 23617;
var str = input.toString();
var sum=0;
for(let i=0;i<str.length;i++){
    sum += parseInt(str[i]);
}

console.log(sum);