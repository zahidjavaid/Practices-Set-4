// 4.1
// Write a program that prints the square of the number input by the user.

// Use an input element with type="number" and a button with the onclick attribute



function clickSquare(){
	let square = parseInt(document.querySelector("#square").value);
	console.log(square * square);
}