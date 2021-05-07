$().ready(function() {
    $("#btTotal").click(function() {
        var d1 = $("#dayFrom").val();
        var d2 = $("#dayTo").val();
        d1 = new Date(d1);
        d2 = new Date(d2);
        var songay = (d2.getTime() - d1.getTime())/(3600*24*1000);
        $("#result").text("Số ngày là: " + songay);
    })
})