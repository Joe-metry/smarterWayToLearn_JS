/*
Create an array with 2 number elements.
Set a for loop, limiting the number of iterations using the length keyword.
Loop through the array to test whether each of the elements
matches itself. (It will. )
When a match is found, display an alert with the number (it should be your first number) and stop the loop.
*/



var numbers = [10, 11];
for (var j = 0; j < numbers.length; j++) {
  if (numbers[j] === numbers[j] ) {
    alert(numbers[j]);
   break
  }
}
