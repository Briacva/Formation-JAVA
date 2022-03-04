// Write a JavaScript program to test the first character of a string is uppercase or not

// Fonctionne pas trop comme je veux à retravailer ! Je voulais qu'il vérifie uniquement la première lettre de la phrase mais là dit que uppercase si un mot de la phrase a une maj

function grosseLettre(phrase) {
    regexp = /[A-Z]/;
    
    if (regexp.test(phrase)) {
      return "String's first character is en grosse lettre";
    } else {
      return "String's first character is not en grosse lettre";
    }
  }
//   grosseLettre("Bonjour je m'appelle Guillaume");
//   grosseLettre("bonjour je m'appelle guillaume");
