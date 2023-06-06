/*
Create two 2-element arrays.
Create an empty array to accumulate concatenations. Create a counter for this array.
Code nested loops that concatenate all the combinations of the array elements.
After the loops have run, create an alert that displays the first combination.
Click the Run It button to run your code live. (Only one alert should display.)
*/

var elements = ["Speculation", "Entertainment"];
var elements2 = ["Business", "Politics"];
var emptyArray = [];
var counter = 0;

for (var j = 0; j < elements.length; j++) {
  for (var i = 0; i < elements2.length; i++) {
    emptyArray.push(elements[j] + " " + elements2[i]);
  }
  alert(emptyArray[counter]);
  counter++;
}
