// Write a JavaScript program that accept two integers and display the larger

function larger (entier1, entier2) {
    if (entier1 > entier2) {
        return entier1;
    }
    if (entier1 == entier2) {
        return "Les entiers " + entier1 + " et " + entier2 + " sont égaux"
    }
    else {
        return entier2
    }
}

// larger (19, 19)