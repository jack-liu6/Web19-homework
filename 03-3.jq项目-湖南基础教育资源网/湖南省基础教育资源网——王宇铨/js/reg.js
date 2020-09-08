$(function(){


	// tab切换
	$('.regBody').tabs({
		tabBtn:'.tabsBtn span',
		tabList:'.tabsList',
		checkedName:'tabsChecked'
	});

	// 生日选择
	laydate.render({
	  elem: '#birthday'
	  ,btns: ['confirm']
	});


	// 表单验证
	
	
	// 设置验证
	$('#studentReg').validate({
		// 设置验证错误位置
		errorPlacement: function(error, element) {
			// Append error within linked label
			$( element ).parent().children(':last').replaceWith( error );
		},
		// 验证规则设置
		rules:{

			user:{
				required:true,
				"userName":true,
                // minlength:2
			},
			password:{
				required:true,
                minlength:6,
                maxlength:12
			},
			password2:{
				required:true,
                minlength:6,
                maxlength:12,
                equalTo: "#password"
			},
			realName:{
				required:true,
			},
			question:{
				required:true,
			},
			answer:{
				required:true,
			},


		},
		// 验证错误信息设置
		messages: {
	        user:{
	            required:"用户名必填！",
	            "userName":"只允许为字母、数字和下划线"
	            // minlength:"只允许为字母、数字和下划线"
	        },
	        password:{
	            required:"密码必填！",
	            minlength:"密码长度必须在6-12个字符之间",
	            maxlength:"密码长度必须在6-12个字符之间"
	        },
	        password2:{
	            required:"密码必填！",
	            minlength:"密码长度必须在6-12个字符之间",
	            maxlength:"密码长度必须在6-12个字符之间",
	            equalTo:'密码不一致'
	        },
          	realName:{
				required:"用户名必填！",
			},
			sex:{
	            required:"请选择性别！",
	            // minlength:"只允许为字母、数字和下划线"
	        },
	        question:{
				required:"验证问题必填！",
			},
			answer:{
				required:"验证答案必填！",
			},

          
        }
	});


	$('#teacherReg').validate({
		// 设置验证错误位置
		errorPlacement: function(error, element) {
			// Append error within linked label
			$( element ).parent().children(':last').replaceWith( error );
		},
		// 验证规则设置
		rules:{

			userB:{
				required:true,
				"userName":true,
                // minlength:2
			},
			passwordB:{
				required:true,
                minlength:6,
                maxlength:12
			},
			password2B:{
				required:true,
                minlength:6,
                maxlength:12,
                equalTo: "#password"
			},
			realNameB:{
				required:true,
			},
			


		},
		// 验证错误信息设置
		messages: {
	        userB:{
	            required:"用户名必填！",
	            "userName":"只允许为字母、数字和下划线"
	            // minlength:"只允许为字母、数字和下划线"
	        },
	        passwordB:{
	            required:"密码必填！",
	            minlength:"密码长度必须在6-12个字符之间",
	            maxlength:"密码长度必须在6-12个字符之间"
	        },
	        password2B:{
	            required:"密码必填！",
	            minlength:"密码长度必须在6-12个字符之间",
	            maxlength:"密码长度必须在6-12个字符之间",
	            equalTo:'密码不一致'
	        },
          	realNameB:{
				required:"用户名必填！",
			},
			sex:{
	            required:"请选择性别！",
	            // minlength:"只允许为字母、数字和下划线"
	        },
	       

          
        }
	});


});