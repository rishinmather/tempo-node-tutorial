// FS module allows us to interact with the file System , there are two types of FS : FS synchronous(blocking) and FS asynchronous(nonblocking)

// note: we have set up a folder called COntent and a folder within it called subfolder . within COntent folder there is a file set up called first.txt and within the subfolder file a file named second.txt is created

// readFileSync and writeFileSync are methods available  in the require object so we directly destructure them

const { readFileSync, writeFileSync } = require("fs");

// readFileSync

// readFileSync allows us to read the contents of a file by us pointing to which file we want to read , the second argument is to mention the character encoding standard

const first = readFileSync("./COntent/first.txt", "utf8");
const second = readFileSync("./COntent/subFolder/second.txt", "utf8");

console.log(first, second);

// writeFileSync : allows us to create a file if the file doesnt exist , add content and if the file exists we can add new content which overwrites the existing content of that particular file ,first argument is to set the filepath,second is for the content

writeFileSync(
  "./COntent/result.txt",
  `here is the result :${first} ,${second}`
);

// now run in terminal CLI and you will immediately see the new file created !

// output:here is the result :hello this is first textfile  sitting in COntent folder ,hello this is second text file sitting inside subfolder

// overwriting
writeFileSync("./COntent/result.txt", `yo i have now overwritten , hahahah!`);

// run in terminal
// output :yo i have now overwritten , hahahah!

// appending
//  (add (something) to the end of a written document. other definition of append:attach/fix) . we use the third argument in writeFileSync which is an optional argument , so in essense we overwrite everything and add in the new appended value

writeFileSync("./COntent/result.txt", `yo i have now overwritten , hahahah!`, {
  flag: "a",
});

// run terminal
// output:  yo i have now overwritten , hahahah!yo i have now overwritten , hahahah!
