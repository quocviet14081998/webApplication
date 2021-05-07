$(document).ready(function(e) {
	$(".myframe").mouseover(function() {
		$(".myframe").animate({
			width	: "+=200px",
			height 	: "+=200"
		});
	});
	$(".myframe").mouseout(function() {
		$(".myframe").animate({
			width 	: "-=200px",
			height 	: "-=200"
		});
	});
});