$(function(){

	// 肤色切换
	(function(){
		var $btn=$('.topBar .style span i');
		var hrefArr=["css/index-blueStyle.css","css/index-orangeStyle.css"]
		$btn.click(function(){
			$btn.removeClass('styleChecked');
			$(this).addClass('styleChecked');
			$('head .styleSrc').attr('href',hrefArr[$(this).index()])
		});

	})();


	// 城市选择
	(function(){
		// 二级菜单显示和最终选择内容接收的元素
		var $select=$('.address .addressSelect');
		// 选项面板
		var $bord=$('.address .addressOption');
		// 城市按钮 也是三级菜单的打开按钮
		var $city=$('.address .city span');
		// 区县列表
		var $areaList=$('.address .areaPart .areaList');
		// 区县按钮
		var $area=$('.address .areaPart .areaList span');

		// 开关城市选择面板
		$select.click(function(){
			// $bord.slideDown();
			$bord.slideToggle(200);
			return false;
		});
		// $select.slideToggle();
		// $bord.click(function(){
		// 	$bord.show();
		// });
		$(document.body).click(function(){
			$bord.slideUp(200);
			
		});
		
		// 点击城市切换区县列表
		$city.click(function(){
			$city.removeClass('cityChecked');
			$(this).addClass('cityChecked');
			$areaList.hide();
			$areaList.eq($(this).index()).show();
			return false;
		});
		// 选择区县 修改选择框内的内容并关闭列表
		$area.click(function(){
			var content=$('.address .city .cityChecked').text()+$(this).text();
			// console.log(content);
			$select.text(content);
			$bord.hide();
			return false;
		});
		


	})();

	// 导航二级菜单
	(function(){
		$('.lv2MenuBtn').hover(function(){
			$(this).addClass('lv2MenuBtnChecked');
			$(this).find('.lv2MenuList').stop().slideDown(200);
		},function(){
			
			$(this).find('.lv2MenuList').stop().slideUp(200,function(){
				$(this).parent().removeClass('lv2MenuBtnChecked');
				
			});
		});
	})();



	

});