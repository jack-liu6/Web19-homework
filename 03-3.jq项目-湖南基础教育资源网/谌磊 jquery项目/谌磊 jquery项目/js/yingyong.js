
$(function() {
	$(".home div:first").click(function() {
		window.location.replace("首页.html");
	})
	// 下拉菜单
	$("#dell").hover(function() {
		$('.fu').stop().slideDown();
	}, function() {
		$('.fu').stop().slideUp();
	})
	
	$(".dian").mouseover(function() {
		var left= $(this).offset().left
		   var top = $(this).offset().top - $(window).scrollTop() + $(this).height()
		   var odiv=$(this).children(":last");
		   console.log(odiv)
	odiv.css("top",top+10)
		odiv.css("left",left)
		odiv.show()
	})
	$(".dian").mouseout(function() {
		$(".xuan").hide()
	})

	$(".xin-1 div").click(function() {
		var index = $(this).index();
		$(".xin-1 div").attr("class", "foe");
		if (index == 1) {
			$(this).attr("class", "fota");
		} else if (index == 2) {
			$(this).attr("class", "fotb");
		} else if (index == 3) {
			$(this).attr("class", "fotc");
		} else if (index == 0) {
			$(this).attr("class", "fote");
		}
		$(".rigt").hide().eq(index).slideDown();
	})

	$(".gla div").click(tab);

	function tab(params) {
		var a = $(this).index();
		var yidong = $(this).parent().parent().next()
		console.log(yidong)
		yidong.stop().animate({
			"left": a * -807
		});
	}
	
	$(".head-3").click(function(){
		$('#head').attr('href','css/orange.css');
	})
	$(".head-4").click(function(){
		$('#head').attr('href','css/blue.css');
	})
})
