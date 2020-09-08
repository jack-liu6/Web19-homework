// 三级菜单
var ou = document.getElementsByClassName("logo-1")[0];
var ol = document.querySelectorAll(".ol");
var sanji = document.querySelectorAll(".yuwen")
for (var i = 0; i < ol.length; i++) {
	ol[i].setAttribute("index", i)
	// console.log(sanji[i])
	ol[i].onmousemove = function() {
		var ll = this.getAttribute("index");
		for (var j = 0; j < ol.length; j++) {
			sanji[j].style.display = "none"
		}
		sanji[this, ll].style.display = "block"
		ou.style.borderRight = "none"
		this.style.backgroundColor = "#fff"

	}
	ol[i].onmouseout = function() {
		var ll = this.getAttribute("index");
		for (var a = 0; a < ol.length; a++) {
			sanji[a].style.display = "none"
			this.style.backgroundColor = "#daeeff"
		}
		// sanji[this, ll].style.display = "none"

	}

}
// 轮播效果
function dan() {
	var slide = document.querySelector(".slide");
	var li = slide.querySelectorAll(".three-Img li");
	var btnss = document.querySelector(".btns");
	var btns = slide.querySelectorAll(".btns a");
	var dots = slide.querySelectorAll(".dots span");
	var index = 0;

	function fun() {
		for (var j = 0; j < dots.length; j++) {
			dots[j].className = "";
			dots[index].className = "on";

		}
	}
	// 设置左边的按钮
	btns[0].onclick = function() {
		for (var j = 0; j < li.length; j++) {
			li[j].style.opacity = 0
		}
		index++
		if (index > 2) {
			index = 0
		}
		li[index].style.transition = "all 0.5s linear"
		li[index].style.opacity = 1;
		fun()
	}
	// 设置右边的按钮
	btns[1].onclick = function() {
		for (var j = 0; j < li.length; j++) {
			li[j].style.opacity = 0
		}
		index--
		if (index < 0) {
			index = 2
		}
		li[index].style.transition = "all 0.5s linear"
		li[index].style.opacity = 1;
		fun()
	}
	// 给小圆点绑定事件
	for (var i = 0; i < dots.length; i++) {
		dots[i].setAttribute("index", i);
		dots[i].onclick = function() {
			index = this.getAttribute("index");
			for (var j = 0; j < li.length; j++) {
				li[j].style.opacity = 0
			}
			li[index].style.transition = "all 0.5s linear"
			li[index].style.opacity = 1;
			fun()
		};
	}
	// 通过定时器实现自动轮播
	function go() {
		btns[0].onclick();
	}
	var timer = setInterval(go, 1500);
	// 鼠标移入到轮播图区域，暂停播放，离开再恢复播放
	slide.onmouseover = function() {
		btnss.style.display = "block";
		clearInterval(timer);

	}
	// 鼠标离开时恢复播放
	slide.onmouseout = function() {
		btnss.style.display = "none";
		timer = setInterval(go, 1500);
	}
}
dan()
