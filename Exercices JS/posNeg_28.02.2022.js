// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative

function posNeg(int1, int2) {
    if (int1 > 0 && int2 < 0 || int1 < 0 && int2 > 0) {
        return true
    }
    else {
        return false
    }
}

// posNeg(-10, 3)