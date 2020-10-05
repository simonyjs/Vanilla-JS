console.log('Its Working!!!');
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
const simon = {
  age:40, 
  name:"simon", 
  address:"incheon",
  favMovies: ["The Rock", "TopGun"]
  };
console.log(simon.age);
console.log(simon.favMovies[0]);
console.log(console);
// function sayHello(potato, tomato){
//   console.log('Hello,',potato,'You are',tomato,'years old');
// }
// sayHello('Simon',40);
function sayHello(potato, tomato){
  return `Hello, ${potato}. You are ${tomato} years old.`;
};
const greetSimon = sayHello('Simon',40);
console.log(greetSimon);
const calculator = {
  plus: function(a,b){
    return a+b;
  }
}
const plus = calculator.plus(5,6);
console.log(plus);