
// function checkPosition() {
//     let array = [2, 3, 4, 10, 9, 5, 10]
//     for (i = 0; i <= array.length; i++) {
//         if (array[i] == 10) {
//             console.log("10 appears in first or last position ", [i])
//         }
//     }
// }

// checkPosition();


var array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 15));
for (i = 0; i <= array.length; i++) {
    if (array[i] == 10) {
        console.log("10 appears in first or last position ", [i])
    }
}

console.log(array);