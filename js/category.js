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
                //获取2级数据
                var titleid = this.dataset["productTitleid"];
                //点击当前页,让获取的页面放到当前的列表的子也表中去,如果有就不获取,没有就获取
                var getcategoryId = this.href.split("#")[1];//打印出collapse0
                var targetContainerHtml = $("#category > .panel-group > .panel > #" + getcategoryId + " > .panel-body").html();
                //console.log(targetContainerHtml);
               //获取不到数据
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
