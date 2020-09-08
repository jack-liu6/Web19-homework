// 轮播图
function slide(){
    // 屏幕
    var slide=document.querySelector(".slide");
    // 胶卷
    var picList=slide.querySelector(".picList");
    // 获取两个控制按钮
    var btns=slide.querySelectorAll(".btns a");
    // 获取所有的小圆点
    var dots=slide.querySelectorAll(".dots span");
    // 默认显示的第一张
    var index=0;//0,1,
    // 给每一个按钮绑定点击事件
    // 下一张
    btns[0].onclick=function(){
        index++;
        if(index>1){
            index=0;
        }
        picList.style.left=-565*index+"px"; 

        // 让圆点跟着当前图片走
        for( var j=0;j<dots.length;j++){
            dots[j].className="";
            // index
            dots[index].className="on";

        }
    }
    // 上一张
    btns[1].onclick=function(){
        index--;
        if(index<0){
            index=1;
        }
        picList.style.left=-565*index+"px"; 
        for( var j=0;j<dots.length;j++){
            dots[j].className="";
            // index
            dots[index].className="on";

        }
    };

    // 给小圆点绑定事件
    for(var i=0;i<dots.length;i++){
        dots[i].setAttribute("index",i);
        dots[i].onclick=function(){
            index=this.getAttribute("index");
            picList.style.left=-565*index+"px"; 
            for( var j=0;j<dots.length;j++){
                dots[j].className="";
                this.className="on";

            }
        };
    }

    function go(){
        btns[0].onclick();
    }
    var timer=setInterval(go,1000);
    slide.onmouseover=function(){
        clearInterval(timer);
    }
    slide.onmouseout=function(){
        timer=setInterval(go,1000);
    }
}
// 使用函数
slide();