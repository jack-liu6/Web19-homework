//注册按钮切换样式

$(".topsp1").on("click",function(){
	$(this).toggleClass("bluebg").siblings().toggleClass("graybg");
	$(this).toggleClass("graybg").siblings().toggleClass("bluebg");
	if($('.topsp1').eq(0).hasClass("bluebg")){
		$(".bluejiao").show();
	}else{
		$(".bluejiao").hide();
	};
	if($('.topsp1').eq(1).hasClass("bluebg")){
		$(".bluejiao1").show();
	}else{
		$(".bluejiao1").hide();
	};
	$(".bdzuo>div").eq($(this).index()).show().siblings().hide();
});

//表单验证

$("#recform").validate({
	rules:{
		username:{
			required:true,
			minlength:4
		},
		password:{
			required:true,
			minlength:6,
			maxlength:12
		},
		confirm_psd:{
			required:true,
			equalTo:"#password"
		},
		realname:{
			required:true
		},
		concredit:{
			required:true,
			minlength:18
		},
		sex:{
			required:true
		},
		email:{
			required:true,
			email:true
		},
		question:{
			required:true
		},
		answer:{
			required:true
		}
	},
	messages: {
		username:{
			required:'用户名不能为空',
			minlength:'用户名不少于4位'
		},
		password:{
			required:'密码不能为空',
			minlength:'密码长度必须为6-12位之间',
			maxlength:'密码长度必须为6-12位之间'
		},
		confirm_psd:{
			required:'请确认密码',
			equalTo:'两次密码不一致'
		},
		realname:{
			required:'请输入真实姓名'
		},
		concredit:{
			required:"请输入身份证号",
			minlength:'身份证号格式错误'
		},
		sex:{
			required:'请确认性别'
		},
		email:{
			required:'邮箱不能为空',
			email:'邮箱格式错误'
		},
		question:{
			required:'请输入问题'
		},
		answer:{
			required:'请输入答案'
		}
	}
});


var ipt=document.getElementById("birthday");
        laydate.render({
          // elem: ipt,
          elem: '#birthday'
		  // elem: '#password'
		  // ,show: true
		  ,trigger: 'click'
        });
		
		laydate.render({
		  // elem: ipt,
		  elem: '#birthday1'
		  // elem: '#password'
		  // ,show: true
		  ,trigger: 'click'
		});


//教师验证

$("#recform1").validate({
	rules:{
		username1:{
			required:true,
			minlength:4
		},
		password1:{
			required:true,
			minlength:6,
			maxlength:12
		},
		confirm_psd1:{
			required:true,
			equalTo:"#password"
		},
		realname1:{
			required:true
		},
		concredit1:{
			required:true,
			minlength:18
		},
		sex1:{
			required:true
		},
		email1:{
			required:true,
			email:true
		},
		question1:{
			required:true
		},
		answer1:{
			required:true
		}
	},
	messages: {
		username1:{
			required:'用户名不能为空',
			minlength:'用户名不少于4位'
		},
		password1:{
			required:'密码不能为空',
			minlength:'密码长度必须为6-12位之间',
			maxlength:'密码长度必须为6-12位之间'
		},
		confirm_psd1:{
			required:'请确认密码',
			equalTo:'两次密码不一致'
		},
		realname1:{
			required:'请输入真实姓名'
		},
		concredit1:{
			required:"请输入身份证号",
			minlength:'身份证号格式错误'
		},
		sex1:{
			required:'请确认性别'
		},
		email1:{
			required:'邮箱不能为空',
			email:'邮箱格式错误'
		},
		question1:{
			required:'请输入问题'
		},
		answer1:{
			required:'请输入答案'
		}
	}
});