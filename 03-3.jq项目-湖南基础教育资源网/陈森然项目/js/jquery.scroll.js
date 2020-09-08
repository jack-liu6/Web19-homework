;(function($){
	$.fn.extend({
		"scroll":function(options){
			// 默认的轮播图大小为790,390
			options=$.extend({
				width:790,
				height:390,
				speed:"normal"
			},options);
			// this===$("#box")
			this.css({
				width:options.width,
				height:options.height
			});
			// 胶卷
			var $ul=this.find("ul");
			// 胶片
			var $li=$ul.children();
			// 给胶片设置图片宽度和高度
			$li.css({
				width:options.width,
				height:options.height
			});
			// 通过JS动态复制第一张和最后一张胶片
			var $firstImg=$li.eq(0).clone(true);
			var $lastImg=$li.last().clone(true);
			// 将其插入到胶卷两侧
			$ul.append($firstImg);
			$ul.prepend($lastImg);
			// 再根据公式  胶片数量*胶片宽度将结果赋值给胶卷
			$ul.css({
				width:$ul.children().length*options.width,
				height:options.height,
				left:-options.width
			})
			// 获取左右箭头
			var $arrow=this.find(".arrow");
			$arrow.css("width",options.width);
			// $ul.width($ul.children().length*options.width);
			// 开始幻灯片的代码
			// 获取胶片的个数
			// 
			var $len=$ul.children().length;
			var count=1;
			$arrow.find("a:eq(0)").bind("click",function(){
				if(!$ul.is(":animated")){
					count++;
					$(".dot span").eq(count-2).addClass("on").siblings().removeClass("on")
					$ul.animate({
						left: -count*options.width
					},options.speed,function(){
						if(count==$len-1){
							count=1;
							$ul.css("left",-options.width);
							console.log(count);
							
						}
					});
				}
			})
			$arrow.find("a:eq(1)").bind("click",function(){
				if(!$ul.is(":animated")){
					count--;
					$(".dot span").eq(count-2).addClass("on").siblings().removeClass("on")
					$ul.animate({
						left: -count*options.width
					},options.speed,function(){
						if(count==0){
							$ul.css("left",-($len-2)*options.width);
							count=$len-2;	
							$(".dot span").eq(count).addClass("on").siblings().removeClass("on")	
						}
					});
					
				}
			})

			return this;
		}
	})
})(jQuery);