var name = "Bomber"
var age = 5
var mammal = "cat"

console.log("My name is " + name + " and I am " + age + ".");

var counter = 1

for (var counter = 1; age <= (21 - counter); counter ++)
  var tempAge = age + counter;
  console.log ("In " + counter + " years, I will be " + tempAge + ".");

var drinkingAge = 21-tempAge;

if (tempAge < 21) {
  console.log("I can have a beer in " + drinkingAge + " years.");
} else {
  console.log ("Wait...I'm a cat.");
}

if (mammal != "human") {
  console.log ("But cats can't drink.");
}
