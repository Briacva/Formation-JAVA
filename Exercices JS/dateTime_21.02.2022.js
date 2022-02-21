// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Jours
let d = new Date();
let day = d.getDay();
var weekDay = ["Samedi", "lundi", "Mardi", "Mercredi", "Mercredi", "Jeudi", "Vendredi", "Dimanche"];

// Heures
let hours = d.getHours();
let minutes = d.getMinutes();
let secondes = d.getSeconds();

// Résultat 
console.log("Today is : " + weekDay[day] +".");
console.log("Current time is : " + hours + " : " + minutes + " : " + secondes);


// Version opti de Charly 
let date = new Date();
console.log("on est " + date.toLocaleString("default", {weekday: "long"}));  
console.log("il est" + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

// Autre version  
let date = new Date();
console.log(date.toLocaleString());