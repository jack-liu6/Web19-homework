;
(function ($) {
    $(function () {
        // 设置换肤按钮的点击切换
        $(".blue-skin-btn").click(function () {
            $(this).addClass("clicked1").siblings().removeClass("clicked2");
            $("#skin").attr("href", "css/blue-skin.css")
        })
        $(".orange-skin-btn").click(function () {
            $(this).addClass("clicked2").siblings().removeClass("clicked1");
            $("#skin").attr("href", "css/orange-skin.css")
        })
        // 点击切换市县的按钮，切换面板淡出
        $(".center-tab-title").click(function () {
            $(".center-tab-content").fadeToggle("slow");
        })
        // 设置省中心市县的点击切换，点击市切换不同的区县
        $(".center-tab-content-ul li").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".qu-wrapper").eq($(this).index()).slideDown().siblings().hide();
        })
        // 不同市的区县切换
        qutab(".szx-qu");
        qutab(".cs-qu");
        qutab(".zz-qu");
        qutab(".xt-qu");
        qutab(".hy-qu");
        qutab(".sy-qu");
        qutab(".yy-qu");
        qutab(".cd-qu");
        qutab(".zjj-qu");
        qutab(".taozi-qu");
        qutab(".cz-qu");
        qutab(".yz-qu");
        qutab(".hh-qu");
        qutab(".ld-qu");
        qutab(".xy-qu");
        // 不同区县切换的函数
        function qutab(ele1) {
            var $qu = $(ele1);
            // 设置区县每个区县的点击切换
            $qu.find(".qu-ul li:not(:last)").click(function () {
                $(this).toggleClass("orange");
                // 如果区县的每个按钮都被点亮，全部按钮将被点亮
                var count = 0;
                $qu.find(".qu-ul li:not(:last)").each(function (index, item) {
                    if ($(item).css("color") == "rgb(255, 153, 0)") {
                        count++;
                    }
                })
                if (count == $qu.find(".qu-ul li:not(:last)").length) {
                    $qu.find(".qu-ul li:last").addClass("orange")
                } else {
                    $qu.find(".qu-ul li:last").removeClass("orange")
                }
            })
            // 点击区县的全部按钮全部换色
            $qu.find(".qu-ul li:last").click(function () {
                $(this).toggleClass("orange");
                // 点击全部按钮如果全部按钮的颜色是橘色，其他按钮全部变橘
                if ($(this).css("color") == "rgb(255, 153, 0)") {
                    $qu.find(".qu-ul li:not(:last)").addClass("orange")
                } else {
                    $qu.find(".qu-ul li:not(:last)").removeClass("orange")
                }
            })
        }
        // 设置搜索框的获焦和失焦效果
        $(".search-input").focus(function () {
            var text = $(this).val();
            $(this).val("");
            $(this).blur(function () {
                $(this).val(text);
            })
        })
        // 设置搜索框的下拉菜单
        $(".sec-icon").click(function () {
            $(".sea-ul2").slideToggle();
            // $(".sea-ul2").mouseout(function(){
            //     $(".sea-ul2").slideUp();
            // })
        });
        // 给二级菜单绑定单个的点击事件
        $(".sea-ul2 li").click(function () {
            $(".search-select .text").text($(this).text())
        })
        // 鼠标移入移出菜单的样式
        $(".top-menu-ul .hover-ul-fa").hover(function () {
            $(this).addClass("mouse");
            $(this).find(".hover-ul").stop().show(200)
        }, function () {
            $(this).removeClass("mouse");
            $(this).find(".hover-ul").stop().hide()
        })
        // 通知公告的切换
        var index = 0;
        setInterval(function () {
            index++;
            if (index == 10) {
                index = 0;
            }
            $(".tellyou-ul li").eq(index).slideDown().siblings().hide();
            var num = +index + 1
            if (num <= 9) {
                num = "0" + num
            }
            $(".page span").text(num)
        }, 1000);
        // 设置轮播图的切换
        var i = 0;
        // 定时器实现自动播放
        function fun() {
            i++;
            if (i == 4) {
                i = 0;
            }
            $(".slide a").eq(i).fadeIn().siblings("a").hide();
            $(".dots .dot").eq(i).addClass("white").siblings().removeClass("white");
        }
        // 点击指示器切换图片
        $(".dots .dot").click(function () {
            $(this).addClass("white").siblings().removeClass("white");
            i = $(this).index();
            $(".slide a").eq(i).fadeIn().siblings("a").hide();
            $(".dots .dot").eq(i).addClass("white").siblings().removeClass("white");
        })
        var timer = setInterval(fun, 1000);
        // 鼠标移出轮播暂停，移出轮播恢复
        $(".slide a,.slide .title").hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(fun, 1000);
        });
        // 设置排行榜市县的切换
        $(".shixian span").click(function () {
            $(this).addClass("light").siblings().removeClass("light");
            $(".sx-ul").eq($(this).index()).fadeIn().siblings().hide();
        })
        // 设置推荐应用的点击切换
        left(".app-ul-wrap1");
        left(".app-ul-wrap2");
        left(".app-ul-wrap3");
        $(".app-head>div").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".app-ul-wrap").eq($(this).index()).fadeIn().siblings().hide();
        });
        // 设置左右移动轮播图的函数
        function left(ele1){
            var option = {
                width: 658,
                height: 133,
                speed:1000,
            }
            //这里写JQ代码
            var lbtn = $(".slide-left");
            var rbtn = $(".slide-right");
            // 胶卷
            var plist = $(ele1);
            // console.log($(".app-uls .app-ul-wrap1").is(":visible"))
            // 获取多少张
            var len = plist.children().length; //4
            len=4;
            // index表示的就是当前是第几张
            var index = 1;
            // 去根据胶片改变胶卷的长度
            // plist.css("width", len * option.width);
            rbtn.on("click", function () {
                index++;
                if (index > len - 1) {
                    index = 2;
                }
                plist.stop().animate({
                    "left": -index * option.width
                }, function () {
                    // 跳到列表的四张图片第一张
                    if (index == len - 1) {
                        plist.css("left", -option.width);
                    }
                });
            });
            lbtn.on("click", function () {
                index--;
                if (index < 0) {
                    index = len - 3;
                }
                plist.stop().animate({
                    "left": -index * option.width
                }, function () {
                    // 跳到列表的四张图片最后一张
                    if (index == 0) {
                        plist.css("left", -option.width * (len - 2));
                    }
                });
            });
            // 用定时器触发实现自动轮播
            var timer = setInterval(function () {
                rbtn.trigger("click");
            }, option.speed)
            // 鼠标移入轮播图的时候轮播静止，移除轮播图的时候轮播继续开始
            $(".app-wrapper").hover(function () {
                clearInterval(timer)
            }, function () {
                timer = setInterval(function () {
                    rbtn.trigger("click");
                }, option.speed)
            })
        }
        // 设置用户贡献排行的点击切换
        $(".user-g span").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".gx-ul").eq($(this).index()).fadeIn().siblings().hide();
        });
        // 设置按学科的切换
        $(".sub-btn").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".sub-class-wrapper").eq($(this).index()).fadeIn().siblings().hide();
        });
        // 设置三类课堂的点击切换
        $(".class-all span").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".class-ul3").eq($(this).index()).fadeIn().siblings().hide();
        });
        // 设置顶部灰色导航条的时间
        function time() {
            var time = new Date();
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var day = time.getDate();
            var week = time.getDay();
            // 如果月份、天数、小时、分钟、秒都小于10 显示时,前面添加0
            function add(num) {
                if (num < 10) {
                    return num = '0' + num;
                } else {
                    return num
                }
            }
            // 将星期转为中文（用数组的方法可能会更加方便）
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
            // 2020年9月1日&nbsp;星期二
            return year + '年' + add(month) + '月' + add(day) + '日&nbsp;星期' + week;
        }
        // 使用计时器循环调用函数
        setInterval(function () {
            document.getElementById("time").innerHTML = time();
        }, 1000);
        // 设置登录前后状态的切换
        // 设置登录按钮
        $(".btns .log").click(function () {
            if ($(".user").val() != "zwl" || $(".pw").val() != "123") {
                layer.alert('用户名或者密码不正确！', {
                    icon: 2
                });
                return false
            }
            if ($(".yzm").val() != "spoi") {
                layer.alert('验证码不正确！', {
                    icon: 2
                });
                return false
            }
            layer.alert('登录成功！', {
                icon: 1
            });
            // 顶部灰色导航条的改变
            $(".top1").hide();
            $(".top2").show();
            // 登录页面的改变
            $(".login .login-content").show();
            $(".login form").hide();
            return false;
        })
        // 设置注册按钮
        $(".btns .reg").click(function () {
            window.close('index.html')
            window.open('register.html')
        })

    })
})(jQuery)