// 轮播图
// oUl为胶片
var $oUl=$(".content>ul");
//设置胶片的宽度
$oUl.width($oUl.children().length*502);
//count计数器
var count=0;
//thumb为缩略图
var $thumb=$(".xyd span ");
//点击缩略图的效果,相当于是主控函数
$thumb.on("click",function (){
     $(this).addClass("on").siblings().removeClass("on");
     // count值即为当前图片索引
     // console.log($(this).index());
     count=$(this).index();//2
     $oUl.animate({
        "left":-502*count,    //ul标签的动画为向左移动；
       });
 });
//左右按钮的控制效果
 $(".next").click(function (){
    //这里的count不是用来控制全局的count的，而是用来获取此时全局count值是多少，并触发对应的thumb的li的点击事件
     count++;  
     if(count==$thumb.length){
        count=0;
    };
    //点击左右按钮，通过模拟点击相当于是点击了缩略图
    $thumb.eq(count).trigger("click");
});
$(".prev").click(function (){
    //这里的count不是用来控制全局的count的，而是用来获取此时全局count值是多少，并触发对应的thumb的li的点击事件
    count--;
    // console.log("2:"+count);
    if(count==$thumb.length){
        count=0;
    };
    $thumb.eq(count).trigger("click");
});

//定时器实现自动轮播,其实定时器代码就相当于是不断的在自动点击pre按钮
var timer = setInterval(function (){
    count++;
    if(count==$thumb.length){
        count=0;
    };
    $thumb.eq(count).trigger("click");
},2000);
//鼠标悬浮停止自动播放
$oUl.hover(function(){
        clearInterval(timer);
    },function(){
        //重新开始动画，代码与点击next一样
        timer = setInterval(function (){
            count++;
            if(count==$thumb.length){
                count=0;
            };
            $thumb.eq(count).trigger("click");
        },2000);
});
// 二级菜单
$(".nav_lis").stop().hover(function () {
    $(this).children().children(":last").slideDown(400)
}, function () {
    $(this).children().children(":last").slideUp(400)
})


// 滚动
$(".app li").click(function () {
    $(".recommend_right_box_b").hide()
     $(this).addClass("app_on").siblings().removeClass("app_on")
     $(".recommend_right_box_b").eq($(this).index()-3).show()
})

$(".right_dots>span").click(function name(params) {
    var p = $(this).parent().parent().children(":last").children().children();
    var d = $(this).index()
    p.stop().animate({ "left": d * -669 });
})

// tab切换
$(".a1>span").click(function(){
        // jq特色：链式操作
        //          隐式迭代
        // 给当前li标签添加高亮class,并找到其他兄弟元素，移出这些兄弟元素的高亮样式
    $(this).addClass("bg-shi").css("color","#fff").siblings().removeClass("bg-shi").css("color","#ff781e");
        // 点击某一个li时，让对应的面板显示
        // 让其他面板隐藏
    $(".table-one1>ul").eq($(this).index()).show(400).siblings().hide(400);
});

// 学科
$(".li-a").click(function name(params) {
    $(".fenlei-ou>li>a").addClass("bghuangse").removeClass("bgbaise");
    $(this).addClass("bgbaise").removeClass("bghuangse");
    $(".fenlei-2").css("display", "none");
    $(".fenlei-2").eq($(this).index()).css("display", "block")
})


// 换色
var linkCss = document.getElementById("css");

    $(".blue").click(function () {
        $(".orange").css("background-position", "0 -49px")
        $(this).css("background-position", "-18px -22px")
        linkCss.setAttribute("href", "css/index-blue.css");
    })

    $(".orange").click(function () {
        $(".blue").css("background-position", "0 -22px")
        $(this).css("background-position", "-18px -49px")
        linkCss.setAttribute("href", "css/index-orange.css");
    })