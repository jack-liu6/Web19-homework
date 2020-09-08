$(function(){
	// 轮播图
	function banner(list,next,prev,botombtn,bgcolor,isauto){
		var num=0;
		var $list=$(list);
		// 如果有底部按钮则输入底部按钮元素的选择路径
		if(botombtn){
			var $botBtn=$(botombtn);
		}
		// 如果要改变背景颜色则输入背景颜色元素的选择路径
		if(bgcolor){
			var $bg=$(bgcolor);
			var urlArr=['109951165241883687_bg.jpg','109951165241883843_bg.jpg','109951165242710165_bg.jpg','109951165244974365_bg.jpg','109951165245215750_bg.jpg','109951165245235314_bg.jpg','109951165245849885_bg.jpg','109951165246924424_bg.jpg']
		}
		// 下一个按钮的点击事件
		$(next).click(function(){
			num++;
			if (num>=$list.length) {
				num=0;
			};
			$list.hide();
			$list.eq(num).show();
			// 底部按钮的样式改变
			if(botombtn){
				$botBtn.children().removeClass('bannerBtnChecked');
				$botBtn.children().eq(num).addClass('bannerBtnChecked');
			}
			// 背景颜色的改变
			if(bgcolor){
				$bg.css("background-image","url(image/"+urlArr[num]+")")
			}
		});
		// 上一个按钮的点击事件
		$(prev).click(function(){
			num--;
			if (num<0) {
				num=$list.length-1;
			};
			$list.hide();
			$list.eq(num).show();
			// 底部按钮的样式改变
			if(botombtn){
				$botBtn.children().removeClass('bannerBtnChecked');
				$botBtn.children().eq(num).addClass('bannerBtnChecked');
			}
			// 背景颜色的改变
			if(bgcolor){
				$bg.css("background-image","url(image/"+urlArr[num]+")")
			}

		});
		// 底部按钮的事件
		if(botombtn){
			$botBtn.bind('mouseover',function(){
				$botBtn.children().removeClass('bannerBtnChecked');
				$(this).children().addClass('bannerBtnChecked');
				num=$(this).index();
				$list.hide();
				$list.eq(num).show();
				if(bgcolor){
				$bg.css("background-image","url(image/"+urlArr[num]+")")
			}
			})
		}
		// 如果要自动轮播则给isauto参数true
		if(isauto){
			var timer=setInterval(function(){
	            $(next).trigger("click");
	        },3000);
			$('.banner ul').mouseover(function(){
				clearInterval(timer);
			})
			$('.banner ul').mouseout(function(){
				timer=setInterval(function(){
		            $(next).trigger("click");
		        },3000);
			})
			
		}
		

	};
	banner('.banner ul li','.bannerNext','.bannerPrevious','.banner .bannerBtn span','.bannerBG',true);
	banner('.newdisc ul li','.newdisc .next','.newdisc .pre');

// 回到顶部
(function(){
	var $backTop=$('.backTop');
	var scrollTop=document.documentElement;
	document.body.onscroll=function(){
      if(scrollTop.scrollTop>=100){
      	$backTop.show();
      }else{
      	$backTop.hide();
      }
	}
	$backTop.click(function(){
		var top=scrollTop.scrollTop;
		var timer=setInterval(function(){
			top-=10;
			document.documentElement.scrollTop=top;
			if(top<=0){
	          clearInterval(timer);
	        }
		},1)
	})

})();





});
