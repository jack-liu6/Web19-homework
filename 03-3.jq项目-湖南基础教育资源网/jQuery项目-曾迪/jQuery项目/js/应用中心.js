// 切换页

$(".oul>li").hover(function(){
    $(this).removeClass("bg-none").siblings().addClass("bg-none")
   },function(){
    $(".oul>li:eq(0)").removeClass("bg-none").siblings().addClass("bg-none")
  })

// 小轮播
$(function(){
    //这里写JQ代码
    var lbtn=$(".left-but");
    var rbtn=$(".right-but");
    // 胶卷
    var plist=$(".po");
    // 获取多少张
    var len=plist.children().length;//4
    // 向左，左边栋，每次动left:-400px
    // index表示的就是当前是第几张
    var index=0;
    // 去根据胶片改变胶卷的长度
    plist.css("width",len*792);

    lbtn.on("click",function(){
        // 让胶卷动
        // 每点击一次，就让胶卷往前当前图片的索引*-790px
        index++;
        if(index>len-1){
            index=0;
        }
        // plist.css("left",-index*790);
        plist.stop().animate({"left":-index*792});
    });

    rbtn.on("click",function(){
        // 让胶卷动
        // 每点击一次，就让胶卷往前当前图片的索引*-790px
        index--;
        if(index<0){
            index=len-1;
        }
        // plist.css("left",-index*790);
        plist.stop().animate({"left":-index*792});
    });
})

$(".nav_lis").stop().hover(function () {
    $(this).children().children(":last").slideDown(400)
}, function () {
    $(this).children().children(":last").slideUp(400)
})


// 

$(".list>li").mouseover(function name(e) {
    $(".yck").css("display","block");
//  $(this).children(":last").css("display", "none");
    var left = $(this).offset().left
    var top = $(this).offset().top - $(window).scrollTop() + $(".list>li").height()
    $(".yck").css("left", left)
    $(".yck").css("top", top)
})

$(".list>li").mouseout(function name(params) {
    $(".yck").css("display", "none");
})
