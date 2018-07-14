// 4.5
// Write a program that asks user for their marks in HSC exam and tells them their percentage.

// Assume the maximum marks in HSC to be 1050.

let totalMarks = 1050;

function clickPer(){
	let percentage = parseInt(document.querySelector("#obtain").value);
	console.log((percentage*100)/totalMarks);
}
