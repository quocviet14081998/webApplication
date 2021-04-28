function replace() {
	var s = document.getElementById("txtS").value;
	var s1 = document.getElementById("txtS1").value;
	var s2 = document.getElementById("txtS2").value;
	var index = s.indexOf(s1); // tìm vị trí s1 trong s
	while (index >= 0) {
		s = s.replace(s1 , s2); // thay thế s1 bằng s2 trong s
		index = s.indexOf(s1); // tiếp tục tìm
	}
	document.getElementById("txtS").value = s;
}