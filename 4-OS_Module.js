// The node:os module provides operating system-related utility methods and properties. It can be accessed using:

// os is one of the built-in modules in node.js

// syntax:

const os = require("os");

// can be used to get info about the current user

const user = os.userInfo();
console.log(user);

// can use os to check system uptime(uptime means how long the system(computer) has been running )
console.log(`the system has been running for ${os.uptime()} seconds`);

// some other methods available in os

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemMem: os.freemem(),
};

console.log(currentOS);
