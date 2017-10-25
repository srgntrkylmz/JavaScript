
function run1(){
	
	document.frm.result.value += "1";
}

function run2(){
	
	document.frm.result.value += "2";
}

function run3(){
	
	document.frm.result.value += "3";
}
function runplus(){
	
	document.frm.result.value += "+";
}

function evalu(){
	
	var evalo = eval(document.frm.result.value)
	
	document.frm.result.value = evalo;
}