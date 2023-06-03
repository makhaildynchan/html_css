// console.log
const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello('keds');

// return
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);