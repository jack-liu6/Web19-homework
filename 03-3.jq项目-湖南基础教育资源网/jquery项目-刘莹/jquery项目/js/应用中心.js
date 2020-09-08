$(function(){
	// 切换颜色
	$("#bul").click(function() {
		$("#blue").attr("href", "css/应用中心blue.css")
	
	});
	$("#ora").click(function() {
		$("#blue").attr("href", "css/应用中心orange.css")
	});
	// 地址切换
	$(".chengshi").hover(function() {
		$(this).find(".cs-2").toggle();
	});
	// 首页导航条切换
	$(".ziyuan").hover(function() {
		$(this).find(".ziyuan-2").toggle();
	});
	// 摸上去图片显示
	$(".dll").hover(function() {
		$(this).find(".tu2").toggle();
	});
	
})

