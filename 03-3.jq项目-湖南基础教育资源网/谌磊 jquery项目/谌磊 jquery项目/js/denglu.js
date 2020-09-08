$(function(){
	$("#commentForm").validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			posd: {
				required: true,
				minlength: 6,
				maxlength: 12
			}
		},
		messages: {
			name: {
				required: "用户名不正确",
			},
			posd: {
				required: "密码不正确",
			}
		}
	})
})