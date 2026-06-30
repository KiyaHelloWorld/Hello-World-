console.log("Earl");

let num = 90;

if (num >= 85 || num >= 90){
	console.log("With Honors!");
}
else if(num >= 91 || num >= 95){
	console.log("With High Honors");
}
else if(num >= 96 || num >= 100){
	console.log("With Highest Honors");
}
else{
	console.log("No Award");
}

let earl = "no food"

function earlEatFood(food){

	if(food === 20){
		return "earl very happy"
	}
	else if (food === 15){
		return "earl happy"
	}
	else if (food === 10){
		return "earl sad"
	}
	else if (food === 5){
		return "earl very sad"
	}
	else{
		return "earl angry"
	}
}

earlEat = earlEatFood(0);
console.log(earlEat)

if (earlEat == "earl very angry"){
	console.warn("Oh no! "+ earlEat)
}


function isTired(){
	name = "Analene Panlipunan"
	return "Antok na siya. "
}

function isNotTired(){
	name = "Bogart Smith"
	return "Hindi siya antok. "
}

let state = 3;

let sleep = (state >= 5)? isTired(): isNotTired();
console.log("Result: " + sleep + "sino? "+ "Si " + name)

//TRY CATCH FINALLY - IMPORTANT
function earlEatFood(food){
	try{
		alert(earlEatFood(food))
	}
	catch(error){
		alert("Functionality Error! NYEEEK!!");
	}
	finally{
		alert("BEH ANO NA HAHAHAAHHAAHHAHHA")
	}
}