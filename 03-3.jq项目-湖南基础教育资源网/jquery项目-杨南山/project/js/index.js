$(function(){
    //轮播
    $("#rota").slides({
        img:['images/pic/slide_01.jpg','images/pic/slide_02.jpg','images/pic/slide_03.jpg','images/pic/slide_04.png','images/pic/slide_05.jpg'],
    });

    //皮肤切换
    $("#change").find("a").click(function(){
        if($(this).attr("id")=="blue"){
            $(this).addClass("cur").siblings().addClass("cuu");
            $("#orange").attr("disabled","false");
            $("#blue").removeAttr("disabled")
        }else{
            $(this).removeClass("cuu").siblings().removeClass("cur");
            $("#orange").removeAttr("disabled")
        }
    })

    //切换城市
    $("#tabs").bind("click",function(){
       $(this).find("div").filter(".boxs").toggle();
    })
    //高亮显示和切换对应的城市
    var $li = $("#cc").children();
    var $bds = $("#bds").find(".box1");
    var $bli = $bds.find("li");
    var $boxs = $("#boxs");
    var $tcy = $("#tcy");
    $boxs.bind("click",function(){
        return false;
    })
    $li.bind("click",function(e){
        var index= $(this).index();
        $li.removeClass("active");
        $(this).addClass("active");
        $bds.removeClass("on");
        $bds.eq(index).addClass("on");
        $tcy.text($(this).text())
        return false;
    })
    $bli.bind("click",function(){
        $bli.removeClass();
        $(this).addClass("cur");
        $tcy.text($(this).text())
    })


    //检索国家资源网
    var $guojia = $("#guojia");
    var $jimi = $("#jimi");
    var $jLi = $jimi.find("li");
    var $guo = $("#guo")
    $jimi.bind("click",function(){
        return false;
    });
    $guojia.bind("click",function(){
        $jimi.slideToggle(200);
        return false;
    });
    $jLi.bind("click",function(){
        $guo.text($(this).text())
    });

    //模拟搜索框
    var arr = ["降龙十八掌","九阴真经","老司机开车","老哥在线轮流布置作业","九九归一","降级与升级","九牛一毛","EVA","E-hero","EE打车","奥迪双钻","奥迪RS4","奥拓","奥门"]
    var $input = $("#input");
    var $hezi = $("#hezi")

    $input.bind("keyup",function(){
        
        //创建一个临时数组
        var newArr = [];
        arr.forEach(function(item){
            if($hezi.children.length!=0){
                //先判断是否存在 先清空
                $hezi.empty();
            }
            if(item.indexOf($input.val())==0){
                //显示
                $hezi.show()
                newArr.push(item);
            }
        })
            
        newArr.forEach(function(item){
            var $p = $("<p>"+item+"</p>");
            $p.css({
                height:20,
            })
            $hezi.append($p)
        })
        var $pboj = $hezi.children();
        $pboj.click(function(){
            $input.val($(this).text());
            $hezi.hide();
            $hezi.empty();
        })
        if($input.val().length==0||newArr.length==0){
            $hezi.hide();
            $hezi.empty();
        }
    })

    //县市切换
    var $shi = $("#shi");
    var $xian = $("#xian");
    var $citys = $(".cys");
    $xian.bind("click",function(){
        $shi.removeClass("on")
        $(this).addClass("on")
        $citys.fadeOut();
        $citys.eq(1).fadeIn();
    })
    $shi.bind("click",function(){
        $xian.removeClass("on")
        $(this).addClass("on")
        $citys.fadeOut();
        $citys.eq(0).fadeIn();
    })


    //推荐应用切换
    var arr2 = ["images/pic/app_02.png","images/pic/app_02.png","images/pic/app_02.png","images/pic/app_02.png","images/pic/app_02.png","images/pic/app_02.png","images/pic/app_02.png"]
    var arr3 = ["images/pic/app_03.png","images/pic/app_03.png","images/pic/app_03.png","images/pic/app_03.png","images/pic/app_03.png","images/pic/app_03.png","images/pic/app_03.png"]
    var $app = $("#app");
    var $next = $("#next");
    var $pre = $("#pre");
    var $kbox = $("#kbox");
    var $kul = $kbox.children();
    var $a = $app.children().filter(".aka");
    $a.bind("click",function(){
        $a.removeClass("active");
        $(this).addClass("active");

    })
    var index=0;
    $next.bind("click",function(){
        index++;
        $kul.eq(index>3?3:index).animate({
            left:-646
        })
        $kul.eq(index+1>3?0:index+1).animate({
            left:0
        })
        $kul.eq(index>1?0:3).css({
            left:646
        })
        var now  = index;
    })


    //切换用户排行榜
    var $sw1 =$("#sw1");
    var $sw2 =$("#sw2");
    var $rd =$("#rd").children();
    $sw2.bind("click",function(){
        $(this).addClass("active")
        $sw1.removeClass("active")
        $rd.eq(1).stop(true,true).animate({
            left:0
        },200)
        $rd.eq(0).stop(true,true).animate({
            left:209
        },200)
    })

    $sw1.bind("click",function(){
        $(this).addClass("active")
        $sw2.removeClass("active")
        $rd.eq(0).stop(true,true).animate({
            left:0
        },200)
        $rd.eq(1).stop(true,true).animate({
            left:-209
        },200)
    })

    //学科切换
    var $kemu = $("#xue>a:contains('按学科')");
    var $ben = $("#xue>a:contains('按版本')");
    var $zhuan = $("#xue>a:contains('按专题')");
    var $menu = $("#xue").children();
    var $uls = $("#k2").children(".k-bd");
    $menu.bind("click",function(){
        $menu.removeClass("active");
        $(this).addClass("active");
        var index =$(this).index();
        $uls.hide();
        $uls.eq(index).show();
    })

    //公告

    var $scroll =$("#scroll");
    var $say = $scroll.children();
    setInterval(ff,400);
    var num = 0;
    var now = 0;
    function ff(){
        num++;
        $say.eq(1).css({
            top:22
        })
        $say.eq(now).animate({
            top:-22
        });
        $say.eq(num+1).animate({
            top:0
        });
       
        now =  num;
    }

    //底部下拉显示隐藏
    var $tas = $("#tas").children();
    var $hub = $("#hua").children().filter(".d1");
    $tas.bind("click",function(){
        var index = $(this).index();
        $hub.stop().slideUp(400);
        $tas.removeClass("active");
        $tas.eq(index).addClass("active");
        $hub.eq(index).stop().slideDown(400);
    })










})