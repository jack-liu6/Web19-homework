$(function() {
	//鼠标摸上导航栏变颜色
	$('.nav2_ul li>a').bind("mouseover",function() {
		$(this).css({
			"background":"#ffffff",
			"color":'#016633',
			"font-size":"17",
			"border":"3px solid #9CD27F"
		});
	});
	$('.nav2_ul li>a').bind("mouseout",function() {
		$(this).css({
			"background":"",
			"color":'',
			"font-size":"",
			"border":""
		});
	});

	//显示隐藏下拉框
	var flag=true;
	$(".select>img").bind("click",function() {
		if (flag) {
			$(".select>.oul").css('display',"block");
			flag=false;
		}else{
			$(".select>.oul").css('display',"none");
			flag=true;
		}
	});

	// 选择下拉框内容
	$('.oul>li').bind("click",function() {
		$('.select>span').text($(this).text());
	});


	//显示二级菜单
	$('.lii:first').attr("id","on");
	$('.lii').bind("mouseover",function() {
		$(this).attr("id","on");
		$(this).children().css("display",'block');
		$(this).children().parent().siblings().children().removeAttr("id");
		$(this).children().parent().siblings().children().css("display",'none');
		
	});
	$('.lii').bind("mouseout",function() {
		$(this).removeAttr("id");
	});
	
});