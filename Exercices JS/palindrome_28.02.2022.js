// Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run

function palindrome(word) {
    let wordSplit = word.split("");
    let wordReversed = wordSplit.reverse();
    let wordJoined = wordReversed.join("");
    if (word == wordJoined) {
        return word + " is a palindrome"
    }
    else {
        return word + " isn't a palindrome"
    }
}
palindrome("word")