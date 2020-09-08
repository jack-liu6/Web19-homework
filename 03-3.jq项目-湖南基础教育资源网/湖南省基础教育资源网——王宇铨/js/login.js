$(function(){


	// 随即验证码
	function change(){
		var yzm="";
		var arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		for(var i=0;i<4;i++){
			yzm+=arr[Math.round(Math.random()*35)];
		}
		document.getElementById('yzmpic').innerText=yzm;	
	};
	change();

	$('#yzmpic').click(function(){
		change();

	});

	// 验证码验证
	$('#login').submit(function(){
		if($('#yzm').val()!=$('#yzmpic').text()){
			alert('验证码错误');
			return false;
		};
		
	});


});