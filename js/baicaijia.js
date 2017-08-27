$(function () {
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getbaicaijiaproduct',
        data: {titleid: 0},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var baicaijiaTag = template("baicaijialist", data)
            $("#baicilist").html(baicaijiaTag);
        }
    })
    $.ajax({
        url: "http://127.0.0.1:3000/api/getbaicaijiatitle",
        dataType: "json",
        success: function (data) {
            //导航接口
            console.log(data);
            var baicaijianavTag = template("baicaijianav", data);
            $("#nav").html(baicaijianavTag);
            //手指触摸事件
            var startX, moveX;
            var ulWidth = $("#nav ul").width();
            var winWidth = $(window).width();

            console.log(winWidth);
            var currentX = 0
            var ulmove = $("#nav ul")[0];
            ulmove.addEventListener("touchstart", function (e) {
                startX = e.targetTouches[0].clientX;
            });
            ulmove.addEventListener("touchmove", function (e) {
                moveX = e.targetTouches[0].clientX - startX;
                currentX = currentX + moveX;
                $("#nav ul").css({transform: "translateX(" + currentX + "px)"});
                startX = e.targetTouches[0].clientX;
            });
            ulmove.addEventListener("touchend", function () {
                    var offsetX = $("#nav ul").offset().left;
                    console.log(offsetX);
                    console.log(ulWidth - winWidth + 100);
                    if (offsetX >= 50) {
                        currentX = 0;
                        $("#nav ul").css({transform: "translateX(" + currentX + "px)"});
                    } else if (offsetX <= -(ulWidth - winWidth)) {
                        currentX = winWidth - ulWidth;
                        $("#nav ul").css({transform: "translateX(" + currentX + "px)"})
                    }
                }
            );

            //点击事件时再获取页面接口,不需要页面跳转
            $("#nav li:first-of-type>a").addClass("active")
            $("#nav li a").click(function () {
                console.log("haha");
                $("#nav li a").removeClass("active");
                $(this).addClass("active");
                var titleId = this.dataset["titleId"];
                $.ajax({
                    url: 'http://127.0.0.1:3000/api/getbaicaijiaproduct',
                    data: {titleid: titleId},
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        var baicaijiaTag = template("baicaijialist", data)
                        $("#baicilist").html(baicaijiaTag);
                    }
                })
                return false;
            })
        }
    });
})
