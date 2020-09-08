// 输入框
var search = document.getElementsByName('search')[0];
search.addEventListener('focus', function () {
	search.value = ""
})
//教学视频下拉框
var cord84 = document.getElementsByClassName('cord84')[0];
var xiala = document.getElementsByClassName('xiala')[0];
var falg = true;
cord84.addEventListener('click', function () {
	if (falg == true) {
		xiala.style.display = "block";
		falg = false
	} else if (falg == false) {
		xiala.style.display = "none";
		falg = true
	}
})
//我看过的下拉框
var wenzi1 = document.getElementsByClassName('wenzi1')[0];
var gk = document.querySelector(".gk")
var yz = document.querySelector(".yz")
var sous = document.querySelector('.sous')
var right = document.querySelector('.right')
var flag = true;
wenzi1.addEventListener('click', function () {
	if (flag) {
		yz.style.display = "none"
		// sous.className = "sous mt10 sou"
        // right.className = "right "
		looked.style.display = "block";
		gk.className = "kgg gk fr"
		flag = false
	} else if (flag == false) {
		yz.style.display = "block"
		// sous.className = "sous mt20 sou"
        // right.className = "right "
		looked.style.display = "none";
		gk.className = "gk fr"
		flag = true
	}
})
// 教学视频
var radios = document.querySelector('.radios');
var keyword = document.querySelector('.keyword');
var keywords = document.querySelectorAll('.keyword a');
for (var i = 0; i < keywords.length; i++) {
	keywords[i].onclick = function () {
		radios.innerText = this.innerText
	}
};
var li = document.querySelectorAll('.xiala a');
for (var j = 0; j < li.length; j++) {
	li[j].onclick = function () {
		radios.innerText = this.innerText
	}
}

//三级菜单
var chinese = document.querySelectorAll('.chinese');
var ou = document.getElementsByClassName("logo-1")[0];
var ol = document.querySelectorAll(".ol");
for (var i = 0; i < ol.length; i++) {
	ol[i].setAttribute("index", i)
	// console.log(sanji[i])
	ol[i].onmousemove = function () {
		var ll = this.getAttribute("index");
		for (var j = 0; j < ol.length; j++) {
			chinese[j].style.display = "none"
		}
		chinese[this, ll].style.display = "block"
		this.style.backgroundColor = "#fff"

	}
	ol[i].onmouseout = function () {
		var ll = this.getAttribute("index");
		for (var a = 0; a < ol.length; a++) {
			chinese[a].style.display = "none"
			this.style.backgroundColor = "#daeeff"
		}
		// chinese[this, ll].style.display = "none"

	}

}
// 轮播图
function dan() {
	var slide = document.querySelector(".slide");
	var li = slide.querySelectorAll(".picList li");
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
	btns[0].onclick = function () {
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
	btns[1].onclick = function () {
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
		dots[i].onclick = function () {
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
	slide.onmouseover = function () {
		btnss.style.display = "block";
		clearInterval(timer);

	}
	// 鼠标离开时恢复播放
	slide.onmouseout = function () {
		btnss.style.display = "none";
		timer = setInterval(go, 1500);
	}
}
dan()

//tab切换页
//这里实现tab切换页，原理同有指示器的轮播图
var span = document.querySelectorAll("#tabTit span")
var tab_pal = document.querySelectorAll("#tabBody .tab-pal")
var span1 = document.querySelectorAll("#tabTit1 span")
var tab_pal1 = document.querySelectorAll("#tabBody1 .tab-pal1")
var span2 = document.querySelectorAll("#tabTit2 span")
var tab_pal2 = document.querySelectorAll("#tabBody2 .tab-pal2")
function tabss(e, a, b) {
	for (var i = 0; i < a.length; i++) {
		a[i].setAttribute("index", i)
		// 绑定单击事件
		a[i][e] = function () {
			// 设置面板标题样式的切换
			for (var j = 0; j < a.length; j++) {
				a[j].className = ""
			}
			this.className = "on";
			// 设置面板的切换
			for (var x = 0; x < b.length; x++) {
				b[x].style.display = "none"
			}
			b[this.getAttribute("index")].style.display = "block"
		}
	}
}
tabss("onclick", span, tab_pal)
tabss("onclick", span1, tab_pal1)
tabss("onclick", span2, tab_pal2)
//观看历史

//删除
var guanbi = document.querySelectorAll('.guanbi');
var lishi = document.querySelector('.lishi')
for (var i = 0; i < guanbi.length; i++) {
	guanbi[i].onclick = function () {
		lishi.removeChild(this.parentNode.parentNode)
	}
}
//清空
var clear = document.querySelector('.clear');
var looked = document.querySelector('.looked');
var zanwu = document.createElement("div");
clear.onclick = function () {
	zanwu.className = "zanwu";
	zanwu.innerText = "暂无播放历史"
	looked.replaceChild(zanwu, lishi);

}
//登录注册
var myform = document.getElementsByName('myform')[0];
var ipt = document.querySelector('.ipt');//用户名
var password = document.querySelector('.password');//密码
var yanzheng = document.querySelector('.yanzheng');//验证码
var erweima = document.querySelector('.erweima');//验证码提示
ipt.onfocus = function () {
	ipt.value = ""
}
password.onfocus = function () {
	password.value = ""
}
var code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g']

function yzm() {
	return Math.round(Math.random() * 16);
}
var arr = []
for (var i = 0; i < 4; i++) {
	arr.push(code[yzm()]);
}
erweima.innerText = arr.join('')

myform.onsubmit = function () {
	if (ipt.value == "" || password.value == "") {
		alert("不能为空");
		return false
	}
	if (yanzheng.value != erweima.innerText) {
		alert("验证码输入有误");
		return false
	} else {
		alert("您已登录成功！")
	}
}
// table切换页
function tabs(){
        var table=document.getElementsByClassName("table2")[0]
        //console.log(table)
        var remen=table.querySelectorAll(".remen a");
        //console.log(remen.length)
        var liebiao=table.querySelectorAll(".liebiao");
        //console.log(liebiao)
        for(var i=0;i<remen.length;i++){
            //alert(1)
            remen[i].index=i;
            remen[i].onmouseover=function(){
                for(var j=0;j<remen.length;j++){
                    remen[j].className="";
                    liebiao[j].style.display="none"
                }
                this.className="on"
                liebiao[this.index].style="display:block"   
            }
        }
    }
tabs();
//切换页
function a(){
    var table=document.getElementsByClassName("table")[0];
    var remen=table.querySelectorAll(".remen a");
    var liebiao=table.querySelectorAll(".liebiao");
    for(var i=0;i<remen.length;i++){
        remen[i].index=i;
        remen[i].onmouseover=function(){
            for(var j=0;j<remen.length;j++){
                remen[j].className=""
                liebiao[j].style.display="none"
            }
            this.className="on"
            liebiao[this.index].style.display="block"
        }

    }
}a();
//切换页
function b(){
    var table=document.getElementsByClassName("table3")[0];
    var remen=table.querySelectorAll(".remen a");
    var liebiao=table.querySelectorAll(".liebiao");
    for(var i=0;i<remen.length;i++){
        remen[i].index=i;
        remen[i].onmouseover=function(){
            for(var j=0;j<remen.length;j++){
              remen[j].className="";
              liebiao[j].style.display="none";  
            }
            this.className="on";
            liebiao[this.index].style.display="block"
        }

    }
}b()

