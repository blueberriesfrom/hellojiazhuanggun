$(function () {
    $.ajax({
        type: 'get',
        dataType: "json",
        url: "http://127.0.0.1:3000/api/getcategorytitle",
        success: function (data) {
            //console.log(data);
            var html = template("catergory-list", data);
            $("#category").html(html);
            $("#category .panel-group .panel-heading .panel-title a ").click(function () {
                //��ȡ2������
                var titleid = this.dataset["productTitleid"];
                //�����ǰҳ,�û�ȡ��ҳ��ŵ���ǰ���б����Ҳ����ȥ,����оͲ���ȡ,û�оͻ�ȡ
                var getcategoryId = this.href.split("#")[1];//��ӡ��collapse0
                var targetContainerHtml = $("#category > .panel-group > .panel > #" + getcategoryId + " > .panel-body").html();
                //console.log(targetContainerHtml);
               //��ȡ��������
                //console.log(getcategoryId);
                //console.log(titleid);
                if(targetContainerHtml == "") {
                    $.ajax({
                        url:"http://127.0.0.1:3000/api/getcategory",
                        dataType:"json",
                        data:{titleid:titleid},
                        success:function(data){
                            console.log(data);
                            var childHtml = template("catergory-list-product", data);
                            //console.log(childHtml);
                            $("#category > .panel-group > .panel > #" + getcategoryId + " > .panel-body").html(childHtml);
                        }
                    });
                }
        });
}
})




})
