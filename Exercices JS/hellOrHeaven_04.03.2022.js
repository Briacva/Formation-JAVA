// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function hellOrHeaven(arr) {
    let pairs = arr.filter(number => {
      return number % 2 == 0;
    });
    return pairs + " sont pairs";
  }
  
  hellOrHeaven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  
  // Solution différente un peu bancale à retravailler
  function odd(arr){
    arr.forEach(num => {
      if(num % 2 == 0){
        return num + " sont pairs";
      }
    });
  }
  
  odd([1, 2, 3, 4, 5])