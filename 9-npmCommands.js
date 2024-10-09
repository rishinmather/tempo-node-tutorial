// npm commands to install packages/dependencies can be done in two ways :

// Local Dependancy
// -> local dependancy : use it only in this particular project

// command: npm i <packageName>

// GLobal Dependancy :

// use it in any project

// command: npm install -g <packageName>

// NOTE: before we move to installing packages and having fun with it , we need to setup package.json  , which iis a manifest file( stores important info about project/package)

// there are three ways to set up package.json

// 1-> manual approach (create package.json in the root , manually create properties etc)

// 2-> npm init (automatic ,step by step,press enter to skip. meaning we chose what we want  )

// 3-> npm init -y ( set everything as a default setup  )

// testing the waters ;

// first try npm init and see how it works , then delete the new package .json file to test out npm init -y

//  try out npm init -y  ...and then we get package.json file

// install a package (any from npmjs.org) , smilga uses a package called lodash : npm i lodash ,

// once it is installed we will see a new property in package.json called dependencies , which is an object and in the dependencies object we see the latest version on lodash

// NOTE: once the package is installed we will also see a new folder created node_modules . and it is in this folder that all dependencies are stored , in our case lodash being the first dependency we have installed .

// when we install bigger packages for example bootstrap that itself isa package that depends on other dependencies , in the node module we get the package we installed plus the dependencies linked to the package in our example bootstrap, comes with its dependencies - jquery and popperjs

//HIGHLIGHTS:  thus  package.json is important to provide information about our project and inside there a very important property in the dependencies one , where we store the dependencies we are using in our project

// SYNTAX:
// HOW TO USE THE PACKAGES (external module )WE HAVE INSTALLED IN nodeJS:

// the convention is to name the variable _ for external modules

const _ = require("lodash");

// lodash is a utility package , so we set an array of arrays and use one of its method to create back a single normal array out of that nested array

const items = [1, [2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
