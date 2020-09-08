//按学科
var xueke-1=document.querySelector(".xuekes-1");
var xueke-2=document.querySelectorAll(".xueke-2 a");

var index=0;
xueke-2.onclick=function(){
	index++;
	for(var i=0;i<xueke-2.length;i++){
		xueke-2.style.display="none";
		oLi[index].style.display="block";
	}

};





