$(document).ready(function(){
    $("div").click(function(){
        var color = $(this).css("background-color");
        var name;
        switch (color)
        {
            case "rgb(255, 0, 0)":
                name = "Đỏ ";
                break;
            case "rgb(0, 0, 255)":
                name = " Xanh dương ";
                break;
            case "rgb(0, 255, 0)":
                name = " Xanh lá ";
                break;
            case "rgb(255, 0, 255)":
                name = " Tím ";
                break;
        }
        $("#result").html("Màu bạn chọn là màu " + name + ": " + color);
        $("#result").css({'color' : color, 'font-weight' : 'bold'});
    });
});