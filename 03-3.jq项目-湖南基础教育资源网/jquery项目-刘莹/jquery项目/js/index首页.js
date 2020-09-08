$(function() {
	// 地址切换
	$(".chengshi").hover(function() {
		$(this).find(".cs-2").toggle();
	});
	// 切换颜色
	$("#bul").click(function() {
		$("#blue").attr("href", "css/blue_skin.css")

	});
	$("#ora").click(function() {
		$("#blue").attr("href", "css/orange_skin.css")
	});
	// 首页导航条切换
	$(".ziyuan").hover(function() {
		$(this).find(".ziyuan-2").toggle();
	});

})
// 轮播图
$(function() {
	var $oU1 = $(".lunbo>ul")
	// 设置胶片的宽度
	$oU1.width($oU1.children().length * 502);
	//计数器
	var count = 0;
	//thumb为下面按钮
	var $thumb = $(".nav a");
	$thumb.on("click", function() {
		$(this).addClass("on").siblings().removeClass("on");
		count = $(this).index();
		$oU1.animate({
			"left": -502 * count,
		})
	})
	// 定时器效果
	var timer = setInterval(function() {
		count++;
		if (count == $thumb.length) {
			count = 0;
			$oU1.css("left", 0)
		};
		$thumb.eq(count).trigger("click");
	}, 2000);
	// 切换页
	$(function(){
	    $(".nav-menu>li").click(function(){
	        $(this).children("ul").show();
	        $(this).siblings().children(".ul").hide();
	    })
	})

});
