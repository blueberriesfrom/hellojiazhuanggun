$(function(){
    var brandtitleid = 0;
       var titlestr = $("title").text();
     $("#nav .active").text(titlestr);
    //引入十大品牌数据
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbrandtitle",
        dataType:"json",
        success:function(data){
            console.log(data);
            var getbrandtitleTag = template("getbrandTitle",data);
            $(".titlelist").html(getbrandtitleTag);
            //获取品牌下面的子品牌 ,点击当前导航,获取数据,让详细链接放到当前的盒子中去
            $(".titlelisttop").each(function(){
                $(this).click(function(){
                    brandtitleid = this.dataset["brandtitleId"];
                    console.log(brandtitleid);
                    $.ajax({
                        url:"http://127.0.0.1:3000/api/getbrand",
                        dataType:"json",
                        data:{brandtitleid:brandtitleid},
                        success:function(data){
                            console.log(data);
                            var tentitleTag = template("tentitle",data);
                            $(".titlelistbody").html(tentitleTag)
                        }
                    })
                })
            })


        }
    })

})
