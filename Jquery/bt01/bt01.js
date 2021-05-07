$().ready(function (e) {
    $("#btInsert").click(function () {
        var str = '<li>' + $("#txtInput").val() + '</li>';
        $("#header ul").append(str);
        $("txtInput").val("");
    })
});