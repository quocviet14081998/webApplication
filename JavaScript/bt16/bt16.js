function draw() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d"); 

	//hình chữ nhật
	ctx.fillStyle = "rgb (0,255,255)"; //tô màu
	ctx.fillRect(0,0,400,400);//hàm tô màu

	//hình tròn
	ctx.beginPath();
	ctx.arc(200,200,200,0,2*Math.PI);	
	var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
	grd.addColorStop(0,"red");
	grd.addColorStop(0.5,"white");
	grd.addColorStop(1,"red");
	ctx.fillStyle= grd;
	ctx.fill();
	ctx.stroke();

	//polygon
	ctx.beginPath();
	ctx.moveTo(200, 0);
	ctx.lineTo(400, 200);
	ctx.lineTo(200, 400);
	ctx.lineTo(0, 200);
	ctx.lineTo(200, 0);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.strokeStyle = "red";
	ctx.lineWidth = 3;
	ctx.stroke();
	ctx.font = " 80px Time news roman";
	ctx.lineWidth = 5 ;
	ctx.strokeStyle = "blue";
	ctx.strokeText("HTML5", canvas.width/5 , canvas.height/2+20);
}