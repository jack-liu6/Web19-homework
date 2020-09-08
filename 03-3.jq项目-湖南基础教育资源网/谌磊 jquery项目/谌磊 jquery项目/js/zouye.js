$(function() {
	// 页面跳转
	$(".home div:last").click(function() {
		window.location.replace("应用中心.html");
	})
	// 下拉菜单
	$("#dell").hover(function() {
		$('.fu').stop().slideDown();
	}, function() {
		$('.fu').stop().slideUp();
	})
	// 轮播
	$("#carousel_1").FtCarousel({
		index: 0,
		auto: true,
		time: 3000,
		indicators: true,
		buttons: true
	});
	// 各地活跃度排行tab切换页
	$("#city div").click(function() {
		console.log($("#city div"))
		var index = $(this).index();
		$("#city div").attr("class", "ge-3");
		$(this).attr("class", "ge-2");
		$(".tab-nav").slideUp().eq(index).slideDown();
	})
	// 贡献度/下载量tab切换页
	$("#download div").click(function() {
		var index = $(this).index();
		$("#download div").attr("class", "left-2");
		$(this).attr("class", "left-1");
		$(".tabs").hide().eq(index).fadeIn();
	})
	// 左右tab切换

	var index = 0;
	$(".r").on("click", function() {
		index++;
		if (index > 1) {
			// index=0;
			return false;
		}
		$(".among").stop().animate({
			"left": -index * 682
		});
	});
	$(".l").on("click", function() {
		index--;
		if (index < 0) {
			// index=1;
			return false;
		}
		$(".among").stop().animate({
			"left": -index * 682
		});
	});
	$("#right div").click(function() {
		var index = $(this).index();
		$("#right div").attr("class", "right-2");
		$(this).attr("class", "right-1");
		$(".bett").hide().eq(index).fadeIn();
	})

	// 推荐应用 tab
	$("#bottom div").click(function() {
		var index = $(this).index();
		$("#bottom div").attr("class", "bottom-2");
		$(this).attr("class", "bottom-1");
		$(".pass-1").hide().eq(index).fadeIn();
	})
	// 名师工作室tab
	$("#ming div").click(function() {
		var index = $(this).index();
		$("#ming div").attr("class", "san-4 fl");
		$(this).attr("class", "san-3 fl");
		$(".shui").hide().eq(index).fadeIn();
	})
	$(".head-3").click(function(){
		$('#head').attr('href','css/orange.css');
		$(".myimg").attr('src','image/orange_skin/tt_ico.png');
	})
	$(".head-4").click(function(){
		$('#head').attr('href','css/blue.css');
		$(".myimg").attr('src','image/blue_skin/tt_ico.png');
	})
})
