function DangKy() {
    var ten = document.forms.reg["txtTen"].value;
    var mk = document.forms.reg["txtPass"].value;
    var ns = document.forms.reg["txtNgaysinh"].value;
    var gt = document.forms.reg["gt"].value;
    var qt = document.forms.reg["qt"].value;
    document.forms.reg["thongtin"].value =
    "Chào mừng " + ten +
    "\nBạn là " + gt + 
    "\nMật khẩu của bạn có " + mk.length + "kí tự" + 
    "\nBạn sinh ngày " + ns + 
    "\nVấn đề bạn quan tâm là: " + qt ;
    return false; 
}