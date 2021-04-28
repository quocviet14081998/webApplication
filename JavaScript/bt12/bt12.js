function changeColor() {
	var bkcolor = document.getElementById("bkcolor").value;
	var textcolor = document.getElementById("textcolor").value;
	document.getElementById("title").innerHTML = document.getElementById("txtInput").value;
	document.getElementById("divText").style.backgroundColor = bkcolor;
	document.getElementById("divText").style.color = textcolor;
}