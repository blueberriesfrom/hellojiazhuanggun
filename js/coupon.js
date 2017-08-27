$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/getcoupon",
        dataType:"json",
        success:function(data){
            console.log(data);
            var couponlistTap = template("couponList",data);
            $("#coponlist").html(couponlistTap);
        }

    });
})