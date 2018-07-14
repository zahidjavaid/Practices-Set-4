// 4.3
// Write a program that prints the sum of two numbers input by the user.

// Use twoinput elements with type="number" and a button with the onclick attribute


function clickSum(){
	let sum = parseInt(document.querySelector("#sumNumb1").value);
	let sum1 = parseInt(document.querySelector("#sumNumb2").value);
	console.log(sum + sum1);

}