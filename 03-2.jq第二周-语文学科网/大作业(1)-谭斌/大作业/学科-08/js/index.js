$(function() {
	var myImg = ["image/4.png", "image/5.png", "image/6.png", "image/位图.png", "image/位图-1.png"]
	var imgIndex = 0;
	var getTime = "";
	var tupian = $(".sprite img")
	var xiao = $(".hd div")

	function getImg() {
		imgIndex++;
		if (imgIndex > 5) {
			imgIndex = 0;
		}
		tupian.attr("src", myImg[imgIndex]);
		xiao.attr("class", "hddiv")
		xiao.eq(imgIndex).attr("class", "on hddiv")
	}
	getTime = setInterval(getImg, 2000);
	xiao.click(function() {
		imgIndex = $(this).index();
		tupian.attr("src", myImg[imgIndex]);
		xiao.attr("class", "hddiv")
		$(this).attr("class", "on hddiv")
	})
	$(".sprite").mouseover(function() {
		clearInterval(getTime);
	})
	$(".sprite").mouseout(function() {
		getTime = setInterval(getImg, 2000);
	})


	$(".td-1 a").click(function() {
		var index = $(this).index();
		$(".td-1 a").attr("class", "");
		$(this).attr("class", "tab");
		$(".tab-nav").hide();
		$(".tab-nav").eq(index).show();
	})

	$(".zuo div").click(function() {
		var index = $(this).index();
		$(".zuo div").attr("class", "");
		$(this).attr("class", "fkf");
		$(".sls ul").hide();
		$(".sls ul").eq(index).show();
	})

	$(".zuw div").click(function() {
		var index = $(this).index();
		$(".zuw div").attr("class", "");
		$(this).attr("class", "fkf");
		$(".sla ul").hide();
		$(".sla ul").eq(index).show();
	})
})
