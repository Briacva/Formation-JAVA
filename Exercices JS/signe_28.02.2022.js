// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Sample numbers : 3, -7, 2
// Output : The sign is -

function signe() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    num3 = document.getElementById("thirdNumber").value;

    let product = num1 * num2 * num3;

    if (product > 0) {
        alert("Le signe est positif")
    }
    else {
        alert("Le signe est négatif")
    }
}