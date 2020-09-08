window.onload = function () {
	var txt = document.getElementById('txt');

txt.onfocus =function() {
	if(txt.value == "请输入查找关键字"){
		this.value = "";
		this.color = "red";
		}
		
	}
txt.onblur = function () {
	if (txt.value.length == 0) {
		this.value = "请输入查找关键字";
		this.color = "gray";
	}
}
var form = document.getElementById('form');
var array = ["设计-精密播种机","设计-S195柴油机机体"," 探析光纤通信在华北油田电网的应用"," 探析计算机绘图在森林资源调查区划","浅论车削加工中的振动与控制"
,"浅论边际效用递减与生活的实例"
]
	txt.onkeyup =function () {
		//获取用户输入的内容
		var tt = txt.value;
		var temp = [];
		if (document.getElementById('dvo')) {
			document.getElementById('form').removeChild(document.getElementById('dvo'));
		}

		//匹配
		for (var i = 0; i < array.length; i++) {
			if (array[i].indexOf(tt) == 0) {
				temp.push(array[i]);
			}
		}

		if (this.value.length==0||temp.length==0) {
			if (document.getElementById('dvo')) {
				document.getElementById('form').removeChild(document.getElementById('dvo'));
			}
			return;	
		}	
		var odv = document.createElement("div");
			odv.id = "dvo"
			odv.style.width = 178 + 'px';
			odv.style.border = '1px solid gray';
			form.appendChild(odv);
		for (var i = 0; i < temp.length; i++) {
			var pobj = document.createElement("p");
			pobj.innerText = temp[i];
			odv.appendChild(pobj);
		}
	}	
}
