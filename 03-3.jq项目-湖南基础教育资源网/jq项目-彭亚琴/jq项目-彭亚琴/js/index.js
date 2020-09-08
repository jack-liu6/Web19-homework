$(function() {
	//设置顶部div的时间
	function getdate() {
		var d=new Date();
		var year=d.getFullYear();
	    var m=d.getMonth()+1;
	    var day=d.getDate();
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
                break;
        }
        return year+"年"+m+"月"+day+"日 "+" 星期"+week;
	}
	setInterval(function(){
        $("#timer").text(getdate());
    },1000);


	//点击切换为蓝色
	$('.blue').click(function() {
		$("head>link[id]").attr({
			href:"css/index.blue.css"
		});
		$(this).css({
			width:'18px',
			height:'18px',
			'background-position':'-18px -22px'
		});
		$('.orange').css({
			width:'18px',
			height:'18px',
			'background-position':'0 -49px'
		});
	});
	//点击切换为橙色
	$('.orange').click(function() {
		$("head>link[id]").attr({
			href:"css/index.orange.css"
		});
		$(this).css({
			width:'18px',
			height:'18px',
			'background-position':'-18px -49px'
		});
		$('.blue').css({
			width:'18px',
			height:'18px',
			'background-position':'0 -22px'
		});
	});


    //地区选择下拉框
    var flag=true;
    $('.slt>img').bind('click',function() {
    	if (flag) {
    		$('.region').css('display','block');
    		flag=false;
    	}else{
    		$('.region').css('display','none');
    		flag=true;
    	}
    });
    //显示地址
    $(".region>.shi li").bind("click",function() {
    	$(".slt>.spn1").text($(this).text());
    });
   

   //input框失去焦点与获取焦点
   $('.ipt').focus(function() {
   		$(this).val("");
   });
   $('.ipt').blur(function() {
   		$(this).val("请输入您要查询的关键字");
   });


   //导航栏二级菜单显示
   $(".nav2_ul>.li").mouseover(function() {
   		$(this).children().css('display',"block");
   });
   $(".nav2_ul>.li").mouseout(function() {
   		$(this).children().css('display',"none");
   });


   //市县切换页
   $(".sx>span").click(function() {
   		var a=$(this).index();
   		$(this).attr('class',"bg").siblings("span").removeAttr("class"); 
   		$('.divr .under>.ul1').eq(a).css('display',"block").siblings(".ul1").css('display',"none");
   });


   //div4tab切换页
   $('.user').click(function() {
   		var a=$(this).index();
   		$(this).attr('id',"tabcolor").siblings(".user").removeAttr("id"); 
   		$('.div5 .under').eq(a).css('display',"block").siblings(".under").css('display',"none");   
   	});



   //书籍的轮播图
   $('.imgr').click(function(){
   		$(".books").animate({"left":"-630"},1000);
   });
   $('.imgl').click(function(){
   		$(".books").animate({"left":"0"},1000);
   });


   //书籍的tab切换
   $('.use').click(function() {
   		var a=$(this).index();
   		$(this).attr('id',"tabcolor2").siblings(".use").removeAttr("id"); 
   		$('.books').eq(a).css('display',"block").siblings(".books").css('display',"none");   
   	});


   //底部tab切换页
   $(".tab").click(function() {
   		var a=$(this).index();
   		$(this).attr('id',"tab").siblings(".tab").removeAttr("id"); 
   		// $('.divr .under>.ul1').eq(a).css('display',"block").siblings(".ul1").css('display',"none");
   });

});