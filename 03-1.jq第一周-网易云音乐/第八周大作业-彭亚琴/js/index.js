window.onload=function () {
	//搜索框获取焦点，文字消失；失去焦点，文字恢复
	var search=document.getElementsByClassName('search')[0];
	var ipt=search.lastElementChild;
	ipt.onfocus=function () {
		ipt.value="";
		ipt.style.color='#333333';
	}
	ipt.onblur = function() {
		ipt.value="音乐/电台/视频/用户";
		ipt.style.color='#CCCCCC';
	}



	//轮播图效果
	var dot=document.getElementsByClassName('dot');
	var zuo=document.getElementsByClassName('zuo')[0];
	var you=document.getElementsByClassName('you')[0];
	var banner_ul=document.getElementsByClassName('banner_ul')[0];
	var banner=document.getElementsByClassName('banner')[0];
	var index=0;//计数器


	// 给第一个小圆点添加背景色
	dot[0].style.backgroundColor="#AE0A0A";


	// 给左边按钮绑定点击事件
	zuo.onclick=function(){
		index--;
		if (index<0) {
			index=4;
		}
		banner_ul.style.left=-1349*index+"px";
		for (var i = 0; i <dot.length; i++) {
			dot[i].style.backgroundColor="#FFFFFF";
			dot[index].style.backgroundColor="#AE0A0A";
		}
	}


	// 给右边按钮绑定点击事件
	you.onclick=function(){
		index++;
		if (index>4) {
			index=0;
		}
		banner_ul.style.left=-1349*index+"px";
		for (var i = 0; i <dot.length; i++) {
			dot[i].style.backgroundColor="#FFFFFF";
			dot[index].style.backgroundColor="#AE0A0A";
		}
	}



	//给小圆点绑定点击事件
	for (var j = 0; j <dot.length; j++) {
		dot[j].setAttribute("index",j);
		dot[j].onclick=function () {
			index=this.getAttribute("index");
			banner_ul.style.left=-1349*index+"px";
			for (var i = 0; i <dot.length; i++) {
				dot[i].style.backgroundColor="#FFFFFF";
				dot[index].style.backgroundColor="#AE0A0A";
			}
		}
	}



	//设置定时器，自动轮播
	function fun() {
		you.onclick();
	}
	var timer=setInterval(fun,2000);

	//给大盒子绑事件，鼠标摸上去暂停轮播，鼠标离开继续轮播；
	banner.onmouseover=function () {
		clearInterval(timer);
	}
	banner.onmouseout=function () {
		timer=setInterval(fun,2000);
	}



	//榜单列表摸上去，显示隐藏的内容
	var one1=document.getElementsByClassName('one1')[0];
	var pp=one1.getElementsByClassName('pp');
	var hide=one1.getElementsByClassName('hide');
	console.log(pp)
	var one2=document.getElementsByClassName('one2')[0];
	var pp2=one2.getElementsByClassName('pp');
	var hide2=one2.getElementsByClassName('hide');

	var one3=document.getElementsByClassName('one3')[0];
	var pp3=one3.getElementsByClassName('pp');
	var hide3=one3.getElementsByClassName('hide');

	function fun1 (a,b) {
		for (var i = 0; i <a.length; i++) {
			a[i].setAttribute("index",i);
			a[i].onmouseover=function () {
				for (var j = 0; j <b.length; j++) {
					b[j].style.display='none';
				}
				b[this.getAttribute('index')].style.display='block';
			}
			a[i].onmouseout=function () {
				b[this.getAttribute('index')].style.display='none';
			}
		}
	}

	fun1(pp,hide);
	fun1(pp2,hide2);
	fun1(pp3,hide3);



	
//显示top按钮
	var fdtop=document.getElementsByClassName('fdtop')[0];
	
	document.body.onscroll=function(){
		var Top=document.documentElement.scrollTop||document.body.scrollTop;
		if (Top>0) {
			fdtop.style.display="block";
		} else{
			fdtop.style.display="none";
		}
	}
//回到顶部
	fdtop.onclick=function () {
		var Top=document.documentElement.scrollTop||document.body.scrollTop;
		var timer=setInterval(function () {
			Top=Top-Top;
			document.documentElement.scrollTop=Top;
			if (Top<=0) {
				clearInterval(timer);
			}
		},1);
	}


	//显示底部播放器
	var fdfoot=document.getElementsByClassName('fdfoot')[0];
	var suoxin=document.getElementsByClassName("suoxin")[0];
	fdfoot.onmouseover=function () {
		fdfoot.style.height="50px";
	}
	fdfoot.onmouseout=function funn () {
		fdfoot.style.height="0px";
	}

	//点击锁，可以锁住div，再点击缩回去
	var flag=true;
	suoxin.onclick=function () {
		if (flag) {
			suoxin.style.backgroundPosition="-102px -403px";
			fdfoot.onmouseout=null;
			flag=false;
		}else{
			suoxin.style.backgroundPosition="";
			fdfoot.style.height="0px";
			flag=true;
		}
		
	}
}