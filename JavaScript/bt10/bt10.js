function reverse() {
	var s = document.getElementById("txtS").value;
	arr = s.split(" "); // tách chuỗi vào mảng
	var i , kq = "";
	for(i = arr.length - 1 ; i >= 0 ; i--) //duyệt ngược mảng
		kq += arr[i].trim() + " ";
	document.getElementById("txtS").value = kq.trim();
}

function normal() {
	var s = document.getElementById("txtS").value;
	arr = s.split(" "); // tách chuỗi vào mảng
	var i , kq ="", tmp;
	for(i = 0 ; i < arr.length ; i++) // duyệt từ đầu mảng
	{
		tmp = arr[i].trim().toLowerCase(); // chuyển phần tử về chữ thường
		if(tmp != "")
		{
			//chữ hoa kí tự đầu
			tmp = tmp.substr(0,1).toUpperCase() + tmp.substr(1);
			kq += tmp + " ";
		}

	}
	document.getElementById("txtS").value = kq.trim();
}