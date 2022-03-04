// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

function triDecroissant(a, b, c) {
    let arr = new Array();
    arr.push(a, b, c);
    let decroissant = arr.sort((a, b) => b - a)
    return decroissant;
}

// triDecroissant(0, -1, 4)