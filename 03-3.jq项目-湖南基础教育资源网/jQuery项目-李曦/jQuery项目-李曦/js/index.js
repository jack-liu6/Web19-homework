$(function() {
        // 换肤按钮
        $(".blueBtn").click(function() {
            $(this).toggleClass("bluebtn").siblings().removeClass("orangebtn");

        });
        $(".orangeBtn").click(function() {
            $(this).toggleClass("orangebtn").siblings().removeClass("bluebtn");
        });

    })
    // 选择市、县
$(function() {
    var cityOptions = $(".cityOptions");
    // 点击文档空白处也要收起来
    // $(document).click(function() {
    //     cityOptions.slideUp(400);
    // });
    $("#selectCity").click(function() {
        if (cityOptions.is(":visible")) {
            cityOptions.slideUp(400);
        } else {
            cityOptions.slideDown(400);
        }
    });
    $(".cityOptions>ul>li").click(function() {
        var text = $(this).html();
        console.log(text);
        $("#selectCity").val(text);
        if ($(this).hasClass("citySelected")) {
            $(this).removeClass("citySelected");
        } else {
            $(this).addClass("citySelected").siblings().removeClass("citySelected");
        };
        // 同时切换面板
        $(".cityAreas_div>ul").eq($(this).index()).show(400).siblings().hide(400);
    });
    // 选择县
    $(".cityAreas_r>li").click(function() {
            $(this).toggleClass("areasSelected");
        })
        // 主导航下拉菜单
    $(".main_nav>ul>li").hover(function() {
        $(this).children("div").stop().slideDown(400);
        $(this).addClass("currentNavLi").siblings().removeClass("currentNavLi");
        $(this).parent().children("li:first-child").removeClass("currentNavLi");
    }, function() {
        $(this).children("div").stop().slideUp(400);
        $(this).removeClass("currentNavLi");
    });
    $(".main_nav_dd>ul>li").hover(function() {
        $(this).toggleClass("current_nav_dd_Li");
    });

    $(".slide").hover(function() {
            console.log(12334);
            $(".slide_info").stop().slideUp(400);
        }, function() {
            $(".slide_info").stop().slideDown(400);
        })
        // 市、县切换
    $(".acti_tab>span").click(function() {
            $(this).addClass("current_acti_tab").siblings().removeClass("current_acti_tab");
            $(".acti_bd>ul").eq($(this).index()).slideDown("slow").siblings().slideUp("fast");
        })
        // 应用切换
    $(".appRecom_tab>ul>li").click(function() {
            $(this).addClass("currentAppLi").siblings().removeClass("currentAppLi");
            // 同时切换面板
            $(".appList_div>ul").eq($(this).index()).show(400).siblings().hide("fast");
        })
        // 点击箭头 切换应用
        // $(".")


    // 用户下载排行切换面板
    $(".userDownload_hd>span").click(function() {
            $(this).addClass("currentDonwloadspan").siblings().removeClass("currentDonwloadspan");
            $(".userDownload_bd>ul").eq($(this).index()).slideUp(400).siblings().slideDown(300);
        })
        // 学科分类
    $(".subjectCate_tab>ul>li").click(function() {
            $(this).addClass("currentAppLi").siblings().removeClass("currentAppLi");
            $(".subjectCate_bd>div").eq($(this).index()).show(400).siblings().hide(300);
        })
        // 课堂分类
    $(".lesson_Categ_tab>li").click(function() {

        $(this).addClass("currentLessonLi").siblings().removeClass("currentLessonLi");
        $(".lesson_Categ_bd>ul").eq($(this).index()).show(400).siblings().hide(300);
    })
});