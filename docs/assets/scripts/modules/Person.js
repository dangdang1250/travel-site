/* reusable blue print construcure function*/
class Person {
	constructor(fullName, favColor)
	{
		this.name = fullName;
		this.favColor = favColor;
	}
	
	greet(){
		console.log("Hi, my name is " + this.name +" and my faverite color is " + this.favColor +"!" );
	}
}

export default Person;
//module.exports = Person;