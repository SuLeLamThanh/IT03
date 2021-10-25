$(document).ready(function(){
    $("div.items >  div.item:nth-child(even)").addClass("wow animate__slideInLeft")
    $("div.items >  div.item:nth-child(odd)").addClass("wow animate__slideInRight")
    $("div.figures > figure").addClass("wow animate__flipInX")
    $("div.figures > figure").addClass("    c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right")
    $("div.figures > figure>figcaption").addClass("c4-layout-bottom-left")
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
    $("#btadd").click(function(){
        var content =$("#noidung").val()
        var date= $("#ngay").val()
        $("div.items").prepend(`
            <div class="item active">
                <div class="col5"><img src="lab2/calendar2.png"></div>
                <div class="col70"><a href="#">${content}</a></div>
                <div class="col15"><p>${date}</p></div>
                <div class="col10"><input type="button" value="Xoa"></div>
            </div>`)
        
        setTimeout(function(){
            $("div.item").removeClass("active")
        },2000)
    })

  $("div.items").on("click","div.item input[type=button]",function(){
      
    if (confirm("Ban co chac chan xoa khong")==true)
    $(this).parent().parent().remove()

  })
})