// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var d = new Date();

// Pour ajouter le 0 en dizaine
var day = String(d.getDate()).padStart(2, '0');

// Pour ajouter 1 à l'incrémentaion car janvier = 0 et ajouter 0 en dizaine
var month = String(d.getMonth() + 1).padStart(2, '0');

var year = d.getFullYear();

today = month + '/' + day + '/' + year;