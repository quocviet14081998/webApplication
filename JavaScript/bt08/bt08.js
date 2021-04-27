function taoMang() {
	var i ;
	var n = parseInt(document.getElementById("pt").value);
	arr = new Array(n);
	for(i = 0 ; i < n ; i++)
		arr[i] = Math.floor(Math.random()*100)%50;
	document.getElementById("txtArr1").value = arr.join(" ");
}

function mangTang() {
	arr.sort(function(a,b){return a - b});
	document.getElementById("txtArr2").value = arr.join(" ");
}

function mangGiam() {
	arr.sort(function(a,b){return b - a});
	document.getElementById("txtArr3").value = arr.join(" ");
}