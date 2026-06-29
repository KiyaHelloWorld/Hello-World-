
// Variables 
//Variable Initialization
let firstName = "Analene"
let lastName = "Panlipunan"
let age = "19"
let program = "Bachelor's of Science in Computer Science Major in Network and Information Technology"

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(program)

// Const and Let
const interest = 3.539;
const pi = 3.1416;

//[Data Types]

//String
let mystring = "";
let country = "United States of America"
let state = "Los Angeles, California"

console.log(state)
console.log(typeof state)

//typeof - identifies what kind of data type 

//Number
let Anum = 2;
let Bnum = 2;
console.log(Anum + Bnum)

//Boolean - True/False
let pass = true;
let fail = false;
console.log(pass)
console.log(fail)

//Null 
let student = null;
console.log(typeof student);

//Arrays 
let jerseyNumbers = [80, 4, 10, 18, 15]
console.log(jerseyNumbers);

let lasallian = {
	fullName: "Analene Panlipunan",
	age: 18,
	program: "BS Computer Science Major in Network and Information Security",
	contact: ["+63 945 724 5124"],
	address: {
		street: "Matalino St.",
		city: "Manila"
	}
}
console.log(lasallian);

// key-value pair
let rewards = {
	grade7: "with honors",
	grade8: "with high honors",
	grade9: "with high honors",
	grade10: "with high tuition",
}
console.log(rewards)
console.log(typeof rewards)

// Arithmetic ops (math)
let x = 67
let y = 57
let sum = x + y;
console.log("Total sum: " + sum)

//difference - (-)
//product - (*)
//quotient - (/)

//Assignment operators 
// basic - (=)

numberupdate = 5
numberupdate = numberupdate + 2;
console.log("number update: " + numberupdate)

numberupdate = numberupdate += 2;
console.log(numberupdate)

numberupdate = numberupdate -= 2;
console.log(numberupdate)

numberupdate = numberupdate *= 2;
console.log(numberupdate)

numberupdate = numberupdate /= 2;
console.log(numberupdate)

//Increment (++) - plus one 
	//pre-increment - ++n
	//post-increment - n++
//Decrement (--) - minus one 

let n = 1;
let increment = ++n
console.log("pre-increment: " + increment);
console.log("pre-increment: " + n)

increment = n++
console.log("post-increment: " + increment);
console.log("post-increment: " + n)

let decrement = --n;
console.log("pre-increment: " + increment);
console.log("pre-increment: " + n);

decrement = n--;
console.log("post-increment: " + increment);
console.log("post-increment: " + n);

//Type coercion
let a = "10"
let b = 10
let coercion = a + b; 
console.log(coercion)

//true - 1, false - 0
let coercionT = true + 1
console.log(coercionT)

let coercionF = false + 1 
console.log(coercionF)

//Strict Equality Operator (===)
//Strict Inequality Operator (!===)

// Relational Operators
// < - less than
// > - greater than
// <= - less than or equal
// >= - greater than or equal

//AND = (&&) - all should be true 
//OR = (||) - If one is true then all is true 

let SHSgraduated = true;
let enrolledCollege = false;

let reqsMetAll = SHSgraduated && enrolledCollege; 
console.log("Result to AND op: " + reqsMetAll)

let reqsSome = SHSgraduated || enrolledCollege; 
console.log("Result to AND op: " + reqsMetAll)

//not operator - !

let noResult = !enrolledCollege;
console.log("NOT operator result: " + noResult)


// FUNCTIONS 

function antokNaAko(){{
	let antok = "bonaks ka ksi"
	}
	return antokNaAko
}

console.log(antok)

