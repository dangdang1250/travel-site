/* reusable blue print construcure function*/
function Person(fullName,favColor) {
	this.name = fullName;
	this.favColor = favColor;
	this.greet = function(){
		console.log("Hello, my name is " + this.name +" and my faverite color is " + this.favColor +"!" );
	}
}

var john = new Person("John","blue");
john.greet();
var jane = new Person("Jane","green");
jane.greet();