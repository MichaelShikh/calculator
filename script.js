
var screen = document.getElementById('screen');

function backspace(){
	var len = screen.value.length - 1;
	var newVal = screen.value.substring(0,len);
	
	if(newVal =="")
		newVal = "0";
	
	screen.value = newVal;
	
}

function clearScreen(){
	screen.value ="0";
}

function addToScreen(ch){
	if(screen.value == "0")
		screen.value = "";
	screen.value += ch;
}

function equal(){	
	var x;
	
	try{
		x = eval(screen.value);
		screen.value = x;
	}
	catch(err){
		alert("Incorrect expression!");
		screen.value = "0";
	}
}

function negate(){
	if(screen.value != "0"){
		equal();
		var len = screen.value.length;
		if(screen.value.charAt(0) == "-"){
			screen.value = screen.value.substring(1,len);
		}
		else{
			screen.value = "-" + screen.value;
		}
	}
}

function power(){
	equal();
	screen.value = screen.value * screen.value;
}
function sqrt(){
	equal();
	screen.value = Math.sqrt(screen.value);
	if(screen.value == "NaN"){
	   alert("Cannot square root a negative value!");
	   screen.value = "0"
	}
}
function fact(){
	equal();
	var x = 1;
	if(screen.value < 0){
		alert("Factorial isn't defined for negative values!");
		screen.value = "0";
	}
	else if(screen.value == 0 || screen.value == 1)
		screen.value = 1;
	
	else{
	  for(var i = 1 ; i <= screen.value ; i++)
		  x = x * i;
	  screen.value = x;
	}
}
function reciproc(){
	equal();
	screen.value = 1 / screen.value; 
}








