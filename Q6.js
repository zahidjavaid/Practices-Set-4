// 4.6
// Write a program that asks user for their marks in Math, English and Computer Skills, and tells them whether they have Passed the TechKaro admission Test or not.

// To pass the TechKaro admission test, you need:

// more than 20 marks in Math

// more than 10 marks in English

// more than 50 marks in Computer Skills



let mathMark = 20;
let englishMark = 10;
let comSkillMark = 50;

function clickTest(){
	let mthMark = parseInt(document.querySelector("#math").value);
	let engMark = parseInt(document.querySelector("#english").value);
	let comMark = parseInt(document.querySelector("#comSkill").value);

	if(mthMark > mathMark && engMark > englishMark && comMark > comSkillMark){
		console.log("Passed TechKaro Admission");
	}	else {
		console.log("Butter Luck next year");
	}
}

// if(mathMark>20 && englishMark>10 && comSkillMark>50){
// 	console.log("Passed TechKaro Admission");
// } else {
// 	console.log("Butter Luck next year");
//}

