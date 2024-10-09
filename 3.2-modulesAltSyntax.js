// directly setting the export onto the entity

module.exports.items = ["item1", "item2"];

// another way is ,since exports is an object property within the globals  module property , we can assign a property value and export the entity

const person = {
  name: "bob",
  age: 29,
};

module.exports.singlePerson = person;
console.log(this.singlePerson);
