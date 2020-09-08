// 第一个习题
//当单选按钮被选中并且ID为ans是显示isTrue
window.onload = function () {
	function chooSe(option,answer) {
		var op1Obj = option;
		var inputs =op1Obj.getElementsByTagName('input');
		var istrue = op1Obj.getElementsByClassName('isTrue')[0];
		var isfalse = op1Obj.getElementsByClassName('isFalse')[0];
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].onclick =function () {
			if (this.checked == true&&this.id==answer) {
				istrue.style.display = 'block';
				isfalse.style.display = 'none';
			}else{
				istrue.style.display = 'none';
				isfalse.style.display = 'block';
			}
		}
		
	}
	}
	chooSe(document.getElementById("option1"),"ans2");
	chooSe(document.getElementById("option2"),"ans");
	chooSe(document.getElementById("option3"),"ans3");
	chooSe(document.getElementById("option4"),"ans4");
	chooSe(document.getElementById("option5"),"ans5");
	chooSe(document.getElementById("option6"),"ans6");
	
}