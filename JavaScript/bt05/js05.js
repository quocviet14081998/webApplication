function xoayChu() {
    var str1 = document.getElementById("p1").innerHTML;
    str1 = str1.substr(str1.length-1) +str1.substr(0, str1.length-1);
    document.getElementById("p1").innerHTML = str1;
    var str2 = document.getElementById("p2").innerHTML;
    str2 = str2.substr(1) +str1.substr(0,1);
    document.getElementById("p2").innerHTML = str2;
}