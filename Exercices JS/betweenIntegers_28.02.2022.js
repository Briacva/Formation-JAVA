// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400

function betweenIntegers(int) {
    return ((Math.abs(100 - int) <= 20) ||
        (Math.abs(400 - int) <= 20));
}

// betweenIntegers(100)