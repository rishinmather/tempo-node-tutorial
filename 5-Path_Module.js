//path is built in module in nodejs that  allows us to interact with filepaths easily

// syntax

const path = require("path");

// lets see one property in path module called sep that allows us to see the filepath seperator(egs:"./index/index.js") used in our platform

console.log(path.sep);
// output :   \ (which is the file seperator for windows)

//1: join method
// :egs: when we have a folder with subfolders and within the subfolder we have a file , we can use join() to join them all which incoporates the file seperator and return us the normalised version(since when we set the join method we pass the values as strings) .PS: we are literally creating the path ground up using the path module and its join() method

const newFilePath = path.join(
  "/5.1-path_Module_joinFOlder",
  "5.2-path_ModuleSubFolder",
  "example.txt"
);

// even if we add trailing path seperator accdently like that extra one after joinFOlder, we will still get the correct one in output thus join() correctly gives accurate data
// egs:   path.join(
//   "/5.1-path_Module_joinFOlder/",
//   "5.2-path_ModuleSubFolder",
//   "example.txt"
// );

console.log(newFilePath);
// output : \5.1-path_Module_joinFOlder\5.2-path_ModuleSubFolder\example.txt

//2:basename        ( method to get basename)
//  (to get the last portion of the filepath , in our example the last portion being example.txt)

const base = path.basename(newFilePath);
console.log(base);
// output : example.txt

// 3 - resolve()  ( gives us the absolute path meaning the full complete path )

const absolute = path.resolve(
  __dirname,
  "5.1-path_Module_joinFOlder",
  "5.2-path_ModuleSubFolder",
  "example.txt"
);

console.log(absolute);
// output: C:\NODE JS TUTORIAL\5.1-path_Module_joinFOlder\5.2-path_ModuleSubFolder\example.txt
