$(function(){
	// tab切换也
	function tabs(ele){
		var $tabele=$(ele);
		var $btn=$tabele.find('h4 span');
		var $list=$tabele.find('.tabList');
		
		$btn.click(function(){
			// console.log($btn);
			// console.log($(this).index())
			$btn.removeClass('tabChecked');
			$(this).addClass('tabChecked');
			$list.hide();
			$list.eq($(this).index()).fadeIn();
		});

	};
	tabs('.chengguo');
	tabs('.jiaoyanTabs');
	tabs('.ziyuantabs');
	tabs('.jxsheji');
	tabs('.luntan');
	tabs('.student');
	tabs('.mkMenuTabs');

	// $('.mkMenuTabs').children('ul').click(function(){
	// 	console.log($(this).index());
	// })
	// $('.mkMenuTabs .mkMenuList').click(function(){
	// 	console.log($(this).index());
	// })
	
	function lv2Menu(ele){
		var $menu=$(ele);
		var $btn=$menu.find('.lv2MenuBtn li');
		var $lv2List=$menu.find('.lv2Menu');

		$btn.mouseover(function(){
			$btn.removeClass('lv2Checked');
			$(this).addClass('lv2Checked');
			$lv2List.hide();
			$lv2List.eq($(this).index()).show();
		});


	};
	lv2Menu('.lv2Menu1');
	lv2Menu('.lv2Menu2');

	function banner(){
		var $list=$('.bannerList');
		var $btn=$('.bannerBtn');
		var $tittle=$('.tittle span');
		var index=0;

		function go(){
			$list.hide();
			$list.eq(index).fadeIn();
			$btn.removeClass('bannerChecked');
			$btn.eq(index).addClass('bannerChecked');
			$tittle.hide();
			$tittle.eq(index).slideDown();
		};

		var timer=setInterval(function(){
			index++;
			if(index>$list.length-1){
				index=0;
			}
			go();

		},3000);


		$('.banner').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(function(){
				index++;
				if(index>$list.length-1){
					index=0;
				}
				go();

			},3000);
		});
		// $('.banner').mouseover(function(){
		// 	clearInterval(timer);
		// });
		// $('.banner').mouseout(function(){
		// 	timer=setInterval(function(){
		// 		index++;
		// 		if(index>$list.length-1){
		// 			index=0;
		// 		}
		// 		go();

		// 	},3000);
		// });

		$btn.mouseover(function(){
			if(!$list.is(':animated') && !$tittle.is(':animated')){
				index=$(this).index();
				go();
			}
			
		});


	};
	banner();

	(function(){
		var $list=$('.radio a');
		var index=0;
		var timer=setInterval(function(){
			index++;
			if(index>$list.length-1){
				index=0;
			}

			$list.hide();
			$list.eq(index).slideDown();

		},3000);

		$list.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(function(){
				index++;
				if(index>$list.length-1){
					index=0;
				}

				$list.hide();
				$list.eq(index).slideDown();

			},3000);
		});

	})();

})