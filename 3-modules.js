// every file in node is a module !

// require is the function we use to import the file we have set for export, syntax for require:

const names = require("./3.1-modulesSetup");
console.log(names);

const nameFUnction = require("./utils");

const data = require("./3.2-modulesAltSyntax");
console.log(data);

nameFUnction("johnny");

nameFUnction(names.peter);
nameFUnction(names.susan);
