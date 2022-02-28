// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19

function absoluteDifference2(number) {
    let difference = number - 19;
    if (difference > 19) {
    }
    return Math.abs(3*difference);
}

// absoluteDifference(10)