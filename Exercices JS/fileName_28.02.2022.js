// Write a JavaScript exercise to get the extension of a filename

// Ma solution 

let fileName = "abcd.txt";
let extension = fileName.split(".");
console.log(extension);

// Solution "officielle"

let filename = "system.php";
console.log(filename.split('.').pop());
let filename = "abc.js";
console.log(filename.split('.').pop());