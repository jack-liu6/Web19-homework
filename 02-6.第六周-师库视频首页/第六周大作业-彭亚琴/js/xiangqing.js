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
			for (var i = 0; i < son.length; i++) {
			son[i].addEventListener("click",function(){
				ss_xl.innerHTML=this.innerText+'<span class="xb xl">';
				xllb.style.display="none";
			});
		}
				
		}else{
			xllb.style.display="none";
			
		}
	});

	//blue的二级菜单
	var bule_li=document.getElementsByClassName('bule_li');
	var erji=document.getElementsByClassName('erji')[0];
	for (var i = 0; i <bule_li.length ; i++) {
		bule_li[i].onmouseover=function () {
			this.style.backgroundColor='#ffffff';
			this.lastElementChild.style.display='block';
			this.lastElementChild.style.borderLeft=0+'px';
		}
		bule_li[i].onmouseout=function () {
			this.style.backgroundColor='';
			this.lastElementChild.style.display='none';
			this.lastElementChild.style.borderLeft='';
		}
	}


	//轮播图1:点击小图标切换图片
	var lun=document.getElementsByClassName('lun')[0];
	var lun_tu=lun.firstElementChild;
	var dots=document.getElementsByClassName('dots')[0];
	var ospan=dots.children;
	for(var i=0;i<ospan.length;i++){
        ospan[i].setAttribute("index",i);
        ospan[i].onclick=function (){
            index=this.getAttribute("index");
            lun_tu.style.left=-565*index+"px"; 
            for( var j=0;j<ospan.length;j++){
                ospan[j].className="";
                this.className="hui";
            }
        };
    }
    //轮播图1:定时切换图片
    var index=0;
    var timer=setInterval(go,1000);
    function go() {
    	index++;
            if(index>2){
                index=0;
            }
            lun_tu.style.left=-565*index+"px"; 
            for( var j=0;j<ospan.length;j++){
                ospan[j].className="";
                ospan[index].className="hui";
            }
    }
    //轮播图1:鼠标摸上去停止切换，鼠标离开继续切换
    lun.onmouseover=function(){
        clearInterval(timer);
    }
    lun.onmouseout=function(){
        timer=setInterval(go,1000);
    }

    //我看过点击切换注册和历史界面
    var flag=true;
    var wokan=document.getElementById('wokan');
    var kan2=wokan.lastElementChild;
    var lisi=kan2.firstElementChild;
    var p1=lisi.children;
    var HX=document.getElementsByClassName('HX');
    var qk=kan2.getElementsByClassName('qk')[0];

    wokan.addEventListener("click",function () {
    	if (flag) {
	    	kan2.style.display="block";
	    	wokan.style.borderColor="#C6C6C6";
	    	flag=false;
	    }else{
	    	kan2.style.display="none";
	    	wokan.style.borderColor="";
	    	flag=true;
	    }

    });
    //点击X清除对应历史记录
	 for (var i = 0; i < HX.length; i++) {
	 	HX[i].onclick=function (e) {
	 		this.parentNode.remove();
	 		e.stopPropagation();
	 	}
	 }
	 //点击清空所有历史记录
	 qk.onclick=function (e) {
	 	lisi.innerText="";
	 	e.stopPropagation();
	 }
      
} 	