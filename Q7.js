let speedLimit = 60;
let normalSpeed = 50;

function checkSpeed(){
	let speed = parseInt(document.querySelector("#speed").value);
	if(speed > speedLimit){
	console.log("Over Speeding");
} else {
	console.log("Normal Speed carry on");
	}
}


// if(normalSpeed > speedLimit){
// 	console.log("Over Speeding");
// } else {
// 	console.log("Normal carry on");
// }