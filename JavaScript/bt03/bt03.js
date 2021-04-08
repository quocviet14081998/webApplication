// JavaScript Document
function Giai() {
		var a = parseInt(document.getElementById("soA").value);
		var b = parseInt(document.getElementById("soB").value);
		var c = parseInt(document.getElementById("soC").value);
		var kq;
		if ( a == 0) 
		{
			if ( b == 0)
			{
				if ( c == 0)
					kq = "phương trình vô số nghiệm ";
				else
					kq = " phương trình vô nghiệm ";
			}
			else
				kq = (-c/b).toFixed(2);
		}
		else 
		{
			var delta = b*b - 4 *a * c ;
			if ( delta < 0 )
				kq = "Phương trình vô nghiệm";
				
			else if ( delta == 0 )
				kq = "Phương trình có nghiệm kép x =" + (-b/2*a*c).toFixed(2);
			else
			{
				var x1 = ( -b + Math.sqrt(delta) / 2 * a);
				var x2 = ( -b + Math.sqrt(delta) / 2 * a);
				kq = "Phương trình có 2 nghiệm phân biệt: <br> x1 = " + x1.toFixed(2) + "<br> x2= " + x2.toFixed(2);
			}
		}
		document.getElementById("ketqua").innerHTML = kq;
	}
	
	function Xoa() {
		document.getElementById("soA").value ="";
		document.getElementById("soB").value ="";
		document.getElementById("soC").value ="";
		document.getElementById("ketqua").innerHTML ="";
	}