$(function(){
    var brandtitleid = 0;
       var titlestr = $("title").text();
     $("#nav .active").text(titlestr);
    //����ʮ��Ʒ������
    $.ajax({
        url:"http://127.0.0.1:3000/api/getbrandtitle",
        dataType:"json",
        success:function(data){
            console.log(data);
            var getbrandtitleTag = template("getbrandTitle",data);
            $(".titlelist").html(getbrandtitleTag);
            //��ȡƷ���������Ʒ�� ,�����ǰ����,��ȡ����,����ϸ���ӷŵ���ǰ�ĺ�����ȥ
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
