const { john, peter } = require("./firstModule");

const sayHi = require("./utils");

const data = require("./alternative");

require("./mind-grenade"); //the code will run even though we didn't assign it to a variable.

sayHi("susan");
sayHi(john);
sayHi(peter);
