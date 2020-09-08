$(function() {
	var myDate = new Date;
	var year = myDate.getFullYear(); //获取当前年
	var mon = myDate.getMonth() + 1; //获取当前月
	var date = myDate.getDate(); //获取当前日
	// var h = myDate.getHours();//获取当前小时数(0-23)
	// var m = myDate.getMinutes();//获取当前分钟数(0-59)
	// var s = myDate.getSeconds();//获取当前秒
	var week = myDate.getDay();
	var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	// console.log(year, mon, date, weeks[week])
	$("#time").html(year + "年" + mon + "月" + date + "日" + weeks[week]);

	//bett轮播
	var index = 0;
	$(".fl").click(function() {
		index++;
		if (index > 2) {
			index = 0;
		}
		$(".between").stop().animate({
			"left": -index * 660,
		});
	})
	$(".fr").click(function() {
		index--;
		if (index < 0) {
			index = 2;
		}
		$(".between").stop().animate({
			"left": -index * 660,
		});
	})
	console.log($(".right-3 div").length)
	$(".right-3 div").click(function(){
		var a=$(this).index();
		$(".right-3 div").attr("class","right-2")
		$(this).attr("class","right-1")
		$(".between").stop().animate({
			"left": -a * 660,
		});
	})
	
	$(".san-1 .fl").click(function(){
		var b=$(this).index();
		$(".san-1 .fl").attr("class","fl san-4")
		$(this).attr("class","fl san-3")
		$(".shui").animate({
			left:-b*708
		},0)
	})
	$("#carousel_1").FtCarousel({
		index: 0,
		auto: true,
		time: 3000,
		indicators: true,
		buttons: true
	});
	
	$("#cloo div").click(function() {
		var index = $(this).index();
		$("#cloo div").attr("class", "left-2");
		$(this).attr("class", "left-1");
		$(".y-tabs").hide().eq(index).fadeIn();
	})
	$(".bottom-3 div").click(function() {
		var index = $(this).index();
		$(".bottom-3 div").attr("class", "bottom-2");
		$(this).attr("class", "bottom-1");
		$(".pass-1").hide().eq(index).fadeIn();
	})
})
