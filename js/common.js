$(function () {

    //头部logo的切换
    var headerElement = $("#header");
    //console.log(headerElement);
    if (headerElement.length >= 1) {
        var headerTag ='';
        var className = headerElement.attr("class");
        var titleName = $("title").text();
        if(className&&className=="back"){
            headerTag +='<a href="javascript:history.back()" class="back">';
            headerTag +=' <img src="./images/back.png"/>';
            headerTag +='</a>';
            headerTag +=' <span class="title">'+titleName+'</span>';
            headerTag +='<a href="#" class="app">';
            headerTag +=' <img src="./images/header_app.png"/>';
            headerTag +='</a>';
            $("#header").append(headerTag);
        }else{
            headerTag +='<a href="#" class="logo">';
            headerTag +='    <img src="./images/header_logo.png" alt="下载失败"/>';
            headerTag +='</a>';
            headerTag +='<a href="#" class="app">';
            headerTag +='    <img src="./images/header_app.png" alt="下载失败"/>';
            headerTag +='</a>';
            $("#header").append(headerTag);
        }
    }

     //搜索框部分
    var searchTag = '';
    searchTag += '<form action="">';
    searchTag += '   <input type="search" placeholder="请输入你想比价的商品" required/>';
    searchTag += '   <input type="submit" value="搜索"/>';
    searchTag += '</form>';
    $("#search").append(searchTag);

    //底部部分
    var footerTag = '';
    footerTag += '<div class="row">';
    footerTag += '  <div class="col-xs-4">';
    footerTag += '      <a href="#">登录</a>';
    footerTag += '  </div>';
    footerTag += '  <div class="col-xs-4">';
    footerTag += '      <a href="#">注册</a>';
    footerTag += '  </div>';
    footerTag += '  <div class="col-xs-4">';
    footerTag += '      <a href="#">返回顶部 </a>';
    footerTag += '  </div>';
    footerTag += '</div>';
    footerTag += '<div class="footer-info">';
    footerTag += '  <span class="app-download">手机app下载</span>';
    footerTag += '  <span class="mobile">慢慢买手机版-掌上比价平台</span>';
    footerTag += '  <div class="website">m.manmanbuy.com</div>';
    footerTag += ' </div>';
    $("#footer").append(footerTag);

    function goTop() {
        var duration = 200;
        $("body").animate({scrollTop: 0}, duration);
    }

    goTop();
})
function gethttpFormid(key) {
    //如何获取categoryid的值;pageid的值
    //获取categoryid的值 等于上一页网页来源里的category=1,2,3,先获取当前
    //从http中截取字符串转化为对象
    var listFromId = window.location.href.split("?");
    //console.log(listFromId);//得到数组["xxx","categoryid=1"]
    //将数组中的第二项取出来
    var listFromArry = listFromId[1].split("&");
    //console.log(listFromArry);//是字符串格式,要将字符串再转换成数组.用split返回数组
    var listFromstr = listFromArry.toString().split("=");
    //console.log(listFromstr);
    var obj = {};
    listFromstr.forEach(function () {
        var objKey = listFromstr[0];
        var objvalue = listFromstr[1];
        obj[objKey] = objvalue;

    })
    return obj[key];
}
var commentUrl = "http://127.0.0.1:3000";


























