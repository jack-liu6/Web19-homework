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


	
	// 列表上下切换
	function listSwitch(father){
		var $father=$(father);
		var $prev=$father.find('.prev');
		var $next=$father.find('.next');
		var $list=$father.find('.appBannerList');
		var index=0;

		$next.click(function(){
			$prev.removeClass('disable');
			index++;
			if(index==$list.length-1){
				// console.log(index)
				$(this).addClass('disable');
				
			}
			if(index>$list.length-1){
				index=$list.length-1;
				return false;
			}
			$list.hide();
			$list.eq(index).fadeIn();

		});
		$prev.click(function(){
			$next.removeClass('disable');
			index--;
			if(index==0){
				// console.log(index)
				$(this).addClass('disable');
				
			}
			if(index<0){
				index=0;
				return false;
			}
			$list.hide();
			$list.eq(index).fadeIn();

		});



	};

	listSwitch('.recappBanner');
	listSwitch('.freeappBanner');
	listSwitch('.feeappBanner');
	listSwitch('.recappBannerOnly');
	listSwitch('.freeappBannerOnly');
	listSwitch('.feeappBannerOnly');




	// 详情标签显示
	(function(){
		$('.appBannerList>div').hover(function(){
			// $(this).children(':last').show(400);
			$(this).children(':last').stop().animate({
				height:'238px',
				width:'285px',
				padding:'18px 15px 0'
			});
			// $(this).children(':last').slideDown();
		},function(){
			// $(this).children(':last').hide(200);
			$(this).children(':last').stop().animate({
				height:0,
				width:0,
				padding:0
			});
			// $(this).children(':last').slideUp(200); 
		})


	})();

	// 应用列表切换
	$('.app').tabs({
		tabBtn:'.appBtn li',
		tabList:'.appList',
		checkedName:'appBtnChecked'
	});


});