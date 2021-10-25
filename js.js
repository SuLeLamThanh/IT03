$(document).ready(function(){
    $("nav ul.tab a").click(function(){
        var h=$(this).attr("href")
        $("html, body").animate({
            scrollTop: $(h).prop("offsetTop")+"px"
        },1000)
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() >=100)
            $("nav").css({
                "position":"fixed",
                "left":0,
                "right":0,
                "top":0,
                "z-index":9999,
                "opacity":0.7
            })
        else  
            $("nav").css({
                "position":"relative",
                "opacity":1
            })
    })
    $("#search").click(function(){
        var k=$("#kw").val()
        $(`div.item h1:contains(${k})`).parent().parent().css("outline","2px dashed red")
        setTimeout(function(){
            $("div.item").css("outline","none")
        },2000)
    })               
})