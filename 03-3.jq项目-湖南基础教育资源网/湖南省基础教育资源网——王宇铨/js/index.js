$(function(){


	// 时间显示
	function getdate(){
		var date=new Date();
		var year=date.getFullYear();
		var month=toZero(date.getMonth()+1);
		var day=toZero(date.getDate());
		var hour=date.getHours();
		var min=toZero(date.getMinutes());
		var sec=toZero(date.getSeconds());
		var week=date.getDay();
		var weekarr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
		function toZero(a){
			return a>9?a:'0'+a;
		};
		// if(month<10){
		// 	month='0'+month;
		// };
		// if(day<10){
		// 	day='0'+day;
		// };
		
		// if(min<10){
		// 	min='0'+min;
		// };
		// if(sec<10){
		// 	sec='0'+sec;
		// };
		if(hour<=12){
			
			var ap='(AM)';
			var hour12=hour;
		};
		
		if(hour>12){
			var hour12=hour-12;
			var ap='(PM)';
		};
		if(hour12<10){
			hour12='0'+hour12;
		};

		return year+'年'+month+'月'+day+'日'+' '+weekarr[week];

	}
	$('#time').text(getdate());

	

	// 广播
	(function(){
		var index=0;
		var $List=$('.detailF1 .radio ul li');

		// 设置总条数的显示
		var len= $List.length;
		if(len<10){
			len='0'+len;
		}
		$('#radioLen').text('/'+len);

		
		// 轮播函数
		function turn(){
			index++;
			if(index>$List.length-1){
				index=0;
			}
			$List.hide();
			$List.eq(index).slideDown();
			// 设置显示当前条目录
			var listNum=index+1;
			if(listNum<10){
				listNum='0'+listNum;
			}
			$('#radioIndex').text(listNum);
			
		};

		var timer=setInterval(turn,3000);
		$List.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(turn,3000);
		});


	})();

	// 随即验证码
	function change(){
		var yzm="";
		var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		for(var i=0;i<4;i++){
			yzm+=arr[Math.round(Math.random()*35)];
		}
		document.getElementById('yzmPic').innerText=yzm;	
	};
	change();

	$('#yzmPic').click(function(){
		change();

	});
	// 验证码验证
	$('.pubBorderInside').submit(function(){
		if($('#yzm').val()!=$('#yzmPic').text()){
			alert('验证码错误');
			return false;
		}
	})


	// 轮播图
	$('.banner').slidebanner({
		list:'.bannerList',
		tags:'.bannerBtns div',
		tagsChecked:'bannerChecked',
		auto:true,
		speed:'normal',
		tittle:'.bannerTittle li',
		tagsType:'mouseover',
		width:502,
	});

	// 三类课堂轮播
	$('.internetClass1').slidebanner({
		list:'.slClassBannerList',
		auto:true,
		width:714,
		speed:5000,
		time:5015,
		stopNow:true,
		startNow:true
	});
	$('.internetClass2').slidebanner({
		list:'.slClassBannerList',
		auto:true,
		width:714,
		speed:5000,
		time:5015,
		stopNow:true,
		startNow:true
	});
	$('.internetClass3').slidebanner({
		list:'.slClassBannerList',
		auto:true,
		width:714,
		speed:5000,
		time:5015,
		stopNow:true,
		startNow:true
	});

	//tab切换页
	// 各地活跃度排行榜
	$('.cityBang').tabs({
		tabBtn:'.tabsBtn span',
		tabList:'.tabsList',
		checkedName:'tabsbtnChecked'
	});
	// 用户排行
	$('.userTabs').tabs({
		tabBtn:'.appTabsBtn',
		tabList:'.tabsList',
		checkedName:'appTabsChecked'
	});
	// 分类切换页
	$('.typeTabs').tabs({
		tabBtn:'.typeTabsBtn',
		tabList:'.typeTabsList',
		checkedName:'appTabsChecked'
	});
	// 三类课堂
	$('.sanleiClass').tabs({
		tabBtn:'.tabsBtn span',
		tabList:'.tabsList',
		checkedName:'tabsbtnChecked'
	});

	// 应用切换页tab部分
	$('.appTabs').tabs({
		tabBtn:'.appTabsBtn',
		tabList:'.appTabsList',
		checkedName:'appTabsChecked'
	});
	// 应用切换页轮播列表部分
	$('.appBanner1').slidebanner({
		list:'.appBannerList',
		next:'.nextBtn',
		prev:'.prevBtn',
		width:683,
	});
	$('.appBanner2').slidebanner({
		list:'.appBannerList',
		next:'.nextBtn',
		prev:'.prevBtn',
		width:683,
	});
	$('.appBanner3').slidebanner({
		list:'.appBannerList',
		next:'.nextBtn',
		prev:'.prevBtn',
		width:683,
	});
	

});