//your code here

var btn = document.getElementById("btn");
var pnum = document.getElementById("num");
var res = document.getElementById("respond");
var inputValue = document.getElementById("guess").value;

function actionPerformed() {
	var nums = Math.floor(Math.random() * 40) - 20;
	document.getElementById("num").innerText = nums;
	guessNum();
	print();
}

function print() {

	if(Math.abs(nums - input) <= 5){
		document.getElementById("respond").innerText = "Hot"; 
	}
	else{
		document.getElementById("respond").innerText = "Cold"; 
	}
	
}

function guessNum(){
	input = Number(document.getElementById("guess").value);
}

btn.addEventListener("click",actionPerformed);

