// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longestWord(phrase) {
    let mots = phrase.split(" ");
    let plusLongMot = mots[0];

    for (let i = 1; i < mots.length; i++) {
        if (mots[i].length > plusLongMot.length) {
            plusLongMot = mots[i];
        }
    }
    return plusLongMot;
}

// longestWord("Je préfère bibi mais guillaume lui m'appelle bribri");