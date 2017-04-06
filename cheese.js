var howMany = "first";
var count = 1;
var myFunction = {};

myFunction.howMany = function(num){
  console.log("this is my " + num + " function");
  num = 'second';
  return num;
}

myFunction.count = function(){
  if(count === 1){
    count++;
    return "first";
    }
    return "not first";
}
myFunction.howMany(myFunction.count());
var result = myFunction.howMany(myFunction.count());
myFunction.howMany() //undefined result due to 'num' being a local variable
