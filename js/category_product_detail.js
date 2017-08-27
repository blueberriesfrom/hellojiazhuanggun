$(function(){
    var priductId = gethttpFormid("productId");
    var categoryid = "";
    console.log(priductId);
    $.ajax({
        url:"http://127.0.0.1:3000/api/getproduct",
        dataType:"json",
        data:{productid:priductId},
        success:function(data){
           // console.log(data);
            var productName = data.result[0].productName.substring(0,4);
            var productNameTag = '<li class="active">' + productName + '</li>';
            categoryid = data.result[0].categoryId;
            $.ajax({
                dataType:"json",
                url:"http://127.0.0.1:3000/api/getcategorybyid",
                data:{categoryid:categoryid},
                success:function(data){
                    //console.log(data);
                    var categoryNameTag = '<li><a href="category_product_list.html?categoryid='+categoryid+'">'+data.result[0].category+'</a></li>';
                    $("#nav .breadcrumb").append(categoryNameTag);
                    $("#nav .breadcrumb").append(productNameTag);
                }
            });
            //图片和详细介绍
            var productDetailTag = template("productDetai",data);
            $("#product_money_detal>.product_detal_list").html(productDetailTag);
            //比价店铺介入
            var productFromPriceTag = template("productFromPrice",data);
            $("#product_money_detal>.buy>.detail_list>.detail_list_From").html(productFromPriceTag)
            //接入评价端口
            $.ajax({
                url:"http://127.0.0.1:3000/api/getproductcom",
                data:{productid:priductId},
                dataType:"json",
                success:function(data){
                    console.log(data);
                    var commentTag =  template("comment_body_reply_content",data);
                    $("#product_money_detal>.comment>.comment_body_reply").html(commentTag)
                }
            })
        }
    });
})