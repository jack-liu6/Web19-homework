            var ipt=document.getElementById('ipt');
			var ipt3=document.getElementById('ipt3');
			ipt.addEventListener('focus',function(){
				ipt.value='';
			});
			
			
			ipt.addEventListener('blur',function(){
				ipt.value='请输入关键字'
			});
			
			

           var contentmenu=document.getElementById('contentmenu');
           var a1=contentmenu.getElementsByTagName('a');
           for(var i=0;i<a1.length;i++){
				a1[i].onclick=function(e){
					e.preventDefault();
					ipt3.value=this.innerText;
				}
			}
           
           var jsp=document.getElementById('jsp');
           var tu=document.getElementById('jstu');
           

          	jsp.onmousemove=function(e){
           		var x=e.clientX;
           		var y=e.clientY;
           		tu.style.left=x+'px';
           		tu.style.top=y+'px';
           		tu.style.display='block';
           	}
          	
             jsp.onmouseout=function(){
            	tu.style.display='none'
            }
             
//            pic[0].onmouseover=function(){
//          	tu.style.display='block'
//          }
             
             
              
           var fix3=document.getElementById('fix3');
           var fixa=fix3.getElementsByTagName('a')[0];
           var flag=true;
           var left=-108;
           fixa.onclick=function(e){
           	  
           	  var timer=setInterval(function(){
           	  	  if(flag){
           	  	  	left+=2;
           	  	  	fix3.style.left=left+'px';
           	  	  	if(left>=0){
           	  	  		clearInterval(timer);
           	  	  		fix3.style.left='0px';
           	  	  		flag=false;
           	  	  	}
           	  	  }else{
           	  	  	left-=2;
           	  	  	fix3.style.left=left+'px';
           	  	  	if(left<=-108){
           	  	  		clearInterval(timer);
           	  	  		fix3.style.left='-108px';
           	  	  		flag=true;
           	  	  	}
           	  	  }
           	  },20)
           	  return false;
           }
            
         var clear=document.getElementById('clear');
         clear.onclick=function(){
         	ipt3.value='';
         	return false;
         }
