$(function(){
    $.ajax({
        url: "http://127.0.0.1:3000/api/getcouponproduct",
        dataType:"json",
        data:{couponid:0},
        success:function(data){
            console.log(data);
            var couponTag = template("couponpro",data);
            $("#couponproduct").html(couponTag);
        }
    })
})
