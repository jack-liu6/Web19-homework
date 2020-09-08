//换色按钮
$("#skinblue").click(function(){
	$(this).toggleClass('check');
	if($(this).hasClass('check')){
		$("#skinorange").toggleClass('check1');
	};
	$('#bluecss').removeAttr('disabled');
	$('#orangecss').attr('disabled','disabled');
});

//换肤
$("#skinorange").click(function(){
	$(this).toggleClass("check1");
	if($(this).hasClass('check1')){
		$("#skinblue").toggleClass('check');
	};
	$('#orangecss').removeAttr('disabled');
	$('#bluecss').attr('disabled','disabled');
});

//城市区县切换
$(".logoul li").click(function(e){
	e.preventDefault();
	console.log($(this).index())
	$(".tabul>ul").eq($(this).index()).show().siblings().hide();
	$(".qusp").text($(this).text());
});

//显示隐藏二级菜单
$('#logoipt').click(function(e){
	e.stopPropagation();
	$('.logonav').toggle();
	return false;
});

//区县赋值给搜索框
$('.tabul ul li').click(function(e){
	e.preventDefault();
	$('#logoipt').val($(this).text());
	$('.logonav').css('display','none');
});

//搜索框获取焦点 失去焦点事件

document.getElementById('searchipt').onfocus=function(){
	this.value='';
};
document.getElementById('searchipt').onblur=function(){
	this.value='请输入您要查询的关键字';
};

$('.content_li').hover(function(e){
	e.stopPropagation();
	$(this).find('div').fadeToggle(400);
});

//应用按钮切换

$(".app_contentzuo ul>li").click(function(){
	$(this).addClass('app'+$(this).index()).siblings().removeClass();
	$(".app_contentyou>div").eq($(this).index()).show().siblings().hide();
});

//左右箭头

$("#app_btn1").click(function(){
	$(this).toggleClass("app_btnzuohei");
	$(this).next().toggleClass("app_btnyouhui");
	$("#list1").stop().animate({
		'left':0
	},600,function(){
		$(this).css("left",-770+'px')
	});
});

$("#app_btn11").click(function(){
	$(this).toggleClass("app_btnyouhui");
	$(this).prev().toggleClass("app_btnzuohei");
	$("#list1").stop().animate({
		'left':-1540
	},600,function(){
		$(this).css("left",-770+'px');
	})
});

$("#app_btn2").click(function(){
	$(this).toggleClass("app_btnzuohei");
	$(this).next().toggleClass("app_btnyouhui");
	$("#list2").stop().animate({
		'left':0
	},600,function(){
		$(this).css("left",-770+'px')
	});
});

$("#app_btn22").click(function(){
	$(this).toggleClass("app_btnyouhui");
	$(this).prev().toggleClass("app_btnzuohei");
	$("#list2").stop().animate({
		'left':-1540
	},600,function(){
		$(this).css("left",-770+'px');
	})
});

$("#app_btn3").click(function(){
	$(this).toggleClass("app_btnzuohei");
	$(this).next().toggleClass("app_btnyouhui");
	$("#list3").stop().animate({
		'left':0
	},600,function(){
		$(this).css("left",-770+'px')
	});
});

$("#app_btn33").click(function(){
	$(this).toggleClass("app_btnyouhui");
	$(this).prev().toggleClass("app_btnzuohei");
	$("#list3").stop().animate({
		'left':-1540
	},600,function(){
		$(this).css("left",-770+'px');
	})
});

$(".app_bg>img").stop().mouseover(function(e){
	$(".app_yc").stop().show();
	$(".app_yc").css("left",e.clientX);
	$(".app_yc").css("top",e.clientY);
});
// $(".app_bg>img").stop().mousemove(function(){
// 	$(".app_yc").css("left",e.clientX);
// 	$(".app_yc").css("top",e.clientY);
// });

$(".app_bg>img").stop().mouseout(function(e){
	$(".app_yc").stop().hide();
});

