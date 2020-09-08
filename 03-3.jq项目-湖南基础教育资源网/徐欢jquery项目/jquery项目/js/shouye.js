$(function() {
    // 上面的换样式按钮
    $(".header .btn").click(function() {
        $("#link").attr("href", "style/style-blue.css")
    })
    $(".header .btn2").click(function() {
        $("#link").attr("href", "style/style-orange.css")
    })

    // 填写地址的市县
    $(".shixian").click(function() {
        var a = ""
        $(this).nextAll().addClass("block").removeClass("none")
        $(".shengsang li").click(function() {
            $(this).addClass("on").siblings().removeClass("on")
            $(".duiying li").attr("disabled", false)
            $(".shixian").text($(this).text())
            a = $(".shixian").text()
        })
        $(".duiying li").click(function() {
            $(this).addClass("on").siblings().removeClass("on")
            $(".shixian").text(a + $(this).text())
            $(".shixian").nextAll().addClass("none").removeClass("block")
        })
    })

    // 市县的切换
    $(".shij").click(function() {
        $(this).addClass("xiajian").siblings(".shij").removeClass("xiajian")
    })

    // 导航栏的二级菜单
    $(".zhongxin").hover(function() {
        $(this).find(".ziyuan").addClass("bgziyuan")
        $(this).find(".yingul").css("display", "block")
    }, function() {
        $(this).find(".ziyuan").removeClass("bgziyuan")
        $(this).find(".yingul").css("display", "none")
    })

    // 切换用户排行和下载
    $(".xiangong p").find(".jin").click(function() {
        $(this).addClass("gongspan").siblings().removeClass("gongspan")
        $(".xiangong .mingcheng").eq($(this).index()).addClass("block").removeClass("none").
        siblings(".mingcheng").addClass("none").removeClass("block")
    })

    // 小轮播图
    var $tabul = $(".tabul>ul")
    var lenul = $tabul.children().length
    $tabul.css("width", 667 * 3)
    var al = $(".tablun .zuojain")
    var ar = $(".tablun .youjian")
    var indox = 0
    al.on("click", function() {
        indox--
        if (indox < 0) {
            indox = 2
            $tabul.css("left", -667)
        }
        $tabul.stop().animate({
            left: -indox * 667
        })
        return false
    })
    ar.on("click", function() {
        indox++
        if (indox > 2) {
            indox = 1
            $tabul.css("left", 0)
        }

        $tabul.stop().animate({
            left: -indox * 667
        })
        return false
    })

    // 收费应用与免费应用tab切换与轮播图
    $(".chu").find(".tab-ulli").click(function() {
        $(this).addClass("neili").siblings().removeClass("neili")
        $(".chu .tab-xia").eq($(this).index()).show().siblings(".tab-xia").hide()
    })

    // 按版本的与按学科的tab切换
    $(".chuxoian").find(".tab-ulli").click(function() {
        $(this).addClass("neili").siblings().removeClass("neili")
        $(".chuxoian .table").eq($(this).index()).show().siblings(".table").hide()
    })

    // 三类课堂的tab切换
    $(".denglup").find(".ketangi").click(function() {
        $(this).addClass("ktangimg").siblings(".ketangi").removeClass("ktangimg")
    })

    // 首页与应用中心的切换
    // 导航栏的首页与应用中心的切换
    $(".daoul .dianji").click(function() {
        $(this).addClass("bgdaohang").siblings().removeClass("bgdaohang")

    })
    $(".daoul>.shoy").click(function() {
        $(".shou").css("display", "block").siblings(".ying").css("display", "none")
    })
    $(".daoul>.diandian").click(function() {
        $(".ying").css("display", "block").siblings(".shou").css("display", "none")
    })

    // 应用中心的摸上去
    $(".boxbox li").hover(function(e) {
        $(this).children(".mo").show()
        $(".mo").css("left", e.clientX)
    }, function() {
        $(this).children(".mo").hide()
    })

    // 应用中心的轮播
    var index = 0
    var len = $(".bb>ul").length
    var $con = $(".boxbox")
    $(".boxbox").css("width", 2 * 788)
    $(".zuoyou .zuo").click(function() {
        index--
        if (index < 0) {
            $con.css("left", -788 * (2 - 1))
            index = 2 - 2;
        }
        $(".bb>ul").eq($(this).index() - 2).css("dispaly", "none")
        $(".bb").stop(true, true).animate({
            left: 788 * -index
        }, 500);
        return false
    })
    $(".zuoyou .qyou").click(function() {
        index++
        if (index > 2 - 1) {
            index = 1;
            $con.css("left", 0)
        }

        $(".bb").stop(true, true).animate({
            left: 788 * -index
        }, 500);
        return false
    })

    // 应用中心的tab切换
    $(".tuijian").click(function() {
        $(this).find(".tc").addClass("tjapp")
        $(this).siblings(".qu").find(".tc").removeClass("qita")
        $(".app2").show().siblings(".app").hide()
    })
    $(".qu").click(function() {
        $(this).find(".tc").addClass("qita")
        $(this).siblings(".tuijian").find(".tc").removeClass("tjapp")
        $(".app").show().siblings(".app2").hide()
    })
})
window.onload = function() {
    //  // 大的轮播图
    class Swiper {
        constructor() {
            this.w = $(".lunbo li").width();
            this.num = 0;
            this.len = $(".lunbo li").length - 1;
            this.timer = null;
            $(".picList").css("width", $(".lunbo li").length * 502)
        }
        init() {
            //设置定时器
            this.setTime();
            //滑上停止定时器
            this.hover();
            //点击指示
            this.pointClick();
            //点击左右箭头
            this.lrClick();
        }
        setTime() {
            this.timer = setInterval(() => {
                this.num++;
                if (this.num > this.len) {
                    this.num = 0;
                }
                let cssTrx = -this.num * this.w;
                $(" .dots span").eq(this.num).addClass('on').siblings().removeClass('on');
                $(".picList").css({
                    transform: `translateX(${cssTrx}px)`
                })
            }, 3000)
        }
        hover() {
            $('.slide').hover(() => {
                clearInterval(this.timer)
            }, () => {
                this.setTime();
            });
        }
        pointClick() {
            let that = this;
            $(".dots span").click(function() {
                that.num = $(this).index();
                let cssTrx = -that.num * that.w;
                $(this).addClass('on').siblings().removeClass('on');
                $(".picList").css({
                    transform: `translateX(${cssTrx}px)`
                })
            })
        }
        lrClick() {
            $(".btns .prev").click(() => {
                this.num--;
                if (this.num < 0) {
                    this.num = this.len;
                };
                console.log(this.num)
                let cssTrx = -this.num * this.w;
                $(".dots span").eq(this.num).addClass('on').siblings().removeClass('on');
                $(".picList").css({
                    transform: `translateX(${cssTrx}px)`
                })
                return false
            });

            $(".btns .next").click(() => {
                this.num++;
                if (this.num > this.len) {
                    this.num = 0;
                }
                let cssTrx = -this.num * this.w;
                $(".dots span").eq(this.num).addClass('on').siblings().removeClass('on');
                $(".picList").css({
                    transform: `translateX(${cssTrx}px)`
                })
                return false
            })
        }
    }
    let sw = new Swiper();
    sw.init();
    // 摸上去
    // function fun() {
    //     var box = document.getElementsByClassName('box');
    //     var oli = box.getElementsByTagName('li');
    //     for (var i = 0; i < oli.length; i++) {
    //         oli[i].onmouseover = function() {
    //             // 将this传到showBox函数
    //             showBox(this);
    //         };
    //         oli[i].onmouseout = function() {
    //             // 将this传到hideBox函数
    //             hideBox(this);
    //         };
    //     }

    //     function showBox(obj) {
    //         obj.lastElementChild.style.display = 'block';
    //     }

    //     function hideBox(obj) {
    //         obj.lastElementChild.style.display = 'none';
    //     }
    // }
    // fun()
}