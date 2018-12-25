//Need to install webpack 

// import jquery package

var $ = require('jquery');
//var Person = require('./modules/Person'); //you don't need .js 
//use es6 way
import Person from './modules/Person';

class Adult extends Person {
	payTaxes(){
		console.log(this.name + " now owes $0 in taxes.");
	}

}

//alert("It is refresh by it self now.");
var john = new Person("John","blue");
john.greet();
var jane = new Adult("Jane","orange");
jane.greet();
jane.payTaxes();

//$("h1").remove();