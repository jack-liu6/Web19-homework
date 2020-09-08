//切换图片方法
function changeImg(a){  //a代表图片索引的一个数字
	$(".piclist li").eq(a).fadeIn().siblings().fadeOut();
	$(".dots span").eq(a).addClass("on").siblings().removeClass("on");
	
}

var index=0; 

changeImg(index); //页面刷新默认为第一张
var timer=null;

function autoPlay(){
	timer=setInterval(function(){
		index++;
		if(index==9){
			index=0;
		}
		changeImg(index); //更改轮播图
		changeBg(index); //更新背景图
		
	},2000)
}
autoPlay();  //启动定时器

//点击左按钮切换
$(".zuo").click(function(e){
	e.preventDefault(); //阻止默认行为
	clearInterval(timer);
	index--;
	if(index<0){
		index=8;
	}
	changeBg(index); //更新背景图
	changeImg(index);
	autoPlay(); //点击后恢复定时器
});

//点击右按钮切换
$(".you").click(function(e){
	e.preventDefault(); //阻止默认行为
	clearInterval(timer);
	index++;
	if(index>8){
		index=0;
	}
	changeBg(index); //更新背景图
	changeImg(index);
	autoPlay(); //点击后恢复定时器
});

//点击底部圆点切换
$(".dots span").click(function(){
	clearInterval(timer);
	index=$(this).index();
	changeBg(index); //更新背景图
	changeImg(index);
	autoPlay();
})

// 鼠标移入暂停 移出播放
$(".piclist").mouseover(function(e){
	clearInterval(timer);
}).mouseout(function(){
	autoPlay();
});
//hover方法
// $(".piclist").hover(function(){
// 	clearInterval(timer);
// },function(e){
// 	e.stopPropagation();
// 	autoPlay();
// });


//改变背景图
function changeBg(index){
	var arr=["url(image/bg/1.jpg)","url(image/bg/2.jpg)","url(image/bg/3.jpg)","url(image/bg/4.jpg)",
	"url(image/bg/5.jpg)","url(image/bg/6.jpg)","url(image/bg/7.jpg)",
	"url(image/bg/8.jpg)","url(image/bg/9.jpg)"]
	$(".slidebg").stop().fadeIn();
	$(".slidebg").css("background-image",arr[index])
	
}


//播放图标移入移出

$(".bf").hover(function(){
	$(this).addClass("bf1");
},function(){
	$(this).removeClass("bf1");
})

//滚动播放图标
var u=document.querySelectorAll(".rollul li");

$(".rollbf").hide();

$(".rollul li").eq(0).hover(function(){
	
	$(".rollbf").eq(0).show();
},function(){
	
	$(".rollbf").eq(0).hide();
})

$(".rollul li").eq(1).hover(function(){
	
	$(".rollbf").eq(1).show();
},function(){
	
	$(".rollbf").eq(1).hide();
})

$(".rollul li").eq(2).hover(function(){
	
	$(".rollbf").eq(2).show();
},function(){
	
	$(".rollbf").eq(2).hide();
})

$(".rollul li").eq(3).hover(function(){
	
	$(".rollbf").eq(3).show();
},function(){
	
	$(".rollbf").eq(3).hide();
})

$(".rollul li").eq(4).hover(function(){
	
	$(".rollbf").eq(4).show();
},function(){
	
	$(".rollbf").eq(4).hide();
})

$(".rollul li").eq(5).hover(function(){
	
	$(".rollbf").eq(5).show();
},function(){
	
	$(".rollbf").eq(5).hide();
})

$(".rollul li").eq(6).hover(function(){
	
	$(".rollbf").eq(6).show();
},function(){
	
	$(".rollbf").eq(6).hide();
})

$(".rollul li").eq(7).hover(function(){
	
	$(".rollbf").eq(7).show();
},function(){
	
	$(".rollbf").eq(7).hide();
})

$(".rollul li").eq(8).hover(function(){
	
	$(".rollbf").eq(8).show();
},function(){
	
	$(".rollbf").eq(8).hide();
})

$(".rollul li").eq(9).hover(function(){
	
	$(".rollbf").eq(9).show();
},function(){
	
	$(".rollbf").eq(9).hide();
})

$(".rollbf").hover(function(){
	
	$(this).addClass("rollbf1");
},function(){
	$(this).removeClass("rollbf1");
})




//滚动图

$(".zuo1").click(function(){
	
	$(".rollul").stop().animate({
		left:(-640)+'px'	
	},2000);
	if($(".rollul").css("left")==-640+'px'){
		$(".rollul").stop().animate({
			left:(-1280)+'px'	
		},2000);
	}
	
});

$(".you1").click(function(){
	$(".rollul").stop().animate({
		left:(0)+'px',
	},2000);
	if($(".rollul").css("left")==0+'px'){
		$(".rollul").stop().animate({
			left:(-640)+'px',
		},2000);
	}
});



// 滚动图左右按钮
$(".zuo1").hover(function(){
	$(this).addClass("zuo2");
},function(){
	$(this).removeClass("zuo2");
});

$(".you1").hover(function(){
	$(this).addClass("you2");
},function(){
	$(this).removeClass("you2");
});


//榜单图标移入移出

$(".bdsp1").hover(function(){
	$(this).addClass("bdsp1_1");
},function(){
	$(this).removeClass("bdsp1_1");
});

$(".bdsp2").hover(function(){
	$(this).addClass("bdsp2_2");
},function(){
	$(this).removeClass("bdsp2_2");
});

var li=document.querySelectorAll("dd li");
for(var i=0;i<li.length;i++){
	li[i].onmouseover=function(){
		this.lastElementChild.style.display="block";
	}
	li[i].onmouseout=function(){
		this.lastElementChild.style.display="none";
	}
}

// $(".noa").parent().hover(function(){
// 	$(".btn").show();
// },function(){
// 	$(".btn").hide();
// });


$(".btn1").hover(function(){
	$(this).addClass("btn1_1");
},function(){
	$(this).removeClass("btn1_1");
});

$(".btn2").hover(function(){
	$(this).addClass("btn2_2");
},function(){
	$(this).removeClass("btn2_2");
});


$(".youtop a").hover(function(){
	$(this).addClass("denglu");
},function(){
	$(this).removeClass("denglu");
});

//循环换背景色

var ruzhu=document.querySelectorAll(".listyou1 ul li");
for(var i=0;i<ruzhu.length;i++){
	ruzhu[i].onmouseover=function(){
		this.firstElementChild.className="ruzhu clearfix ruzhu1";
	};
	ruzhu[i].onmouseout=function(){
		this.firstElementChild.className="ruzhu clearfix";
	};
}

//申请框换背景
$(".sqa").hover(function(){
	$(this).addClass("sqa1");
},function(){
	$(this).removeClass("sqa1");
});

var searchipt=document.getElementById("searchipt");
searchipt.onfocus=function(){
	this.value="";
}
searchipt.onblur=function(){
	this.value="音乐/电台/视频/用户";
}


var time;
var offset=0;
function auto(){
	time=setInterval(function(){
		offset+=-2;
		if(offset<=-1290){
			offset=0;
		}
		$(".rollul").css("marginLeft",offset)
	},20);
}
// auto();

// $(".rollul").hover(function(){
// 	clearInterval(time);
// },function(){
// 	auto();
// });

// $(".zuo1").hover(function(){
// 	clearInterval(time);
// },function(){
// 	auto();
// });
// $(".you1").hover(function(){
// 	clearInterval(time);
// },function(){
// 	auto();
// });

//监听窗口滚动条
$(window).scroll(function(){
	if($(this).scrollTop()!=0){
		$(".backtop").show();
	}else{
		$(".backtop").hide();
	}
});

//点击回到顶部
$(".backtop").click(function(e){
	e.preventDefault();
	$("html,body").animate({scrollTop:0},1000);
});