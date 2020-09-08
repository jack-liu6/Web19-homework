window.addEventListener('load',function(){

    // 顶部导航栏的下拉菜单
    var topRightUl = document.querySelector('.top-right-ul');
    //拿到导航
    var topNav = topRightUl.children;

    // 封装了bind函数，做了兼容处理
    function bind(ele,eventType,fun){
        if(document.addEventListener){
            ele.addEventListener(eventType,fun,false);
        }else{
            ele.attachEvent('on'+eventType,fun);
        }
    }
    //循环注册事件
    for(var i=0;i<topNav.length;i++){
        //给topNav这个对象绑定事件	
        bind(topNav[i],'mouseover',function(){
            this.lastElementChild.style.display = 'block';
        });
        bind(topNav[i],'mouseout',function(){
            this.lastElementChild.style.display='none';
        });
    }

    // tab切换栏
    var tabUl = document.querySelector('.tab-ul');
    var tabLi = tabUl.children;
    var mainMenuVideo = document.querySelector('.main-menu-video');
    var videoList = document.querySelector('.video-list');
    var flag = true;
    for(var i = 0; i < tabLi.length;i++){  
        tabLi[i].onclick=function(){
            if(flag){
                // videoList.style.display = 'block';
                mainMenuVideo.style.display = 'block';
            }else {
                // videoList.style.display = 'none';
                mainMenuVideo.style.display = 'none';
            }
        flag = !flag;
        }
    }
        //   为什么把文档移出去，获取的所有标签都为空？

        function fun(){
            //获取所有要操作的元素
            var ipt=document.getElementById("ipt");
            var list=document.getElementById("list");
            var cl=list.children[1];
            var first=list.firstElemenChild;
            // 创建新节点
            var oLi=document.createElement("li");
            // 将输入框的值赋值给oLi标签
                oLi.innerText=ipt.value;
            // 在父级范围内，cl元素的前面追加oLi标签
            list.insertBefore(oLi,cl);
    
        }

    // 获取每行选项

    var show = document.querySelector(".show");
    var clear = document.querySelector('.clear');
    var options = document.querySelector(".options");
      // 创建新div
    var newOptions = document.createElement("div");
    var icos7 = document.querySelector(".icos-7");
    newOptions.appendChild(icos7);
    console.log(icos7);
    console.log(options);
   
  
    
    var line1 = document.querySelectorAll(".line-1");
    console.log(line1);
    var  mya = document.querySelectorAll(".mya");
    console.log(mya);  
   
   var flag = true;
    for(var i = 0; i < mya.length;i++){
            mya[i].addEventListener=('click',function(){
                // 每点击一次就创建一个新div
                for(var j = 0; j< newOptions.length; j++){
                    show.insertBefore(clear,newOptions);
                    newOptions[j].innerText = this.innerText;
                }      
             })
    }

    //清除条件
    var clear = document.querySelector('.clear');
    console.log(clear);
    var icos8 = document.querySelector('.icos-8');
    console.log(icos8);
    // for (var i = 0; i< options.length;i++){
            clear.addEventListener('click',function(){
                options.style.display = 'none';
                this.style.color = 'red'; 
            })
        // }
    // }
    clear.onmouseout = function(){
        clear.style.color = ''; 
    }
    icos8.onclick = function(){
        options.style.display = 'none';
    }



        // 广告图片动态效果
        // var ads = document.querySelector('.ads');
        // var timer = null;
        // function changePic(){
        //     timer = setInterval(function(){
        //         ads.style.background.url = "../images/logo.png";
        //         console.log(1);
        //     },2000)
        // }
        // changePic();
        // function stopChangePic(){
        //     clearInterval(timer.onclick = function(){
        //         ads.style.background.url = ("../images/towin.png")
        //         console.log(2);
        //     });
        // }


        function slide(){
            // 屏幕
            var slide=document.querySelector(".slide");
            // 胶卷
            var picList=slide.querySelector(".picList");
            // 获取两个控制按钮
            var btns=slide.querySelectorAll(".btns a");
            // 获取所有的小圆点
            var dots=slide.querySelectorAll(".dots span");
    
    
            // 添加一个计数器，用来存放当前播放到第几张图片了
            // 默认显示的第一张
            var index=0;//0,1,2,
            // 给每一个按钮绑定点击事件
            // 下一张
            btns[0].onclick=function(){
                // 每播放一张，就需要重新定位当前是第几张
                index++;
                // 当轮播图越界时，就需要拉回来，从0开始
                if(index>2){
                    index=0;
                }
                // JS控制核心属性，将胶卷整体往左边挪动，每次挪动320px
                picList.style.left=-235*index+"px"; 
    
                // 让小红点跟着当前图片走
                for( var j=0;j<dots.length;j++){
                    dots[j].className="";
                    // index
                    dots[index].className="on";
    
                }
            }
            // 上一张
            btns[1].onclick=function(){
                index--;
                // 判断是否越界，如果越界了，则拉回来，比如第一张时，再后退一张，则应该是到最后一张
                if(index<0){
                    index=2;
                }
                // JS控制核心属性，将胶卷整体往左边挪动，每次挪动235px
                picList.style.left=-235*index+"px"; 
                // 这里添加点击了向左，向右后，小圆点也要跟着动
                // 让小红点跟着当前图片走
                for( var j=0;j<dots.length;j++){
                    dots[j].className="";
                    // index
                    dots[index].className="on";
                }
            };
    
            // 给小圆点绑定事件
            for(var i=0;i<dots.length;i++){
                // 给每一个小圆点添加一个自定义属性，表示当前是第一个小圆点
                // 小圆点跟图片是对应的关系
                dots[i].setAttribute("index",i);
                dots[i].onclick=function(){
                    index=this.getAttribute("index");
                    // console.log(this);
                    // JS控制核心属性，将胶卷整体往左边挪动，每次挪动235px
                    picList.style.left=-235*index+"px"; 
                    // 让小红点跟着当前图片走
                    for( var j=0;j<dots.length;j++){
                        dots[j].className="";
                        this.className="on";
                    }
                };
            }
    
            // 通过定时器实现自动轮播
            // 原理，相当于是定时点击了向左箭头（下一张）
            function go(){
                // 每隔1秒相当于是自动点击了一次下一张，即自动触发一次点击事件
                btns[0].onclick();
            }
            var timer=setInterval(go,1000);
            // 鼠标移入到轮播图区域，暂停播放，离开再恢复播放
            slide.onmouseover=function(){
                clearInterval(timer);
            }
            // 鼠标离开时恢复播放
            slide.onmouseout=function(){
                timer=setInterval(go,2000);
            }
        }
        // 使用函数
        slide();
        

})
