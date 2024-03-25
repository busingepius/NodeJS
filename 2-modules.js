// modules
// const names = require("./4-names");
const {john, peter} = require("./4-names");
const sayHi = require("./5-utils")
const data = require("./6-alternative");
sayHi("Pius");
// sayHi(names.peter)
// sayHi(names.john)
sayHi(peter)
sayHi(john)
console.log(data);
