$().ready(function(e) {
	$("#btnMoveUp").click(function() {
		$("#myframe").animate({
			"top" : 0
		}, 1000);
	});
	$("#btnMoveRight").click(function() {
		var left = window.innerWidth - 202;
		$("#myframe").animate({
			"left" : left
		}, 1000);
	});
	$("#btnMoveDown").click(function() {
		var top = window.innerHeight - 102;
		$("#myframe").animate({
			"top" : top
		}, 1000);
	});
	$("#btnMoveLeft").click(function() {
		$("#myframe").animate({
			"left" : 0
		}, 1000);
	});
});