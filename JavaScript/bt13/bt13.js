function defaultStyle() {
	document.styleSheets[0].disabled = true; //vô hiệu hóa style
	document.styleSheets[1].disabled = true;
}
function changeStyle() {
	document.styleSheets[0].disabled = false; //vô hiệu hóa style
	document.styleSheets[1].disabled = false; // áp dụng style
}