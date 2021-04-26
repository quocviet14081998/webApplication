function Tinh() {
	var a = parseInt( document.forms.myform["txtSo1"].value);
	var b = parseInt( document.forms.myform["txtSo2"].value);
	var option = document.forms.myform["option"].value;
	var kq ;
	switch (option) {
		case "+" : kq = a + b ; break;
		case "-" : kq = a - b ; break;
		case "*" : kq = a * b ; break;
		case "/" :
			if( b != 0)
				kq = a / b;
			else
				kq = "Vui lòng nhập số khác 0!!";
			break; 
	}
	document.forms.myform["kq"].value = kq;
	return false;
}