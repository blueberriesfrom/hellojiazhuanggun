$(function () {
    var categoryId = gethttpFormid("categoryid");
    var pageId = 1;
    getProductList(categoryId,pageId);
    function getProductList(categoryid,pageid) {
        $.ajax({
            type: "get",
            data: {categoryid:categoryid,pageid:pageid},
            url: "http://127.0.0.1:3000/api/getproductlist",
            dataType:"json",
            success: function (data){
                console.log(data);
                var html = template("tmp_product_list", data);
                $("#catergory-product .recommend-list").html(html);
                var totlePages = Math.ceil(data.totalCount/data.pagesize);
                var optionTag = "";
                for(var i = 0;i<totlePages;i++){
                    if((i+1)==pageId) {
                        optionTag += '<option value='+(i+1)+' selected>'+(i+1)+ '/'+ totlePages + '</option>';
                    } else {
                        optionTag += '<option value='+(i+1)+'>'+(i+1)+ '/'+ totlePages + '</option>';
                    }
                }
                $("#catergory-product .page-list select").html(optionTag);
                $("#catergory-product .page-prev").unbind("click").bind("click",function(){
                    if(pageId <= 1){
                        console.log("已经是第一页");
                    }else{
                        pageId--;
                        getProductList(categoryId,pageId);
                    }
                    return false;
                });
                $("#catergory-product .page-next").unbind("click").bind("click",function(){
                    if(pageId>=totlePages){
                        console.log("已经是最后一夜");
                    }else{
                        pageId++;
                        getProductList(categoryId,pageId);
                    }
                    return false;
                });
                $("#catergory-product .page-list select").unbind("change").bind("change",function(){
                    //  select  --  value()
                    pageId = $(this).val();
                    getProductList(categoryId,pageId);
                })
            }
        })
    }


})