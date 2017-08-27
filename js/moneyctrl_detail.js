$(function(){
    var productId = gethttpFormid("productid");
    console.log(productId);
    $.ajax({
        url:"http://127.0.0.1:3000/api/getmoneyctrlproduct",
        dataType:"json",
        data:{productid:productId},
        success:function(data){
            console.log(data);

            var introceProductTag = template("introceProduct",data);
            $("#savemonylist .savemony").html(introceProductTag)

            var savemoneycommentTag = template("savemoneycomment",data);
            $("#moneycomment").html(savemoneycommentTag)
        }
    });
})