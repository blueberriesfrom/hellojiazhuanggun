$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getinlanddiscount",
        dataType:"json",
        success:function(data){
            console.log(data);
            var discountTag = template("discountintroduct",data);
            $("#inlanddiscount").html(discountTag);

            //当滑到页面底部的时候,图片隐藏
            var docHeight = $(document).height();
            console.log(docHeight);
            var winHeight = $(window).height();
            console.log(winHeight);
            var footerHeight = $("#footer").height();
            console.log(footerHeight);

            $(window).on("scroll",function(){
                var scrollHeight = $(window).scrollTop();
               if(scrollHeight >= docHeight-winHeight-footerHeight){
                    $("#holdon .holdon-img img").css({display:"none"});
               }
            })

        }
    });
})
