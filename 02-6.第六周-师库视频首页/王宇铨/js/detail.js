//历史记录列表
(function(){
	var history=document.querySelector('.bodyMenu .history');
	var historyBtn=document.querySelector('.bodyMenu .historyBtn');
	var ol1=document.querySelector('.bodyMenu .history .ol1');
	var histico=document.querySelectorAll('.bodyMenu .history .ol1 .histico');
	var clearHistory=document.querySelector('.bodyMenu .history .ol1 #clearHistory');
	for(var i=0;i<histico.length;i++){
		histico[i].addEventListener('click',function(){
			ol1.removeChild(this.parentNode);
		});
	};

	clearHistory.addEventListener('click',function(){
		var len=ol1.children.length;
		for(var j=0;j<len-1;j++){
			ol1.removeChild(ol1.firstElementChild);
			// console.log(ol1.firstElementChild);
		}
		
	});
	history.onmouseover=function(){
		historyBtn.id='HisbtnOn';
	};
	history.onmouseout=function(){
		historyBtn.id='';
	};
})();

//加关注按钮的二维码
(function(){
	var weibo=document.getElementById('weibo');
	var weibo2=document.getElementById('weibo2');
	var Wberweima=document.getElementById('Wberweima');
	var Wb2erweima=document.getElementById('Wb2erweima');
	weibo.onmouseover=function(){
		Wberweima.style.display='block';
	};
	weibo.onmouseout=function(){
		Wberweima.style.display='none';
	};
	weibo2.onmouseover=function(){
		Wb2erweima.style.display='block';
	};
	weibo2.onmouseout=function(){
		Wb2erweima.style.display='none';
	};
})();

//评分星星
function pinfen(){
	var star=document.querySelectorAll('.detailBody .others .pinfen .sprite');
	var fenshu=document.querySelector('.detailBody .others .pinfen #fenshu');
	var count=0;
	for(var i=0;i<star.length;i++){
		star[i].index=i;
		star[i].onmouseover=function(){
			count=0;
			for(var j=0;j<star.length;j++){
				if(j<=this.index){
					star[j].style.backgroundPosition='0 -382px';
					count+=2;
				}else{
					star[j].style.backgroundPosition='-40px -382px';
					
				};
				// console.log(count);
			};
			// console.log(1)
		};
		star[i].onclick=function(){
			fenshu.innerText=count+'分';
			for(var i=0;i<star.length;i++){
				star[i].onmouseover='';
				console.log(star[i].onmouseover);
			}
		};
	};
};
pinfen();


//评论
function pinglun(){
	var pinglun=document.pinglun;
	var Otext=document.getElementsByTagName('textarea')[0];
	var TXTlength=document.getElementById('length');
	var baocuo=document.getElementsByClassName('baocuo')[0];
	var BCbtn=document.getElementById('BCbtn');
	var user='匿名用户';
	var PLarea=document.querySelector('.pinglun .PLarea');
	

	//评论内容验证以及当前字符数量的显示
	TXTlength.innerText='0/'+Otext.getAttribute('maxlength');
	Otext.onkeypress=function(){
		TXTlength.innerText=this.value.length+'/'+Otext.getAttribute('maxlength');
		// console.log(1);
		if(this.value.length==200){
			TXTlength.style.color='#f00';
		}else{
			TXTlength.style.color='';
		};
	};

	pinglun.onsubmit=function(){
		var tittle=Otext.value.slice(0,6);
		//验证
		if(!/^[\w\u4E00-\u9FA5\uF900-\uFA2D]{6,}/.test(Otext.value)){
			baocuo.style.display='block';
			
		}else{
			//验证通过后的生成
			var Oli=document.createElement('li');
			Oli.innerHTML='<h5 class="clearfix"><span class="PLtittle">标题：'+tittle+'</span><span class="user">'+user+'</span><span>发表于'+getdate()+'</span><div class="fr"><a href="#" target="_blank" class="supoter">支持<span>(0)</span></a><a href="#" target="_blank" class="fandui">反对<span>(0)</span></a></div></h5><p>'+Otext.value+'</p></li>';
			PLarea.appendChild(Oli);
			Otext.value='';
		}
		return false;
	};
	//报错框的关闭
	BCbtn.onclick=function(){
		baocuo.style.display='none';
	}

	//支持反对的点击更改
	// var surport=document.getElementsByClassName('supoter');
	// var fandui=document.getElementsByClassName('fandui');

	// for(var i=0;i<surport.length;i++){
	// 	surport[i].onclick=function(){

	// 	}
	// }


};
pinglun()

//时间函数
function getdate(){
			var date=new Date();
			var year=date.getFullYear();
			var month=toZero(date.getMonth()+1);
			var day=toZero(date.getDate());
			var hour=date.getHours();
			var min=toZero(date.getMinutes());
			function toZero(a){
				return a>9?a:'0'+a;
			};
			
			// if(hour<=12){
				
			// 	var ap='(AM)';
			// 	var hour12=hour;
			// };
			
			// if(hour>12){
			// 	var hour12=hour-12;
			// 	var ap='(PM)';
			// };
			if(hour<10){
				hour='0'+hour;
			};

			return year+'-'+month+'-'+day+' '+hour+':'+min;

		}


//tab切换也
function MenuSwitch(ele){
	// var father=document.getElementById(ele);
	var btn=document.querySelectorAll('#'+ele+' .tabBtn span');
	var list=document.querySelectorAll('#'+ele+' ul');
	console.log(btn);
	console.log(list);
	for(var i=0;i<btn.length;i++){
		btn[i].onclick=(function(index){

			return function(e){
				for(var j=0;j<btn.length;j++){
					btn[j].id='';
					list[j].style.display='none';
				}
				this.id='tabChecked';
				list[index].style.display='block';
				// return false;
				e.preventDefault();
			}

		})(i);

	}
};
MenuSwitch("tab");