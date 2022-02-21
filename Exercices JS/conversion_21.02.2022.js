// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function conversion()
{
        temp1 = document.getElementById("temperatureC").value;
        temp2 = document.getElementById("temperatureF").value;
        document.getElementById("result1").innerHTML = (temp1 * 1.8000) + 32;
        document.getElementById("result2").innerHTML = (temp2-32) / 1.8000;
}
