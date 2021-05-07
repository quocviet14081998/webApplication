$(document).ready(function() {
	var speed = 200;
	$("ul.panels li:last-child").addClass('last');
	//khi con trỏ chuột nằm trên các <li>
	$("ul.panels li").hover(function() {
		//<li> nhận được con trỏ nên ---> zoom to
		$(this).stop().animate({
			width : "360px",
			heigh : "150px" 
		}, speed)
		//các <li> không được trỏ sẽ zoom nhỏ
		.siblings('li').stop().animate({
			width : "135px",
			fontSize : "50px" 
		}, speed);
	}, 
	function() {
		//con trỏ chuột rời khỏi <li> ---> quay lại kích thước cũ
		$(this).stop().animate({
			width : "180px",
			fontSize : "100px" 
		}, speed)
		//các <li> khác trở lại kích thước ban đầu
		.siblings('li').stop().animate({
			width : "180px",
			fontSize : "100px" 
		}, speed);
	});
});