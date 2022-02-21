// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// Version Freestyle
let lengthA = 7;
let lengthB = 5;
let lengthC = 4;
let halfPerimeter = (lengthA + lengthB + lengthC) / 2;

let aireTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - lengthA) * (halfPerimeter - lengthB) * (halfPerimeter - lengthC));

console.log(aireTriangle)

// Version fonction 

function aireTriangle(lengthA, lengthB, lengthC) {
    let halfPerimeter = (lengthA + lengthB + lengthC) / 2;
    let theoremeHeron = Math.sqrt(
        halfPerimeter *
        (halfPerimeter - lengthA) *
        (halfPerimeter - lengthB) *
        (halfPerimeter - lengthC)
    );
    return theoremeHeron;
}

aireTriangle(7, 6, 5);