//Need to install webpack 

// import jquery package

var $ = require('jquery');
var Person = require('./modules/Person'); //you don't need .js 

//alert("It is refresh by it self now.");
var john = new Person("John","blue");
john.greet();
var jane = new Person("Jane","green");
jane.greet();

//$("h1").remove();