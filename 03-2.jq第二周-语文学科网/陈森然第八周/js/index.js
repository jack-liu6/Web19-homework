
$(".yd").click(function () {
    $(this).addClass("anniu_on").siblings().removeClass("anniu_on");
    $(".tab_nav").eq($(this).index()).show().siblings().hide();
    var tab = $(".tab_nav").eq($(this).index()).children().children(":last");
    // console.log(tab);
    tab.css("display", "block")
})

$(".nav_li").click(function () {
    $(".nav_li").removeClass("inline");
    $(".nav_li").css("width", "66px")
    $(this).css("width", "69px")
    $(this).addClass("inline");
    $(".tab_nav>li>ul").hide()
    $(this).next().show()
})

// 轮播图
$(function () {
    //这里写JQ代码
    // 胶卷
    var plist = $(".toutiao-tupian>ul");
    $(".c22").bind("click", function name(params) {
        var a = $(this).index();
        plist.stop(true).animate({ "left": a * -227 });
        $(".c22").children().css("background", "#636363")
        $(".c22").eq(a).children(0).css("background", "red")
    })
    // 定时播放
    var v = 0
    var time = setInterval(function () {

        $(function fun() {
            v++
            if (v > 4) {
                v = 0
            }
            // console.log(a)
            plist.stop().animate({ "left": v * -227 });
            $(".c22").children().css("background","#636363")
            $(".c22").eq(v).children(0).css("background", "red")


        })
    }, 1000)

    $(".toutiao-tupian").hover(function () {
        clearInterval(time);
    }, function () {
        // 重新开始动画，代码与点击next一样
        setInterval(function () {
            $(function fun() {
                v++
                if (v > 4) {
                    v = 0
                }
                // console.log(a)
                plist.stop().animate({ "left": v * -227 });
                $(".c22").children().css("background", "#636363")
                $(".c22").eq(v).children(0).css("background", "red")
            })
        }, 1000)
    });

})