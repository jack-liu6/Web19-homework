// 顶部
// var myOder=document.getElementById('myOder');
// var myOderList=document.getElementById('myOderList');
// myOder.onmouseover=function(){
// 	myOderList.
// }
function topMenu(){
	var barLV1=document.getElementsByClassName('barLV1');
	for(var i=0;i<barLV1.length;i++){
		barLV1[i].onmouseover=function(){
			this.lastElementChild.style.display='block';
		}
		barLV1[i].onmouseout=function(){
			this.lastElementChild.style.display='none';
		}
	}
};
topMenu();


// 轮播图
function bannerGo(){
	var banner=document.getElementById('banner');
	var index=0;
	
    
    
	var timer=setInterval(function(){
		// for(var i=0;i<banner.children.length;i++){
		// 	banner.children[i].style.display='none';
		// }
		// banner.children[index].style.display='block';
		index++;
		if(index>=banner.children.length){
			index=0;
		}
		var op=index-1;
	    if(op<0){
	        op=banner.children.length-1;
	    }
	    var plus=0;
    	var miles=1;
		var change=setInterval(function(){
	        plus=plus+0.1;
	        miles=miles-0.1;
	        banner.children[index].style.opacity=plus;
	        banner.children[op].style.opacity=miles;
	        if(plus>=1){
	            clearInterval(change);
	        }
	    },100)

	},3000)
	banner.onmouseover=function(){
		clearInterval(timer);
	}
	banner.onmouseout=function(){
		timer=setInterval(function(){
		// for(var i=0;i<banner.children.length;i++){
		// 	banner.children[i].style.display='none';
		// }
		// banner.children[index].style.display='block';
			index++;
			if(index>=banner.children.length){
				index=0;
			}
			var op=index-1;
		    if(op<0){
		        op=banner.children.length-1;
		    }
		    var plus=0;
	    	var miles=1;
			var change=setInterval(function(){
		        plus=plus+0.1;
		        miles=miles-0.1;
		        banner.children[index].style.opacity=plus;
		        banner.children[op].style.opacity=miles;
		        if(plus>=1){
		            clearInterval(change);
		        }
		    },100)

		},3000)
	}

};

bannerGo();

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