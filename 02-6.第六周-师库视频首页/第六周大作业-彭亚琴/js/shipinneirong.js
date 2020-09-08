window.onload=function () {
	//星星评分
	var star=document.getElementsByClassName('star')[0];
	var a=star.getElementsByTagName('a');
	var span=star.getElementsByTagName('span')[0];
	for(var i=0;i<a.length;i++){
		a[i].setAttribute('index',i);
		a[i].onmouseover=function(){

			// 从这颗星星往前需要点亮
			for(var j=0;j<=this.getAttribute('index');j++){
				a[j].className="active";
			}

			// 从这颗星星开始往后需要清空
			for(var z=Number(this.getAttribute('index'))+1;z<a.length;z++){
				a[z].className=" ";
			}
		}
	}

	// 点击时评分
	for(var i=0;i<a.length;i++){
		a[i].onclick=function(){
			span.innerText='（'+(Number(this.getAttribute('index'))*2+2)+"分"+'）';
		}
	}


	//tab切换页
	var tab=document.getElementsByClassName('tab')[0];
	var son=tab.children;
	var tab_ul=document.getElementsByClassName('tab_ul');
	for (var i = 0; i <son.length ; i++) {
		son[i].setAttribute("index",i);
		son[i].onmouseover=function () {
			this.className='on';
			for (var j = 0; j <tab_ul.length; j++) {
				tab_ul[j].style.display='none';
			}
			tab_ul[this.getAttribute('index')].style.display="block";
		}
		son[i].onmouseout=function () {
			this.className='';
		}
	}


}