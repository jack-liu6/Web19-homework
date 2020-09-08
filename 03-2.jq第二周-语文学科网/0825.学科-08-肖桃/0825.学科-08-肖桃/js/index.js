;$(function(){
    // 设置搜索框下拉按钮
    $(".select").click(function(){
        $(".subject-sources-select ul").slideToggle();
        return false;
    })
    // $(".subject-sources-select ul").on("click",function(){
    //     return false;
    // })
    // 点击页面的其他地方的时候下拉列表也需要隐藏
    // $(document).click(function(){
    //     $(".subject-sources-select ul").slideUp();
    // })
    // 为下拉框的每个li绑定点击事件，切换选中的文字
    $(".subject-sources-select ul li").click(function(){
        $(".subject-sources-select .text").text($(this).text())
    })
    // 设置成果展示最热和热门tab切换页的切换
    tab(".dis-div",".dis-ul")
    tab(".dis-div1",".dis-ul1")
    tab(".dis-div2",".dis-ul2")
    tab(".dis-div3",".dis-ul3")
    tab(".dis-div4",".dis-ul4")
    function tab(ele1,ele2) {
        $(ele1).mouseover(function(){
            $(this).addClass("dis-new").removeClass("dis-hot")
                .siblings().addClass("dis-hot").removeClass("dis-new");
            $(ele2).eq($(this).index()).stop().fadeIn(400).siblings().stop().hide();
        })
    }
    // 设置轮播图的切换
    var index=0;
    // 按钮的单击事件
    $(".mid-pic .btn").click(function(){
        index++;
        if(index==6){
            index=0
        }
        $(".mid-pic>a").eq(index).fadeIn().siblings("a").fadeOut();
        // 指示器跟着图片走
        $(".dots .dot").eq(index).addClass("on").siblings().removeClass("on")
    })
    // 指示器的单击事件
    $(".dots .dot").click(function(){
        index=$(this).index();
        $(".mid-pic>a").eq(index).fadeIn().siblings("a").fadeOut();
        $(this).addClass("on").siblings().removeClass("on");
    })
    // 通过定时器实现自动轮播
    var timer= setInterval(function(){
        $(".mid-pic .btn").trigger("click")
    },1000)
    // 屏幕的鼠标移入移出事件
    $(".mid-pic").hover(function(){
        clearInterval(timer)
    },function(){
        timer= setInterval(function(){
            $(".mid-pic .btn").trigger("click")
        },1000)
    })
    // 设置出版社的点击切换效果
    $(".chubanshe div").click(function(){
        $(this).addClass("light").siblings().removeClass("light");
    })
    // 设置课标分类的点击显示
    $(".kebiao>div").click(function(){
        $(this).addClass("blue1").siblings().removeClass("blue1");
    })
    // 设置年级的点击显示
    $(".source-nav .grade li").click(function(){
        $(this).addClass("orange").siblings().removeClass("orange");
    })
    // 设置学生天地的切换
    $(".last").mouseover(function(){
        $(this).addClass("light")
            .siblings().removeClass("light");
        $(".last-content").eq($(this).index()).stop().slideDown(200).siblings().stop().hide();
    })
    tab2(".title li",".erji")
    tab2(".title2 li",".erji2")
    function tab2(ele1,ele2){
        $(ele1).mouseover(function(){
            $(this).addClass("on")
                .siblings().removeClass("on");
            $(ele2).eq($(this).index()).stop().show(200).siblings().stop().hide();
        })
    }
})