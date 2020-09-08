
window.onload=function(){
    // 顶部导航栏下拉
    function tab(){
        var uuobj = document.getElementById('uu');
        var li_items=uuobj.getElementsByClassName('item');
        for(var i=0;i<li_items.length;i++){
            li_items[i].onmouseover=function(){
                this.firstElementChild.className='on';
                this.lastElementChild.style.display='block';
                this.firstElementChild.lastElementChild.className='icon-caret-up';
            }
            li_items[i].onmouseout=function(){
                this.firstElementChild.className='';
                this.lastElementChild.style.display='none';
                this.firstElementChild.lastElementChild.className='icon-caret-down';
            }
        }
    }
    tab();

    //摸Logo显示和隐藏图标
    function muo(){
        var muo=document.getElementById('lol')
        var shikuwang= muo.getElementsByClassName('shikuwang')[0]
        console.log(shikuwang)
        muo.onmouseover=function(){
            shikuwang.style.display='block'
        }
        muo.onmouseout=function(){
            shikuwang.style.display='none'
        }
    }
    muo()

//********************************** 删除和添加 ************************************************
    var row1=document.getElementById('l_1');
    var row2=document.getElementById('l_2');
    var row3=document.getElementById('l_3');
    var row4=document.getElementById('l_4');
    function fun(row){
        var ran=Math.floor(Math.random()*1000)
        var rongqi=document.getElementById('delete')//装创建了dvobj的容器
        var child=row.children;//第一个rows的所有子元素
        //先清理所有的类样式
        function clear(){
            for(var i=0;i<child.length;i++){
                child[i].className='aoption';
            }
        }
        //点击前的元素添加样式
        for(var i=0;i<child.length;i++){
            child[i].addEventListener('click',function(){
               clear();
               this.className='aoption cor';//给当前点击的元素添加类样式
               //判断如果点击的不是“不限”这个字就创建元素
               if(this.innerText!='不限'){
                  //创建点击的当前的元素并添加到容器中去;
                  var dvobj1 = document.createElement('div');
                  var dvobj2= document.createElement('span');
                  //创建元素样式
                    if(document.getElementById('appen'+ran+'')){
                        document.getElementById('appen'+ran+'').innerText=this.innerText;
                        return;
                    }
                    dvobj1.style.cssText='height:20px;border:1px solid #e27000;line-height:20px';
                    dvobj1.style.display='inline-block';
                    dvobj1.style.marginRight='6px';
                    dvobj1.className='dvobj1s';
                    dvobj2.className='sptions icon-star1';
                    dvobj2.innerText=this.innerText;
                    dvobj2.id='appen'+ran+'';//随机的一个id值
                    dvobj2.style.cssText='color:orange;margin-left:6px;cursor:pointer';
                    dvobj2.onclick=function(){
                        detEle(this);
                    };
                    dvobj1.appendChild(dvobj2);
                    rongqi.appendChild(dvobj1);
                    //如果这个容器存在元素并且内容为
               }else if(document.getElementById('appen'+ran+'')&&this.innerText=='不限'){
                    // console.log(document.getElementById('appen'+ran+'').parentNode)
                    rongqi.removeChild(document.getElementById('appen'+ran+'').parentNode)
               }
            })
        }
         //给当前这行的每个元素点击事件结束
        //给容器里面的每个元素添加点击事件 并对应把当前行的高亮效果删除
        var rongqiChild=rongqi.children;//获取每个容器的子元素
        function detEle(obj){
            for(var i=0;i<child.length;i++){
                if(obj.innerText==child[i].innerText){
                    child[i].className='aoption';
                    child[0].className='aoption cor';
                }
            }
            rongqi.removeChild(obj.parentNode);
        }    
    }
    //清空添加的条件并且让无所有的无限高亮显示
    function deAll(){
        var aoptions=document.getElementsByClassName('aoption');
        var deleteBox=document.getElementById('delete');//装所有条件的容器
        
        var empty=document.getElementById('empty');
        empty.onclick=function(){
            var len=deleteBox.children.length;
           for(var i=0;i<len;i++){
             deleteBox.removeChild(deleteBox.children[0]);
           }
           for(var j=0;j<aoptions.length;j++){
            aoptions[j].className='aoption';
            if(aoptions[j].innerText=='不限'){
                aoptions[j].className='aoption cor';
            }
            
           }
        }
       
    }
    fun(row1)
    fun(row2)
    fun(row3)
    fun(row4)
    deAll()

//********************************** 删除和添加 ************************************************

//广告
function heihei(e){
    var box=document.getElementById('xiuxiu');
    var l=0;
    var t=0;
    var stepx=3;
    var stepy=4;
    function dong(){
        l+=stepx;
        t+=stepy;
        if(l<0||l>=window.innerWidth-box.offsetWidth){
            stepx=-stepx
        }
        if(t<0||t>=window.innerHeight-box.offsetHeight){
            stepy=-stepy
        }
        box.style.left=l+'px';
        box.style.top=t+'px';
    }
    var timer=setInterval(dong,20)
    box.onmouseover=function(){
        clearInterval(timer)
    }
    box.onmouseout=function(){
        timer=setInterval(dong,20)
    }
}
 heihei()
//广告结束

//高亮
function shaofu(){
    var site_u1=document.getElementsByClassName('site_u1')[0];
    var site_r_tt1=document.getElementsByClassName('site_r_tt1')[0];
    var child=site_u1.children;
    var index=0;
    function fun(){
        for(var i=0;i<child.length;i++){
            child[i].style.backgroundColor=''
        }
        child[index].style.backgroundColor='rgba(207,166,166,0.5)'
        index++;
        if(index>child.length-1){
            index=0;
        }
    }
        var timer1=setInterval(fun,1000)    

        site_u1.onmouseover=function(){
            
            clearInterval(timer1)
        }
        site_u1.onmouseout=function(){
            timer1=setInterval(fun,1000)
        }
}
shaofu();

//边框高亮
function lin(){
    var imgs=document.getElementsByClassName('im1');
    var listv3=document.getElementsByClassName('list-vedio3');
    for(var i=0;i<imgs.length;i++){
        imgs[i].onmouseover=function(){
            for(var k=0;k<imgs.length;k++){
                imgs[k].style.border='1px solid #d5d5d5'
            }
            this.style.border='1px solid orange'
        }
    
    for(var j=0;j<listv3.length;j++){
        listv3[j].onmouseover=function(){
            for(var k=0;k<listv3.length;k++){
                listv3[k].style.backgroundColor=''
            }
            this.style.backgroundColor='#fff8e2'
        }
    }


        
        
    }
}

lin()











}