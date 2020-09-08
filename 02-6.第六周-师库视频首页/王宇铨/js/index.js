// 顶部
// var myOder=document.getElementById('myOder');
// var myOderList=document.getElementById('myOderList');
// myOder.onmouseover=function(){
// 	myOderList.
// }
function topMenu(){
	var aLV1=document.querySelectorAll('.barLV1>a');
	var barlv2=document.querySelectorAll('.barLV1 .barlv2');
	for(var i=0;i<aLV1.length;i++){
		aLV1[i].onmouseover=function(){
			this.nextElementSibling.style.display='block';
			this.style.backgroundColor='#fff';
			this.className='lvhover';
		}
		aLV1[i].onmouseout=function(){
			this.nextElementSibling.style.display='none';
			this.style.backgroundColor='';
			this.className='';
			
		}
		barlv2[i].onmouseover=function(){
			this.style.display='block';
			this.previousElementSibling.style.backgroundColor='#fff';
			this.previousElementSibling.className='lvhover';
			// console.log(1);
		}
		barlv2[i].onmouseout=function(){
			this.style.display='none';
			this.previousElementSibling.className='';
		}

	}
};
topMenu();

//验证码
function yzm(){
	var en=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
	var yanzhengma=document.querySelector('.bodyDetail .indexBodyR #yanzhengma');
	function setYZM(){
		var re='';
		for(i=0;i<4;i++){
			re+=en[Math.round(Math.random()*35)];
		}
		// console.log(re)
		yanzhengma.innerText=re;
	};
	setYZM()
	yanzhengma.onclick=setYZM;
	
};
yzm();

//登录验证
function login(){
	var login=document.login;
	var username=login.username;
	var password=login.password;
	var yzm=login.yzm;
	var yanzhengma=document.querySelector('.bodyDetail .indexBodyR #yanzhengma');
	var flag1;
	var flag2;
	var flag3;
	
	login.onsubmit=function(){
		if(/^\w{4,20}$/i.test(username.value)){
			flag1=true;
		}else{
			alert('账号错误');
			flag1=false;
		};
		if(/^[a-z0-9]{4,12}$/i.test(password.value)){
			flag2=true;
		}else{
			alert('密码错误');
			flag2=false;
		};
		if(yzm.value==yanzhengma.innerText){
			flag3=true;
		}else{
			alert('验证码错误');
			flag3=false;
		}
		if(!(flag1 && flag2 &&  flag3)){
			return false;
		}
	};
};
login();






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
		};
		
	});
	history.onmouseover=function(){
		historyBtn.id='HisbtnOn';
	};
	history.onmouseout=function(){
		historyBtn.id='';
	};


})();

//首页二级、三级菜单
function menuLv3(){
	var oli=document.querySelectorAll('.bodyDetail .indexBodyL .MenuLV2>li');
	//id切换改变样式
	for(var i=0;i<oli.length;i++){
		oli[i].addEventListener('mouseover',function(){
			// for(var j=0;j<oli.lenght;j++){
			// 	oli[j].id='';
			// }
			this.id='lv2hover';
		});
		oli[i].addEventListener('mouseout',function(){
			
			this.id='';
		});
	}
	var menuLV3=document.querySelectorAll('.bodyDetail .indexBodyL .MenuLV2>li .menuLV3');
	var menuLV3BF=document.querySelectorAll('.bodyDetail .indexBodyL .MenuLV2>li .menuLV3:before');
	var t=-1;
	for(var j=0;j<menuLV3.length;j++){
		menuLV3[j].style.top=t+'px';
		if(t>=-170){
			t-=19;
		}else{
			t=-190;
		};
		
	}

};
menuLv3();


// 
// 轮播图
function banner(faele,ele,btnele){
	var lunbo=document.getElementById(faele);
	var pic=lunbo.getElementsByTagName(ele);
	var num=1;
	if(arguments.length==3){
		var bannerbtn=lunbo.getElementsByTagName(btnele);
		// console.log(bannerbtn);

		for(var i=0;i<bannerbtn.length;i++){
			bannerbtn[i].onclick=(function(index){
				return function(){
					num=index;
					for(var i=0;i<pic.length;i++){
						pic[i].style.display='none';
						bannerbtn[i].className='';
					};
					pic[num].style.display='inline-block';
					bannerbtn[num].className='on';
				}
			})(i);

		}
	}
	var timer=setInterval(function(){
			for(var i=0;i<pic.length;i++){
				pic[i].style.display='none';
				if(bannerbtn){
					bannerbtn[i].className='';
				};
				
			};
			pic[num].style.display='inline-block';
			// pic[num].style.-webkit-animation='';
			if(bannerbtn){
				bannerbtn[num].className='on';

			}
						num++;
			if(num>pic.length-1){
				num=0;
			}
			// console.log(banner.arguments.length);
		},3000);
		lunbo.onmouseover=function(){
			clearInterval(timer);
		};
		lunbo.onmouseout=function(){
			timer=setInterval(function(){
				for(var i=0;i<pic.length;i++){
					pic[i].style.display='none';
					if(bannerbtn){
						bannerbtn[i].className='';
					};
					
				};
				pic[num].style.display='inline-block';
				// pic[num].style.-webkit-animation='';
				if(bannerbtn){
					bannerbtn[num].className='on';

				}
							num++;
				if(num>pic.length-1){
					num=0;
				}
				// console.log(banner.arguments.length);
			},3000);
		};
	// 底部轮播图
	


}
banner('lunboIndex','a','span');
banner('lunboBtom','a');
banner('loginBanner','a');


//右侧登录下部的轮播图
// (function(){
// 	var banner=document.querySelector('.bodyDetail .indexBodyR .banner');
// 	var loginPic=document.querySelectorAll('.bodyDetail .indexBodyR .banner a');
// 	var num1=1;
// 	var timer1=setInterval(function(){
// 		for(var i=0;i<loginPic.length;i++){
// 			loginPic[i].style.display='none';
			
// 		};
// 		loginPic[num1].style.display='inline-block';
		
// 		num1++;
// 		if(num1>loginPic.length-1){
// 			num1=0;
// 		}
// 	},3000);
// 	banner.onmouseover=function(){
// 		clearInterval(timer1);
// 	};
// 	banner.onmouseout=function(){
// 		timer1=setInterval(function(){
// 		for(var i=0;i<loginPic.length;i++){
// 			loginPic[i].style.display='none';
			
// 		};
// 		loginPic[num1].style.display='inline-block';
		
// 		num1++;
// 		if(num1>loginPic.length-1){
// 			num1=0;
// 		}
// 	},3000);
// 	};

// })();


//分类右侧二级菜单切换
function MenuSwitch(ele){
	// var father=document.getElementById(ele);
	var btn=document.querySelectorAll('#'+ele+' h4 a');
	var list=document.querySelectorAll('#'+ele+' ul');
	for(var i=0;i<btn.length;i++){
		btn[i].onclick=(function(index){

			return function(e){
				for(var j=0;j<btn.length;j++){
					btn[j].className='';
					list[j].style.display='none';
				}
				this.className='rankON';
				list[index].style.display='block';
				// return false;
				e.preventDefault();
			}

		})(i);

	}
};
MenuSwitch('floor1');
MenuSwitch('floor2');
MenuSwitch('floor3');




// 导航菜单内容切换
function bodymune(){
	var menueOP=document.getElementsByClassName('menueOP');
	var bodyDetail=document.getElementsByClassName('bodyDetail');
	for(var i=0;i<menueOP.length;i++){
		menueOP[i].setAttribute('index',i)
		menueOP[i].onclick=function(){
			for(var j=0;j<bodyDetail.length;j++){
				bodyDetail[j].style.display='none';
				menueOP[j].id='';
			}
			bodyDetail[this.getAttribute('index')].style.display='block';
			this.id='MenuChecked';
		}
	}
};
bodymune();


// 条件筛选
function searchFor(ele){
	var parent=document.getElementById(ele);
	var searchli=parent.getElementsByClassName('searchli');
	var select=parent.getElementsByClassName('select');
	var selected=parent.getElementsByClassName('selected');
	var listSp=parent.getElementsByClassName('listSp');
	var clearAll=parent.getElementsByClassName('clearAll')[0];
	var all=parent.getElementsByClassName('all');
	var allselected=parent.getElementsByClassName('allselected');
	// var li=parent.getElementsByClassName('searchliz');
	for(var i=0;i<select.length;i++){
		// 点击未被选中的条件时
		select[i].onclick=function(){
			// 未被选中的条件将触发
			if(this.className.indexOf('selected')==-1){
				
				this.parentNode.children[1].className='all';
				// all=parent.getElementsByClassName('all');
				for(var x=0;x<all.length;x++){

					// 关于未被选中的“不限”按钮的事件（清楚其他所有条件）
					all[x].onclick=function(){
						var len=listSp[this.parentNode.getAttribute('name')].children.length;
						for(var q=0;q<len;q++){
							listSp[this.parentNode.getAttribute('name')].removeChild(listSp[this.parentNode.getAttribute('name')].children[0]);
						}
						var len2=this.parentNode.children.length;
						for(var j=2;j<len2;j++){
							this.parentNode.children[j].className='select';
						}
						this.className='allselected'
					}
				}
				// for(var a=0;a<allselected.length;a++){
				// 	allselected[a].onclick=function(){
						
				// 	}
				// }
				// 将选中的条件添加到下面的条件框中
				var newSpan=document.createElement('span');

				newSpan.innerText=this.innerText;
				// 给下面条件框的条件添加删除事件
				newSpan.onclick=function(){
					for(var j=0;j<selected.length;j++){
						if(selected[j].innerText==this.innerText){
							selected[j].className='select';
						}
					}
					var father=this.parentNode;
					this.parentNode.removeChild(this);

					if(father.children.length<1){
						searchli[father.getAttribute('index')].children[1].className='allselected'
					}
					
				};
				// console.log(listSp)
				listSp[this.parentNode.getAttribute('name')].appendChild(newSpan);
				this.className='selected'
				

			}

		};
	};
	// 清除所有的条件
	clearAll.onclick=function(){
		for(var s=0;s<listSp.length;s++){
			var len=listSp[s].children.length;
			for(var q=0;q<len;q++){
				listSp[s].removeChild(listSp[s].children[0]);
			}
			var len2=selected.length;
			for(var j=0;j<len2;j++){
				selected[0].className='select';
			}
		}
		var len3=all.length;
		for(var i=0;i<len3;i++){
			all[0].className='allselected';
		}
		// console.log(selected);
	};


	

};
searchFor('files');
searchFor('video');




// 广告轮播
function rgBanner(ele){
	var parent=document.getElementById(ele);
	var sBanner=parent.getElementsByClassName('sBanner')[0];
	var count=0;
	var count1;
	console.log(sBanner.children);
	setInterval(function(){
		count++;
		count1=count-1;
		// count1=count-1
		if(count>=sBanner.children.length){
			count=0;
		}
		if(count1<0){
			count1=sBanner.children.length-1;
		}
		// console.log(sBanner.children[count]);
		sBanner.children[count].style.display='block';
		
		sBanner.children[count1].style.display='none';
	},3000)


}


rgBanner('video')


// 固定标签切换

function fix(){
	var fixMenu=document.getElementsByClassName('fixMenu')[0];
	var r=window.innerWidth;
		if(r<=1500){
				fixMenu.style.right=0;
			}
	window.onresize=function(){
		if(window.innerWidth<=1500){
			fixMenu.style.right=0;
		}else{
			fixMenu.removeAttribute('style')
		}
			

	}
	// console.log(fixMenu.style.right)
		
}

fix();



//给单个视屏链接批量修改指向
(function(){
	var aLink=document.querySelectorAll('.Vlist ul li a');
	var aLinkL=document.querySelectorAll('.videoList ul li a');
	for(var i=0;i<aLink.length;i++){
		aLink[i].href='detail.html';
	};
	for(var j=0;j<aLinkL.length;j++){
		aLinkL[j].href='detail.html';
	}
})();