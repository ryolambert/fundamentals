/*
 * Conditionals, Functions, Scope, and Loops.
 */

// Equals
let equals = 1 === 1;

//Greater than
let greaterThan = 5 > 1;

/// Less than
let lessThan = 2 < 10;

// Greater than or equal to
let greaterThanEq = 5>= 5;

// Less than or equal to
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;



//Functions are a means of encapsulation for code reusability, readability, and assigning "function"-ality.
//Two components @param and code to execute
function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	}
	else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	}
//Runs when all previous instances of conditional return false
	else {
		console.log("Their prices are equal.")
	}
}

compareStorePrices(10, 5);
//Functions generally should be no longer than 20 lines of code and do 1 task
function squareNum(number) {
	let squared = number * number;
	return squared;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);
/*
Scope-
	The idea that certain values or variables are only accessible within certain areas of your code
 */
/*
Javascript Scope Levels- 3 Types
1- Global
2- Functional
3- Block
 */
let x = 10;
//Ex of global scope
function addNumbers (n,m,x) {
	console.log(x);
	let b;
	//Ex of functional & lexical cascading scope
	if (1===1) {
		b = 8;
		//Ex of block scope
	}
	console.log(b);
	return n + m;
}

addNumbers(1, 2, 10);

/*
Arrays-
	Indexes refer to positions within array, start at 0, [1, 2, 3, 4, 5
 */
//					 0, 1, 2, 3, 4
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']]
// console.log(ourArray[4] [0]);
//Equivalent to
let newArr = ourArray[4];
//console.log(newArr[0]);
console.log(newArr);
/*
let myArray = [1, 2, 3, 4, 5, 6, 7];

for(let i = 0; i<myArray.length; i++) {
	console.log("i is equal to: " + i);
//	console.log(myArray[i]);
}
*/

//This variant might be computationally faster as the loop won't have to refer back to function .length
let myArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = myArray.length;
for(let i = 0; i<arrLen; i++) {
//	console.log("i is equal to: " + i);
	console.log(myArray[i]);
	for (let j = 0; j<10; j++) {
		console.log('j is equal to: ' + j);
	}

}

/*
Loops-
	while (true/false), @param boolean or value, runs until condition is met
 */
/*
//Runs indefinitely
while (true) {
	console.log('Ran');
}
*/

let v = 0;
while (v < 10) {
	console.log('Ran');
	v = v + 1;
}