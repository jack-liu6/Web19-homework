$(function (){
    $(".p1").bind('click',function (){
        $(this).addClass('p2').siblings().removeClass('p2');
        $(".zx3").eq($(this).index()).show().siblings().hide();
    });
    console.log($(".p1").length)
    layui.use(['carousel', 'form'], function(){
        var carousel = layui.carousel
            ,form = layui.form;

        carousel.render({
            elem: '#test10'
            ,width: '228px'
            ,height: '164px'
            ,interval: 2000
        });

        $('.demoTest .layui-btn').on('click', function(){
            var othis = $(this), type = othis.data('type');
            active[type] ? active[type].call(this, othis) : '';
        });
    });

    $(".zxx").bind('click',function (){
        $(this).addClass('p3').siblings().removeClass('p3');
        $(".zx4").eq($(this).index()).show().siblings().hide();
    });

    $(".xx2").bind('click',function (){
        $(this).addClass('xx3').siblings().removeClass('xx3');
        $(".sa1").eq($(this).index()).show().siblings().hide();
    });

    $(".zp").bind('click',function (){
        $(this).addClass('zp1').siblings().removeClass('zp1');
        $(".xk2").eq($(this).index()).show().siblings().hide();
    })
    layui.use('element', function(){
        var $ = layui.jquery
            ,element = layui.element;

    });
});