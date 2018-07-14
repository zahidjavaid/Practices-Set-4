let numb1;
let numb2;
function passValue(){
	numb1 = parseInt(document.querySelector("#calNum1").value);
	numb2 = parseInt(document.querySelector("#calNum2").value);
}

function printSum(){
	passValue();
	console.log(numb1 + numb2);
}
function printDiff(){
	passValue();
	console.log(numb1 - numb2);
}
function printMul(){
	passValue();
	console.log(numb1 * numb2);
}

function printDiv(){
	passValue();
	console.log(numb1 / numb2);
}

function printRemainder(){
	passValue();
	console.log(numb1 % numb2);
}