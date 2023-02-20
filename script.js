//your code here

var btn = document.getElementById("btn");
var numPtag = document.getElementById("num");
var res = document.getElementById("respond");
var inputValue = document.getElementById("guess").value;

function randomNumberGenerator() {
	randomNum = Math.floor(Math.random() * 41) - 20;
	document.getElementById("num").innerText = randomNum;
	guessNum();
	print();
}

function guessNum() {
	input = Number(document.getElementById("guess").value);
}

function print() {
	if(Math.abs(randomNum - input) <= 5){
		document.getElementById("respond").innerText = "Hot";
	}
	else{
		document.getElementById("respond").innerText = "Cold";
	}
}

btn.addEventListener("click",randomNumberGenerator);

