// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function upperCase(phrase) {
    let mots = phrase.split(" ");

    for (let i = 0; i < mots.length; i++) {
        mots[i] = mots[i][0].toUpperCase() + mots[i].substr(1);
    }
  return mots.join(" ");
}

upperCase("Je préfère bibi mais guillaume lui m'appelle bribri")