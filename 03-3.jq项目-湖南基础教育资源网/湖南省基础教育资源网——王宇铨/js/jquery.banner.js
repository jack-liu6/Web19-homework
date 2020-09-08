;(function($){
	$.fn.extend({

		slidebanner:function(option){
			option=$.extend({
				list:undefined,//轮播列表——输入CSS选择器
				tags:undefined,//导航按钮——CSS选择器
				tagsChecked:undefined,//导航按钮样式改变的Class——输入class
				tagsType:'mouseover',//选择导航按钮触发切换的方式
				next:undefined,//下一页按钮——输入CSS选择器
				prev:undefined,//上一页按钮——输入CSS选择器
				auto:undefined,//如果要轮播传入true值
				speed:'normal',//轮播动画的速度设置——"fast"(200) | "normal"(400) | "slow"(600)
				tittle:undefined,//如果轮播图有标题列表要同步滚动，则将此值输入标签列表（细分到每个列表元素的CSS选择器）
				width:undefined,//设置单个轮播元素的宽度
				time:3000,//设置轮播时间
				stopNow:false,//设置是否需要触摸立即停止动画
				startNow:false//设置是否需要触摸立即停止动画
			},option)
			//创建轮播列表
			var $list=this.find(option.list);
			// 复制最前一个和最后一个列表元素并插入到最后和最前
			var firstEle=$list.children(':first').clone(true);
			var lastEle=$list.children(':last').clone(true);
			$list.append(firstEle);
			$list.prepend(lastEle);

			// 获取列表元素个数
			var len=$list.children().length;

			var index=1;
			
			// 获取列表元素宽度
			if(option.width==undefined){
				var width=$list.children(':first').width();
			}else{
				var width=option.width;
			}
			
			// 设置轮播列表宽度，并且设置起始位置
			$list.width(len*width).css('left',-index*width);

			//如果有标题轮播则会创建轮播标题列表
			if(option.tittle){
				var $tittle=this.find(option.tittle);
			}
			
			// 轮播函数
			// 下一个
			function go(){
				index++;
				// 轮播边界设置 解决自动滚动触摸后的BUG
				if(index>len-1){
					index=1;
				}
				$list.stop().animate({left:-index*width},option.speed,'linear',tofirst);
				// 标题内容切换
				if(option.tittle){
					$tittle.hide();
					$tittle.eq(index).slideDown();
				}
				// 导航按钮样式改变
				if(option.tags){
					var tagsindex=index-1;
					if(tagsindex>$tags.length-1){
						tagsindex=0;
					}else if(tagsindex<0){
						tagsindex=$tags.length-1;
					}
					$tags.removeClass(option.tagsChecked);
					$tags.eq(tagsindex).addClass(option.tagsChecked);
				}
			};
			// 上一个
			function back(){
				index--;
				$list.stop().animate({left:-index*width},option.speed,'linear',tolast);
				// 标题内容切换
				if(option.tittle){
					$tittle.hide();
					$tittle.eq(index).slideDown();
				}
				// 导航按钮样式改变
				if(option.tags){
					var tagsindex=index-1;
					if(tagsindex<0){
						tagsindex=$tags.length-1;
					}
					$tags.removeClass(option.tagsChecked);
					$tags.eq(tagsindex).addClass(option.tagsChecked);
				}
			}
			// 返回第一个图片的回调函数
			function tofirst(){

				if(index>=len-1 || parseInt($list.css('left'))<=-(len-1)*width){

					index=1;
					$list.css('left',-index*width);
				}
			};
			// 返回最后一个图片的回调函数
			function tolast(){

				if(index<=0){

					index=len-2;
					$list.css('left',-index*width);
				}
			};
			

			// 导航标签触发切换
			if(option.tags){
				var $tags=this.find(option.tags);
				$tags.mouseover(function(){
					$tags.removeClass(option.tagsChecked);
					$(this).addClass(option.tagsChecked);
					index=$(this).index()+1;
					$list.stop().animate({left:-index*width},option.speed,'linear',tofirst);
					
					// 导航标签触发标题列表切换
					if(option.tittle){
					$tittle.hide();
					$tittle.eq(index).slideDown();
				}
				})
			}

			// 上下按钮切换
			if(option.next){
				var $prev=this.find(option.prev);
				var $next=this.find(option.next);

				$next.click(function(){
					if(!$list.is(':animated')){
						go();
					};

				});
				$prev.click(function(){
					if(!$list.is(':animated')){
						back();
					};

				});

			};

			// 如果要自动轮播
			if(option.auto==true){
				var timer=setInterval(go,option.time);
				// 设置立即开始轮播
				if(option.startNow==true){
					go();
				}
				// 设置触摸停止轮播
				this.mouseover(function(){
					clearInterval(timer);
					// 设置触摸立即停止动画
					if(option.stopNow==true){
						$list.stop();
					}
					
					
				});
				// 设置离开恢复轮播
				this.mouseout(function(){
					// 离开后立即完成当前动画
					if(option.startNow==true){
						$list.stop().animate({left:-index*width},option.speed,'linear',tofirst);
					}
					//设置定时器
					timer=setInterval(go,option.time);
				});
			}

		},
		// 滑动轮播图插件结束



		// tab切换页插件
		tabs:function(option){
			option=$.extend({
				tabBtn:undefined,
				tabList:undefined,
				checkedName:undefined,
				eventType:'click',
				animateType:'fade'
			},option)

			var $btn=this.find(option.tabBtn);
			var $list=this.find(option.tabList);

			$btn.bind(option.eventType,function(){
				$btn.removeClass(option.checkedName);
				$(this).addClass(option.checkedName);
				$list.hide();
				if(option.animateType=='fade'){
					$list.eq($(this).index()).fadeIn();
				};
				
			});

		},


	});



})(jQuery);