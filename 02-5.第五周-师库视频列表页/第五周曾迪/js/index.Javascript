// 输入框
var search=document.getElementsByName('search')[0];
search.addEventListener('focus',function(){
	search.value=""
})
//教学视频下拉框
var cord84=document.getElementsByClassName('cord84')[0];
var xiala=document.getElementsByClassName('xiala')[0];
var falg=true;
cord84.addEventListener('click',function(){
	if(falg==true){
		xiala.style.display="block";
		falg=false
	}else if(falg==false){
		xiala.style.display="none";
		falg=true
	}
})
//我看过的下拉框
var xiala2=document.getElementsByClassName('xiala2')[0];
var wenzi1=document.getElementsByClassName('wenzi1')[0];
var flag=true;
wenzi1.addEventListener('click',function(){
	if(flag==true){
		xiala2.style.display="block";
		flag=false
	}else if(flag==false){
		xiala2.style.display="none";
		flag=true
	}
})

// 教学视频

var radios=document.querySelector('.radios');
var keyword=document.querySelector('.keyword');
var keywords=document.querySelectorAll('.keyword a');
for(var i=0;i<keywords.length;i++){
	keywords[i].onclick=function(){
		radios.innerText=this.innerText
	}
};
var li=document.querySelectorAll('.xiala a');
for(var j=0;j<li.length;j++){
	li[j].onclick=function(){
		radios.innerText=this.innerText
	}
}
// 分类
var ul=document.querySelectorAll('.china ul');
var classification=document.querySelectorAll('.ul1 li a');
var kg=true;
var radiolist=document.querySelector('.radiolist')
var newtiaojian=document.querySelector('.tiaojian');
var tiaojian=document.createElement('span')
var span=document.createElement('span');
var ml17=document.querySelector('.ml17');
var clear=document.querySelector('.clear');
for(var x=0;x<classification.length;x++){
	classification[x].onclick=function(){
   if(kg==true){
			this.style.color="#e27000";
	      	this.style.borderBottom="1px solid #e27000";
	      	radiolist.insertBefore(tiaojian,clear);
	      	tiaojian.className="tiaojian";
	      	tiaojian.innerText=this.innerText;
            tiaojian.appendChild(span);
            span.className="close fr";
	      	kg=false;
	      	
		}else if(kg==false){
            this.style.color="";
	      	this.style.borderBottom="";
            tiaojian.innerText=""
            radiolist.removeChild(tiaojian);
	      	kg=true
		}
		span.onclick=function(){
		      radiolist.removeChild(tiaojian);
		      kg=true;
	      	}
   }
}
clear.onclick=function(){
	radiolist.removeChild(tiaojian);
	kg=true;
	
}

 
  




		

	


	
