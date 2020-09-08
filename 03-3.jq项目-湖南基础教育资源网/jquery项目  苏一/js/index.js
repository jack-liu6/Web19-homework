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

//轮播图
layui.use('carousel', function() {
				var carousel = layui.carousel;
				//建造实例化
				carousel.render({
					elem: '#test1',
					width: '502px', //设置背景容器的宽度
					height:'234px',
					arrow: 'always', //始终显示箭头,不会消失
					// anim: 'updown' //切换动画方式:anim
					//indicator:'outside',
					// indicator: 'outside' //这个属性：小圆点在外面	
				});
			});
			
			
//第一个tab切换

$('.sm').click(function(){
	$(this).addClass('on').siblings().removeClass('on');
	$('.tab>ul').eq($(this).index()).show().siblings().hide();
});


//scroll事件

$('.left').click(function(){
	$(".scrollul").stop().animate({
		"left":-1260
	},600,function(){
		$(".scrollul").css("left",-630)
	});
});

$('.right').click(function(){
	$(".scrollul").stop().animate({
		"left":0
	},600,function(){
	    $(".scrollul").css("left",-630)
	});
});

//scroll 切换

$(".app>a").click(function(e){
	e.preventDefault();
	$(this).addClass("appon").siblings().removeClass('appon');
	$(".scr>ul").eq($(this).index()).show().siblings().hide();
});

$('.downloadtop>span').click(function(){
	$(this).addClass('appon').siblings().removeClass('appon');
	$('.downtab>.ren').eq($(this).index()).show().siblings().hide();
});

$('.xktop>span').click(function(){
	$(this).addClass('appon').siblings().removeClass('appon');
	$('.xktab>div').eq($(this).index()).show().siblings().hide();
});

$('.sanbtn>span').click(function(){
	$(this).addClass('sanon').siblings().removeClass('sanon');
	$('.sanpic>ul').eq($(this).index()).show().siblings().hide();
});


//年月日

var d=new Date();

document.querySelector(".nian").innerText=d.getFullYear();
document.querySelector('.yue').innerText=d.getMonth()+1;
document.querySelector(".ri").innerText=d.getDate();
  var week=d.getDay();

        switch (week) {
            case 0:
                week="日"
                break;
            case 1:
                week="一"
                break;
            case 2:
                week="二"
                break;
            case 3:
                week="三"
                break;
            case 4:
                week="四"
                break;
            case 5:
                week="五"
                break;   
            case 6:
                week="六"
                break;             
            default:
                // statements_def
                break;
        }
document.querySelector(".xq").innerText='星期'+week;

//刷新通知
var index=1;
var arr=['关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知1',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知2',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知3',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知4',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知5',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知6',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知7',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知8',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知9',
'关于召开湖南省2013年中小学部分学科教学资源开发研讨会的通知10'
];
var a=document.querySelector(".new").previousElementSibling;
console.log(a.innerText)

setInterval(function(){
	index++;
	if(index>10){
		index=1;
	}
	$(".new").prev().text(arr[index]);
	$(".new").next().text("0"+index+"/10");
	// a.innerText=arr[index];
},2000);


$(".loginsp1").click(function(e){
	e.preventDefault();
	confirm("首页登录功能未开放，请前往登录页进行登录~");
	self.location='login.html';
});