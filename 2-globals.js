// GLOBALS

// in node we use GLOBALS since there is no browser and hence no window object, globals can be accessed anywhere in the project , some of the most prominent globals are :

// __dirname : path to current directory
// __filename-file name
// require:fnction to use modules(common js)
// module : info about the current module (file)
// process:info about env where the program is being executed

// run each in CLI

console.log(__dirname);

//  we have options to also use setInterval and setTimeOut in node

// setInterval(() => {
//   console.log("hello world ");
// }, 1000);

setTimeout(() => {
  console.log("hello world ");
}, 1000);
