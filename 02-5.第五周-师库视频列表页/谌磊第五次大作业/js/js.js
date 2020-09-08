function ig() {
	var fore = document.getElementsByClassName("fore")
	var adc = document.getElementsByClassName("adc")
	for (var i = 0; i < adc.length; i++) {
		for (var j = 0; j < fore.length; j++) {
			adc[i].index = i;
			fore[j].index = j;
			// var flag = true;
			// adc[i].onclick = function() {
			// 	if (flag) {
			// 		fore[this.index].style.display = "block"
			// 	} else {
			// 		fore[this.index].style.display = "none"
			// 	}
			// 	flag = !flag
			// }
			adc[i].onmousemove=function(){
				fore[this.index].style.display = "block"
			}
			adc[i].onmouseout=function(){
				fore[this.index].style.display = "none"
			}
		}
	}
}

function cs() {
	var hist = document.getElementsByClassName("hist")[0]
	var head = document.querySelector(".head");
	var Abiao = head.querySelectorAll("a")
	for (var i = 0; i < Abiao.length; i++) {
		Abiao[i].onclick = function() {
			hist.innerText = this.innerText;
		}
	}
}
