



function manipulateTree() {
	var newText = document.getElementById("textfield").value;

	document.getElementById("exchange").innerHTML = newText;
}

function addText(){
var newText = document.getElementById("textfield").value;
var node = document.createElement("h5");
var textNode = document.createTextNode(newText);
node.appendChild(textNode);
document.getElementById("exchange").appendChild(node);

alert("Funktioniert!");
}


