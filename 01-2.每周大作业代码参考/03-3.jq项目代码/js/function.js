//通用JS文件，请将尽可能多的JS代码功能集中于此，以减少服务器连接并发数
//加入收藏
function bookmarkit() {
		if(document.all) {
			window.external.addFavorite("http://www.hnzyzx.com/","湖南省基础教育资源网")
		}else if(window.sidebar) {
			window.sidebar.addPanel("湖南省基础教育资源网","http://www.hnzyzx.com/",'')
		}else { 
         alert('您的浏览器不支持自动添加收藏夹，请按 Ctrl + D手动添加。');
    }
}

// tab标签页 单页面可重复使用
$(function(){
    function tabs(tabTit,on,tabCon){
	$(tabCon).each(function(){
	  $(this).children().eq(0).show();
	  });
	  
	$(tabTit).each(function(){
	  $(this).children().eq(0).addClass(on);
	  });
	  
     $(tabTit).children().click(function(){   //hover  or click
        $(this).addClass(on).siblings().removeClass(on);
         var index = $(tabTit).children().index(this);
         $(tabCon).children().eq(index).show().siblings().hide();
    });
	}
  tabs(".ca","on",".cTab");
  tabs(".tabTt","tabOn",".tabBd");

});

		
//滚动公告
function autoScroll(obj){ 
    $(obj).find(".scrollList").animate({ 
        marginTop : "-24px" 
    },500,function(){ 
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this); 
    }) 
} 
$(function(){ 
    setInterval('autoScroll(".notice")',3000) 
}) 

// select 选择器
$.divselect = function(divselectid,inputselectid) {
	var inputselect = $(inputselectid);
	$(divselectid+" cite").click(function(){
		var ul = $(divselectid+" ul");
		if (ul.is(":hidden")) {
			ul.slideDown("fast");
		} else {
			ul.hide();
		}
	});
	$(divselectid+" ul li a").click(function(){
		var txt = $(this).text();
		$(divselectid+" cite").html(txt);
		var value = $(this).attr("selectid");
		inputselect.val(value);
		$(divselectid+" ul").hide();
		
	});
	//$(document).click(function(){
	//	$(divselectid+" ul").hide();
	//});
};
//清除搜索提示关键字
function search(){
		var keyword=$("#keyword").val();
		var purpose=2;
		if(keyword=="请输入搜索关键字"){
			keyword="";
		}else{
			keyword=encodeURI(keyword);
		}
		//window.location.href="/ressearch.jspx?q="+keyword+"&purpose="+purpose;
}
$(function() {
	$(".search .txt").focus(function(){
			  $(this).addClass("focus");
			  if($(this).val() ==this.defaultValue){  
				  $(this).val("");           
			  } 
		}).blur(function(){			 
			 if ($(this).val() == '') {
				 $(this).removeClass("focus");
				$(this).val(this.defaultValue);
			 }
		});	
		// 回车响应搜索
		$("#keyword").keyup(function(event) {
			if (event.keyCode == 13) {
				search();
			}
		});
});		
//调用区域选择、搜索下拉框、导航二级菜单等
$(function(){
    dropdowncontent.init("area_a", "right-bottom", 800)	
    $.divselect("#divselect","#inputselect");	
	$('ul.navInner').superfish();
	//$('.appjcarousel').jcarousel({wrap: 'circular'}); 已经移植到需要调用该滚动插件的页面
	$('#stat li:odd').css("background-color","#f6f6f6");
});

//学科资源更多学科下拉菜单
$(document).ready(function() {
	/*
		o1: 标签元素
		o2: 内容元素
		c : 标签元素显示用样式
		e : 触发事件 如 click mouseover 
	*/
	function tab1(o1,o2,c,e){
		o1.each(function(i){
			$(this).bind(e,function(){
				o2.hide().eq(i).show();
				o1.removeClass(c);
				$(this).addClass(c);
			})
			if ($(this).hasClass(c)) {
				$(this).addClass(c);
				o2.hide().eq(i).show();
			}
		})
	}		
	//调用函数
	tab1($(".xk-tab1 a"),$(".xk-tab1-bd .showThis"),"now","click");	//学科资源切换列表1：小学
	tab1($(".xk-tab2 a"),$(".xk-tab2-bd .showThis"),"now","click");	//学科资源切换列表2：初中
	tab1($(".xk-tab3 a"),$(".xk-tab3-bd .showThis"),"now","click");	//学科资源切换列表3：高中
});

$(document).ready(function(){
	$("#1").mouseenter(function(){
		t_delay= setTimeout(function(){
			$("#lr_1").fadeIn("slow");
		},100);
	});
	$(".xk-tb").mouseleave(function(){
		clearTimeout(t_delay);
		$("#lr_1").fadeOut("slow");
	});
	$("#2").mouseenter(function(){
		t_delay= setTimeout(function(){
			$("#lr_2").fadeIn("slow");
		},100);
	});
	$(".xk-tb").mouseleave(function(){
		clearTimeout(t_delay);
		$("#lr_2").fadeOut("slow");
	});
	$("#3").mouseenter(function(){
		t_delay= setTimeout(function(){
			$("#lr_3").fadeIn("slow");
		},100);
	});
	$(".xk-tb").mouseleave(function(){
		clearTimeout(t_delay);
		$("#lr_3").fadeOut("slow");
	});
});
