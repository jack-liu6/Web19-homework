window.onload=function(){
	// 轮播图
	// oU1为胶片
	var $oU1=$(".lunbo>ul")
	// 设置胶片的宽度
	$oU1.width($oU1.children().length*226);
	//计数器
	var count=0;
	//thumb为下面123按钮
	var $thumb=$(".nav a");
	$thumb.on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
		count=$(this).index();
		$oU1.animate({
			"left":-226*count,
		})
	})
	// 定时器效果
	var timer=setInterval(function(){
		count++;
		if(count==$thumb.length){
			count=0;
		};
		$thumb.eq(count).trigger("click");
	},2000);
	// 鼠标悬浮停止播放
	
}