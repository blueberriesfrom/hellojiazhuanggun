$(function () {
    var curentPage = 1;
    getmoneyctrlList(curentPage);
    function getmoneyctrlList(hahah) {
        $.ajax({
            type: "get",
            data: {pageid: hahah},
            dataType: "json",
            url: "http://127.0.0.1:3000/api/getmoneyctrl",
            success: function (data) {
                console.log(data);
                var html = template("tmp_moneyctrl_list", data);
                $("#moneyctrl-list .recommend-list").html(html);
                var totlepage = Math.ceil(data.totalCount / data.pagesize);
                var optionTag = "";
                for (var i = 0; i < totlepage; i++) {
                    if ((i + 1) == curentPage) {
                        optionTag += '<option value=' + (i + 1) + ' selected>' + (i + 1) + '/' + totlepage + '</option>';
                    } else {
                        optionTag += '<option value=' + (i + 1) + '>' + (i + 1) + '/' + totlepage + '</option>';
                    }
                    $("#moneyctrl-list select").html(optionTag);
                }
                console.log(totlepage);

                $("#moneyctrl-list .page-prev").unbind("click").bind("click", function () {
                    if (curentPage <= 1) {
                        console.log("已经是第一页了");
                    } else {
                        curentPage--;
                        getmoneyctrlList(curentPage);
                        return false;
                    }
                });
                $("#moneyctrl-list .page-next").unbind("click").bind("click", function () {
                    if (curentPage >= totlepage) {
                        console.log("已经是最后一页了");
                    } else {
                        curentPage++;
                        getmoneyctrlList(curentPage);
                        return false;
                    }
                });

                $("#moneyctrl-list select").unbind("change").bind("change", function () {
                    curentPage = $(this).val();
                    getmoneyctrlList(curentPage);
                });

            }
        })
    }

})