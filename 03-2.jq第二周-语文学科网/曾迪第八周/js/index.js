// 学生天地tab切换
var hid;
$(".yd").click(function () {
    $(this).addClass("anniu_on").siblings().removeClass("anniu_on");
    $(".tab_nav").eq($(this).index()).show().siblings().hide();
})

$(".nav_li").click(function () {
    $(".nav_li").removeClass("inline");
    $(".nav_li").css("width", "66px")
    $(this).css("width","67px")
    $(this).addClass("inline");
    $(".tab_nav>li>ul").hide()
    $(this).next().show()
})


// 轮播图
$(function(){
    //这里写JQ代码
    // 胶卷
    var plist=$(".toutiao-tupian>ul");
    // 获取多少张
    var len=plist.children().length;//4
    // 向左，左边栋，每次动left:-400px
    // index表示的就是当前是第几张
    // var index=0;
    // 去根据胶片改变胶卷的长度
    // plist.css("width",len*227);
    // 图片跟随指示器
   
    $(".c2").bind("click",function name(params) {
        var a=$(this).index();
        console.log(a)
        plist.stop(true).animate({"left":a*-227});
        $(".c2").children().removeClass("oa")
            $(".c2").eq($(this).index()).children(0).addClass("oa")
        // if(a>5){
        //     a=0
        // }
        })
    // 定时播放
    var v=0
    var time=setInterval(function(){
        
        $(function fun(){
            v++
            if(v>4){
                v=0
            }
            // console.log(a)
            plist.stop().animate({"left":-v*227});
            $(".c2").children().removeClass("oa")
            $(".c2").eq(v).children(0).addClass("oa")
           
            
        })
    },1000)

    $(".toutiao-tupian").hover(function(){
        clearInterval(time);
    },function(){
        //重新开始动画，代码与点击next一样
        setInterval(function(){
            $(function fun(){
                v++
                if(v>4){
                    v=0
                }
                // console.log(a)
                plist.stop().animate({"left":-v*227});
                $(".c2").children().removeClass("oa")
                $(".c2").eq(v).children(0).addClass("oa")
            })
        },1000) 
});

})