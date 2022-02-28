// Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

// Essai de boucle inversée qui ne fonctionnne pas

// function reverse (x) {
//     let reversed;
//     for (let i = x.length; i > 0; i--){
//         reversed = reversed + x[i];
//     }
//   return reversed
// }

// reverse(1234)

// Solution "officielle"

function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));