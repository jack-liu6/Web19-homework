//失焦事件
var sousuo = document.getElementsByClassName("sousuo-1")[0]
sousuo.onfocus = function (params) {
    sousuo.value = ""
}
// 轮播图
function lunbotu(params) {
    var lunbo = document.getElementsByClassName("lunbo")[0]
    // 获取图片
    var ol = lunbo.children;
    // 获取按钮
    var anniu = document.getElementsByClassName("bghuise")
    // 获取指示器
    var zhishiqi = document.getElementsByClassName("zhishiqi-1")
    var index = 0
    for (var i = 0; i < ol.length; i++) {
        //    按钮绑定事件向前
        anniu[1].onclick = function name(params) {
            for (var o = 0; o < ol.length; o++) {
                ol[o].style.display = "none"//循环隐藏所有图片
                zhishiqi[o].style.backgroundColor = "#fff"
            }
            index++//计数器
            //设置边界
            if (index > 3) {
                index = 0
            }
            ol[index].style.display = "block"//根据计数器显示对应图片
            zhishiqi[index].style.backgroundColor = "red"
        }
        //    按钮绑定事件向后
        anniu[0].onclick = function name(params) {
            for (var p = 0; p < ol.length; p++) {
                ol[p].style.display = "none"//循环隐藏所有图片
                zhishiqi[p].style.backgroundColor = "#fff"
            }
            index--;//计数器
            //设置边界
            if (index < 0) {
                index = 3
            }
            ol[index].style.display = "block"//根据计数器显示对应图片
            zhishiqi[index].style.backgroundColor = "red"
        }
        //指示器绑定事件
        //给指示器添加索引
        zhishiqi[i].setAttribute("index", i)
        zhishiqi[i].onmousemove = function name(params) {
            index = this.getAttribute("index");
            for (var t = 0; t < zhishiqi.length; t++) {
                ol[t].style.display = "none"
                zhishiqi[t].style.backgroundColor = "#fff"
            }
            ol[index].style.display = "block"
            zhishiqi[index].style.backgroundColor = "red"

        }
    }
    // 自动轮播
    function zd(params) {
        anniu[1].onclick()
    }
    var timer = setInterval(zd, 2000);
    lunbo.onmousemove = function () {
        clearInterval(timer);
    }
    lunbo.onmouseout = function () {
        timer = setInterval(zd, 2000);
    }
    anniu.onmousemove = function () {
        clearInterval(timer);
    }
    anniu.onmouseout = function () {
        timer = setInterval(zd, 2000);
    }
}
lunbotu()
// 显示
function xs(){
    var ol=document.querySelectorAll(".ols li");
    console.log(oper)
    var oper=document.querySelectorAll(".ols li .oper");
    for(var i=0;i<ol.length;i++){
        ol[i].index=i;
        ol[i].onmousemove=function(){
            for(var j=0;j<oper.length; j++){
                oper[j].style.display="none"
            }
            oper[this.index].style.display="block"
        }
    }
}
xs()
// 点击移动
function yd(){
    // 屏幕
    var slide=document.querySelector(".slide");
    // 胶卷
    var picList=slide.querySelector(".roll");
    // 获取两个控制按钮
    var btns=slide.querySelectorAll(".btns a");
    // 获取所有的小圆点
    var dots=slide.querySelectorAll(".dots span");
    // 添加一个计数器，用来存放当前播放到第几张图片了
    // 默认显示的第一张
    var index=0;//0,1,2,3
    // 给每一个按钮绑定点击事件
    // 下一张
    btns[0].onclick=function(){
        // 每播放一张，就需要重新定位当前是第几张
        index++;
        // 当轮播图越界时，就需要拉回来，从0开始
        if(index>2){
            index=0;
        }
        // JS控制核心属性，将胶卷整体往左边挪动，每次挪动320px
        picList.style.left=-645*index+"px"; 
        // 让小红点跟着当前图片走
        // for( var j=0;j<dots.length;j++){
        //     dots[j].className="";
        //     // index
        //     dots[index].className="on";

        // }
    }
    // 上一张
    btns[1].onclick=function(){
        index--;
        // 判断是否越界，如果越界了，则拉回来，比如第一张时，再后退一张，则应该是到最后一张
        if(index<0){
            index=2;
        }
        // JS控制核心属性，将胶卷整体往左边挪动，每次挪动320px
        picList.style.left=-645*index+"px"; 
        // 这里添加点击了向左，向右后，小圆点也要跟着动
        // 让小红点跟着当前图片走
        // for( var j=0;j<dots.length;j++){
        //     dots[j].className="";
        //     // index
        //     dots[index].className="on";

        // }
}
}
yd()