/*
 * Objects, Interfaces, and API's
 */
/*
Objects-
	Two Key Features They Contain
	1. State (current data/information describing object)
		Ex. Dog, states (Name, Color, Breed, Size)
	2. Functionality (Action or changes object can make to itself or outside world)
		Ex. Dog, functionality (Bark, Dig, Lick)
	Note- Objects contain data and functionality that are related
 */

let dog = {
	name: "Steve",
	color: "brown",
	breed: "Pug",
	size: "Small",
	//Interface is the function's signature
	bark: function(typeOfBark) {
	//Signature is the name(i.e bark) and its @param
		console.log("Woof!");
		//Implementation is the executable code within the function
	},
};

dog.bark();

//Interface Vs. Implementation

/*
APIs- Application Programming Interface
	In computer programming, an application programming interface (API) is a set of subroutine definitions, protocols,
	and tools for building application software. In general terms, it is a set of clearly defined methods of
	communication between various software components. A good API makes it easier to develop a computer program by
	providing all the building blocks, which are then put together by the programmer.
 */

//REST API- use url instead of library call via html functions

//Passing Data by Value- Only the value of the data within the function is important, the data is essentially copied for
// 							 use inside of the function.
//Passing Data by Reference- The param being passed in only points to the original data, if data is passed to a function
//									  by reference and change it in some way the original piece of data is effected as well.
// NOTE^^^ Language Specific

function x(y) {
	y.num = y.num + 5;
	//y object passed in by reference
	console.log(y);
}

let y = {
	name: "Tom",
	num: 10,
};

x(y);
console.log(y);