function Statistic() {
	var s1 = document.getElementById("a").value;
	var arr = s1.split(" ");
	var i , words = 0;
	var arrKq = []; //mảng chứa kết quả
	for ( i = 0 ; i < arr.length ; i++)
	{
		if(arr[i].trim() != " ")
			words++;
	}
	var kq = "characters: " + s1.length + "<br>" + "Words: " + words + "<br>";
	for ( i = 0 ; i < s1.length ; i++)
	{
		if (!isNaN(arrKq[s1.charCodeAt(i)]))
			arrKq[s1.charCodeAt(i)]++;
		else 
			arrKq[s1.charCodeAt(i)] = 1;
	}
	for (i = 0 ;  i < arrKq.length ; i++)
	{
		if (!isNaN(arrKq[i]))
			kq += "Character '" + String.fromCharCode(i) + "' : " + arrKq[i] + "<br>";
	}
	document.getElementById("kq").innerHTML = kq;
}