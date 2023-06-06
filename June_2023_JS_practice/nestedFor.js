/*
 Code nested loops. The outer loop runs twice. The inner loop runs twice for each outer loop iteration.
 On each iteration of the inner loop, display the sum of the two counters in an alert.
 Click the Run It button to run your code live.
 */

for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 2; j++) {
    alert(i + j);
  }
}
