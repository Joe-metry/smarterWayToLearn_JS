/*
Prompt the user to enter a city.
If the city is Akron, display an alert acknowledging it.
If not, check to see if it's Buffalo.
If it is, display an alert acknowledging it's Buffalo.
Otherwise, display a different alert.
*/

var cty = prompt("Enter a city:");
if (cty === Akron) {
    alert("On track");
}
else if (cty === Buffalo) {
    alert("Turn back and go west");
}
else {
    alert("Follow the train going east");
}
