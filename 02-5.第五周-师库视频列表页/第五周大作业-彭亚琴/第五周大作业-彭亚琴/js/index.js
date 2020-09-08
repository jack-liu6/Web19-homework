window.onload=function () {
	//导航栏二级菜单
	var oli=document.getElementsByClassName('oli')[0];
	var dd=document.getElementsByClassName('dd')[0];
	var a=true;
	oli.addEventListener("click",function () {
		if (a) {
			dd.style.display="block";
			dd.style.zIndex="99";
			a=false;
		}else{
			dd.style.display="none";
			a=true;
		}
	});

	//搜索框的二级菜单
	var xllb=document.getElementsByClassName('xllb')[0];
	var ss_xl=document.getElementsByClassName('ss_xl')[0];
	var xl=document.getElementsByClassName('xl')[0];
	var son=xllb.children;
	ss_xl.addEventListener("click",function () {
		if (xllb.style.display=="none") {
			xllb.style.display="block";

			
		}else{
			xllb.style.display="none";
			
		}
	});
 	for (var i = 0; i < son.length; i++) {
		son[i].addEventListener("click",function(){
			ss_xl.innerHTML=this.innerText+'<span class="xb xl">';
			xllb.style.display="none";
		});
	}
	//条件搜索框
	var sr=document.getElementsByClassName('sr')[0];
	console.log(sr)
	var jxsp_xl=document.getElementsByClassName('jxsp_xl')[0];
	var onn=jxsp_xl.getElementsByTagName('a');
	console.log(onn);
	for (var i = 0; i < onn.length; i++) {
		onn[i].addEventListener("click",function () {
			sr.value=this.innerText;
		})
	}

	//条件清空
	var tj=document.getElementsByClassName('tj')[0];
	var sb=tj.getElementsByTagName('a')[0];
	console.log(sb);
	sb.addEventListener('click',function () {
		sr.value="";
	})
}
