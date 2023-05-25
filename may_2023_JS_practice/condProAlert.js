
/*
Declare 2 variables. Assign one of them your first name and the other one your last name.
Code 2 prompts, asking for your first and your last name.
If your answers match the two variables, display an alert.
*/

var firstName = "Joseph"; var lastName = "Ubi";

var first = prompt("Enter first name: ");
var second = prompt("Enter Last name");

if ((first === firstName) && (second === lastName)) {
    alert("Got it!")
}
