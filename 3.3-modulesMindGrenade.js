// we are putting doing a function and calling/executing it right away in this file iteself (this is imp) and we dont set an export but we can import this file on require elsewhere because it is a function being executed here itself node wraps the function and allows an import

const num1 = 5;
const num2 = 10;

const sum = () => {
  console.log(num1 + num2);
};

sum();

// invoke import using require: require("./3.3-modulesMindGrenade")  anywhere and you will get the function result ;
