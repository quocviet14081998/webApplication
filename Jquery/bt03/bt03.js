$(document).ready(function(){
    $("#change").click(function(){
        $("tr:odd").addClass("newBrgd");
    });
    $("#normal").click(function(){
        $("tr:odd").removeClass("newBrgd");
    });
})