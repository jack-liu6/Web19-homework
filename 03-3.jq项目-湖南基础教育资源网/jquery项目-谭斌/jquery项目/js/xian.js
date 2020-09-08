$(function(){
		$(".dinz ol").click(function(){
			var i=$(this).index();
			$(".dinz div").eq(i).show().parent().siblings().children().hide();
		})
		
		$(".dinz ol").eq(0).click(function(){
			$(".diny1").animate({
				top:0,
			},0)
		})
		$(".dinz ol").eq(2).click(function(){
			$(".diny1").animate({
				top:-225,
			},0)
		})
		$(".dinz ol").eq(3).click(function(){
			$(".diny1").animate({
				top:-445,
			},0)
		})
		
		
		
		
	
			var a=0;
			$(".tui-4").click(function(){
				a++;
				if(a>1){
					a=0
				}
				$(".ma").animate({
					marginLeft:-598*a,
				})
			})
			$(".tui-5").click(function(){
				a--;
				if(a<0){
					a=1
				}
				$(".ma").animate({
					marginLeft:-598*a,
				})
			})
			
		
})