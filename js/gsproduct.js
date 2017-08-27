$(function () {
    $.ajax({
        url: "http://127.0.0.1:3000/api/getgsshop",
        dataType: "json",
        success: function (data) {
            var innershopTag = template("innershop", data);
            $(".gslist").html(innershopTag);
            var shopNameTag = data.result[0].shopName;
            $("#shop").text(shopNameTag);
            $(".gslist a").each(function () {
                $(this).click(function () {
                    $(".gslist a").removeClass("choosed");
                    $(this).addClass("choosed");
                    $("#shop").text($(this).text());
                    $(".gslist").css({display: "none"});
                    $("#shop").removeClass("active");
                    clickedShopId = this.dataset["shopId"];
                    console.log(clickedShopId);
                    getProductList();
                    return false;
                })
            })
            $(".gslist li:first-of-type a").addClass("choosed");
            $("#shop").click(function () {
                $("#shop").toggleClass("active");
                var shopClassname = $("#shop").attr("class");
                Toggledisplay($(".gslist"), shopClassname);
                $("#area").removeClass("active");
                $(".gslist-two").css({display: "none"});
            });
            $.ajax({
                url: "http://127.0.0.1:3000/api/getgsshoparea",
                dataType: "json",
                success: function (data) {
                    var innerareaTag = template("innerarea", data);
                    $(".gslist-two").html(innerareaTag);
                    var areaNameTag = data.result[0].areaName;
                    $("#area").text(areaNameTag);
                    $(".gslist-two a").each(function () {
                        $(this).click(function () {
                            $(".gslist-two a").removeClass("choosed");
                            $(this).addClass("choosed");
                            $("#area").text($(this).text());
                            $(".gslist-two").css({display: "none"});
                            $("#area").removeClass("active");
                            clickedAreaId = this.dataset["areaId"];
                            getProductList();
                            return false;
                        })
                    })
                    $(".gslist-two li:first-of-type a").addClass("choosed");
                    $("#area").click(function () {
                        $("#area").toggleClass("active");
                        var areaClassname = $("#area").attr("class");
                        Toggledisplay($(".gslist-two"), areaClassname);
                        $("#shop").removeClass("active");
                        $(".gslist").css({display: "none"});
                    });
                    getProductList();
                }
            })
        }
    })

    var clickedShopId = 0;
    var clickedAreaId = 0;
    function getProductList() {
        $.ajax({
            url: "http://127.0.0.1:3000/api/getgsproduct",
            dataType: "json",
            data: {shopid: clickedShopId, areaid: clickedAreaId},
            success: function (data) {
                var gsprolistTag = template("gsprolistcontent", data);
                $(".gsprolist").html(gsprolistTag);
            }
        })
    }

    function Toggledisplay(obj, isClassname) {
        if (isClassname == "active") {
            obj.css({display: "block"});
        } else {
            obj.css({display: "none"});
        }
    }
})









