$(function(){
    $.ajax({
        type:"get",
        dataType:"json",
        url:"http://127.0.0.1:3000/api/getindexmenu",
        success:function(data){
            console.log(data);
            var html = template("tmp-menu",data);
            $("#menu>.row").html(html);
            //�˵�������Ϻ�ſ��Խ����¼��Ĳ���
            $("#menu>.row>.col-xs-3:nth-last-of-type(-n+4)").css({height:"0"});
            //�������,������Ĳ˵�����������ʾ,�ٵ��������������
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



    //�����̨�ӿ�


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


    //�ص�����
   

})