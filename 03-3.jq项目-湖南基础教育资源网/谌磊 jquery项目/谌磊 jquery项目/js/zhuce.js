$(function() {
	$("#commentForm").validate({
		rules: {
			xm: "required",
			name: {
				required: true,
				minlength: 2
			},
			pwd: {
				required: true,
				minlength: 5
			},
			pwd2: {
				required: true,
				minlength: 5,
				equalTo: "#pwd"
			},
			email: {
				required: true,
				email: true
			},
			wenti: {
				required: true,
				minlength: 2
			},
			danan: {
				required: true,
				minlength: 2
			},
		},
		messages: {
			name: {
				required: "请输入用户名",
				minlength: "用户名必需由两个字母组成"
			},
			pwd: {
				required: "请输入密码",
				minlength: "密码长度不能小于 5 个字母"
			},
			pwd2: {
				required: "两次密码输入不一致"
			},
			email: "请输入一个正确的邮箱",
			xm: "请输入您的名字",
			wenti: {
				required: "请输入你的问题"
			},
			danan: {
				required: "请输入你的答案"
			},
		}
	});
	laydate.render({
		elem: '#dsr',
		trigger: 'click'
	});
})
