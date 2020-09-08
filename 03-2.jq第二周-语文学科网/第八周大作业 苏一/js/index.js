//tab切换
$(".tabg").click(function(){
	$(this).addClass("sp").siblings().removeClass("sp");
	$(".tabd>ul").eq($(this).index()).show().siblings().hide();
});

//轮播图插件

layui.use('carousel', function() {
				var carousel = layui.carousel;
				//建造实例化
				carousel.render({
					elem: '#test1',
					width: '227px', //设置背景容器的宽度
					height:'163px',
					// arrow: 'always', //始终显示箭头,不会消失
					// anim: 'updown' //切换动画方式:anim
					//indicator:'outside',
					// indicator: 'outside' //这个属性：小圆点在外面	
					
				});
			});
			

//450px tab切换

$(".tabg1").click(function(){
	$(this).addClass("sp").siblings().removeClass("sp");
	$("#tabd>ul").eq($(this).index()).show().siblings().hide();
});

$(".tabg2").click(function(){
	$(this).addClass("sp").siblings().removeClass("sp");
	$("#tabd1>ul").eq($(this).index()).show().siblings().hide();
});


//双tab切换

$(".tabsbtnleft>div").click(function(){
	$(this).addClass("on1").siblings().removeClass("on1");
	$(".tabsul>div").eq($(this).index()).show().siblings().hide();
});

$(".tabsbtn").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
	$(".tabsbd").eq($(this).index()).show().siblings().hide();
});

$("#remen>div").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
	$("#ul>div").eq($(this).index()).show().siblings().hide();
});



$(".tabg3").click(function(){
	$(this).addClass("sp").siblings().removeClass("sp");
	$(".tabb>ul").eq($(this).index()).show().siblings().hide();
	console.log($("#tabd2"))
});

//最后一个tab切换

$(".ltbtn>span").click(function(){
	$(this).addClass("on2").siblings().removeClass("on2");
	$(".ltbd>ul").eq($(this).index()).show().siblings().hide();
	console.log($("#tabd2"))
});