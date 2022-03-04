// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

function biggest(a, b, c, d, e) {
    let arr = [a, b, c, d, e];
    let biggestOne = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestOne) {
            biggestOne = arr[i];
        }
    }
    return biggestOne;
}

// biggest(100, 900, 8000, -11, 22)

// Solution native - Charly 

function biggest(a, b, c, d, e) {
    let arr = [a, b, c, d, e];
    return Math.max(...arr);
  }
  
// biggest(100, 900, 8000, -11, 22);