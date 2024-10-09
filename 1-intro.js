const amount = 100;

if (amount < 20) {
  console.log("small number");
} else {
  console.log("bigger number");
}

console.log(`hello world its my first node app!!`);

// to run it in CLI(command line interface) , in terminal type: node followed by filename so in this case node 1-intro.js

// GLOBALS

// in node we use GLOBALS since there is no browser and hence no window object, globals can be accessed anywhere in the project , some of the most prominent globals are :

// _dirname : path to current directory
// _filename-file name
// require:fnction to use modules(common js)
// module : info about the current module (file)
// process:info about env where the program is being executed
console.log(_dirname);
