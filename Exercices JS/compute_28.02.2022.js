// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

function compute(int1, int2) {
    if (int1 != int2) {
        sum = int1 + int2;
    }
    else {
        sum = (int1 + int2) * 3;
    }
    return sum;
}

// compute(20, 20);