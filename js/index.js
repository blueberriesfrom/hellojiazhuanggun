$(function(){
    $.ajax({
        type:"get",
        dataType:"json",
        url:"http://127.0.0.1:3000/api/getindexmenu",
        success:function(data){
            console.log(data);
            var html = template("tmp-menu",data);
            $("#menu>.row").html(html);
            //菜单加载完毕后才可以进行事件的操作
            $("#menu>.row>.col-xs-3:nth-last-of-type(-n+4)").css({height:"0"});
            //点击更多,让下面的菜单栏慢慢的显示,再点击再慢慢的隐藏
            var level_height = $("#menu>.row>.col-xs-3:first-of-type").height();

            $("#menu>.row>.col-xs-3:nth-of-type(8)").click(function(){
                //console.log("hah");
                var last_height = $("#menu>.row>.col-xs-3:last-of-type").height();
                console.log(last_height);
                console.log(level_height);
                if(last_height == 0){
                    $("#menu>.row>.col-xs-3:nth-last-of-type(-n+4)").css({height:level_height+"px"});
                }else{
                    $("#menu>.row>.col-xs-3:nth-last-of-type(-n+4)").css({height:"0px",transition_property:"height",transition_duration:"2s"});
                }
                return false;
            })

        }
    });



    //引入后台接口


    $.ajax({
        type:"get",
        dataType:"json",
        url:"http://127.0.0.1:3000/api/getmoneyctrl",
        success:function(data){
            console.log(data);
            var html = template("tmp-product",data);
            $("#recommend>.recommend-list").html(html);
        }
    })


    //回到顶部
   

})