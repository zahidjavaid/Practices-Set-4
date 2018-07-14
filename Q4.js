// 4.4
// Create a fruit-cost calculator. It should ask the user for the number of Apples,
// Bananas and Mangoes and prints the total cost of buying these. 
//The cost per fruit is given in the table below:

// Fruit

// Cost per item

// Apple // Rs. 10

// Banana // Rs. 15

// Mango // Rs. 8

// Use three input elements withtype="number" and a buttonwith onclick attribute


let costOfApple = 10;
let costOfBanana = 15;
let costOfMango = 8;

function clickAdd(){
	let apple = parseInt(document.querySelector("#apple").value);
	let banana = parseInt(document.querySelector("#banana").value);
	let mango = parseInt(document.querySelector("#mango").value);
	console.log(costOfApple*apple);
	console.log(costOfBanana*banana);
	console.log(costOfMango*mango);
	console.log(costOfApple*apple + costOfBanana*banana + costOfMango*mango);
}