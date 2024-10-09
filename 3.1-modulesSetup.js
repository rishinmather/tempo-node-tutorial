// let names be a local
const names = "someName";

// below two names will be global that we want to export
const susan = "susan";
const peter = "peter";

// on accessing the globals called module we can see within the module object we have a property called exports which is an object .
console.log(module);

// setting up modules

module.exports = { susan, peter };
