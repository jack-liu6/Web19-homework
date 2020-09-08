$(function () {
    $(".rotation_chart").scroll({
        width: 502,
        height: 234,
        speed: 700
    });


    $(".dot span").click(function () {
        var wid = $(".rotation_chart ul li img").width()
        var index = $(this).index()
        $(this).addClass("on").siblings().removeClass("on")
        $(".rotation_chart>ul").stop().animate({ left: wid * - index })
    })

    // 定时器

    function go() {
        $(".arrow>a:first").trigger("click")
    }
    var timer = setInterval(go, 1500)

    // 清空定时器
    $(".rotation_chart").mouseover(function () {
        clearInterval(timer);
    })
    // 离开启用定时器
    $(".rotation_chart").mouseout(function () {
        timer = setInterval(go, 1500)
    });

    // 城市活跃度排名
    $(".tab_ci span").click(function () {
        $(this).addClass("shi").siblings().removeClass("shi")
        $(".city_huoyue ul").eq($(this).index()).show().siblings().hide()
    })




    // 登录
    $(".sign").click(function () {
        if ($(".u_name").val() == "") {
            $(".u_name").val("您的用户名不能为空")
            $(".u_name").css("border", "1px solid red")
            $(".u_name").css("color", "red")
        }
        if ($(".password input").val() == "") {
            $(".password input").val("您的密码不能为空")
            $(".password input").css("border", "1px solid red")
            $(".password input").css("color", "red")
        }
        if ($(".code input").val() == "") {
            $(".code input").val("验证码为空")
            $(".code input").css("border", "1px solid red")
            $(".code input").css("color", "red")
        }
        if ($(".code input").val() != $(".erweima").text()) {
            $(".code input").val("验证码有误")
            $(".code input").css("border", "1px solid red")
            $(".code input").css("color", "red")
        } else {
            alert("您已成功登录！");
            $(".user_b").eq(0).hide().next().show()
        }
    })
    $(".u_name").focus(function () {
        $(this).css("border", "1px solid #bdd7f2")
        $(this).val("")
        $(".u_name").css("color", "#000")
    })
    $(".password input").focus(function () {
        $(this).css("border", "1px solid #bdd7f2")
        $(this).val("")
        $(".password input").css("color", "#000")
    })
    $(".code input").focus(function () {
        $(this).css("border", "1px solid #bdd7f2")
        $(this).val("")
        $(".code input").css("color", "#000")
    })


    // 验证码

    $(".erweima").click(function () {
        var code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g']

        function yzm() {
            return Math.round(Math.random() * 16);
        }
        var arr = []
        for (var i = 0; i < 4; i++) {
            arr.push(code[yzm()]);
        }
        $(this).text(arr.join(''))
    })

    // 时间
    function send(img, name) {
        //获取时间
        var time = new Date()
        var year = time.getFullYear();
        var month = add(time.getMonth() + 1);
        var date = add(time.getDate());
        var week = time.getDay();

        switch (week) {
            case 0:
                week = "日"
                break;
            case 1:
                week = "一"
                break;
            case 2:
                week = "二"
                break;
            case 3:
                week = "三"
                break;
            case 4:
                week = "四"
                break;
            case 5:
                week = "五"
                break;
            case 6:
                week = "六"
                break;
            default:
                break;
        }
        function add(num) {
            if (num < 10)
                return num = '0' + num;
            else
                return num
        }
        var istime = year + '年' + month + '月' + date +'日'+ ' 星期' + week
        $(".today").text(istime)
        //清空文本内容
    }
    send()


    // 用户排名tab
    $(".yongs").click(function name(params) {
        $(this).addClass("bgbs").removeClass("bgff").siblings().addClass("bgff").removeClass("bgbs");
        $(".pais").hide();
        $(".pais").eq($(this).index()).show()
    })


    // 学科分类tab
    $(".li-a").click(function name(params) {
        $(".fenlei-ou>li>a").addClass("bghuangse").removeClass("bgbaise");
        $(this).addClass("bgbaise").removeClass("bghuangse");
        $(".fenlei-2").css("display", "none");
        $(".fenlei-2").eq($(this).index()).css("display", "block")
    })
    // 三类课堂tab
    $(".xuebi-j").click(function name(params) {
        $(".xuebi-j").removeClass("xuebi-h").css("color", "#797979");
        $(".xuebi-j>a").css("color", "#797979");
        $(this).addClass("xuebi-h");
        $($(this).children(0)).css("color", "#fff");
        $('.kt-content>ul').css("display", "none");
        $('.kt-content>ul').eq($(this).index()).css("display", "block")
    })

    //   换肤
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

    //  首页应用中心切换
    $(".qiehun").click(function () {
        $(".nav_li").removeClass("li_on")
        $(this).addClass("li_on")
    })

    $(".qiehun").eq(0).click(function () {
        $(".index").show();
        $(".app_center").hide()
    })

    $(".qiehun").eq(1).click(function () {
        $(".index").hide();
        $(".app_center").show()
    })
})

// 应用中心

// tab切换
$(".ol").click(function name(params) {
    $(".ol").addClass("bgNone");
    $(this).removeClass("bgNone");
    var a = $(this).index();
    $(".content-right").css("display", "none")
    $(".content-right").eq($(this).index()).css("display", "block")
})

// 二级菜单
$(".content-one").mouseover(function name(e) {
    $(".content-erji").css("display", "none");
    $(this).children().children(":last").css("display", "block");
    var left = $(this).offset().left
    var top = $(this).offset().top - $(window).scrollTop() + $(".content-one").height()
    var odiv = $(this).children().children(":last")
    odiv.css("left", left)
    odiv.css("top", top)
})
$(".content-one").mouseout(function name(params) {
    odiv.css("display", "none");
})

// 小轮播
$(".odiv>a").click(tab);
function tab(params) {
    var a = $(this).index();
    var yidong = $(this).parent().parent().parent()
    var b = yidong.children(1).children();
    b.eq(3).stop().animate({ "left": a * -785 });
}


$(".nav_lis").stop().hover(function () {
    $(this).children().children(":last").slideDown(400)
}, function () {
    $(this).children().children(":last").slideUp(400)
})


    // 应用推荐tab
$(".app li").click(function () {
    $(".recommend_right_box_b").hide()
     $(this).addClass("app_on").siblings().removeClass("app_on")
     $(".recommend_right_box_b").eq($(this).index()-3).show()
})
//左右tab切换
$(".right_dots>span").click(function name(params) {
    var p = $(this).parent().parent().children(":last").children().children();
    var d = $(this).index()
    p.stop().animate({ "left": d * -669 });
})

//城市选择
$(".address_input1").click(function name(params) {
    $(".qiehuan").slideToggle(400);
})
$(".qiehuan-top>ul>li>a").click(function name(params) {
    var tu=false;
   var text= $(this).text()
    $('.address_input1').val(text);
    tu=true
    if(tu==true){
        $(".qiehuan-botton>ul>li>a").click(function name(params) {
            var dd = $(this).text() ;
            $('.address_input1').val(dd);
            console.log($('.address_input1').val(text+dd));
            tu=false
        })
    }
})
