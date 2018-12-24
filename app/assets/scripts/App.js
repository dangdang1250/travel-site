//Need to install webpack 
var Person = require('./modules/Person'); //you don't need .js 

var john = new Person("John","blue");
john.greet();
var jane = new Person("Jane","green");
jane.greet();