// 设置导航条的点击效果,点击后背景颜色改为黑色
nav();
function nav() {
    var a = document.querySelectorAll(".header-nav li a");
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function () {
            for (var j = 0; j < a.length; j++) {
                a[j].style.backgroundColor = "#242424";
            };
            this.style.backgroundColor = "#000000";
        });
    }
}

// 设置红色导航条的点击事件，点击改变背景颜色
rednav();
function rednav() {
    var a = document.querySelectorAll(".nav-red-ul li a");
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function () {
            for (var j = 0; j < a.length; j++) {
                a[j].style.backgroundColor = "#c20c0c";
            };
            this.style.backgroundColor = "#9B0909";
            this.style.borderRadius = "20px";
        });
    }
}

// 设置顶部轮播图，淡入淡出
Rotationchart(".main-slide", ".main-slide>a>img", ".btn", ".dots span", ".main-top-wrapper")
function Rotationchart(slide, li, btns, dots, bslide) {
    var slide = document.querySelector(slide);
    var li = slide.querySelectorAll(li);
    var btns = slide.querySelectorAll(btns);
    var dots = slide.querySelectorAll(dots);
    var bslide = document.querySelector(bslide);
    // 大背景图数组
    var arr = ["url(images/pic1.jpg)", "url(images/pic2.jpg)", "url(images/pic3.jpg)", "url(images/pic4.jpg)",
        "url(images/pic5.jpg)", "url(images/pic6.jpg)", "url(images/pic7.jpg)", "url(images/pic8.jpg)",
        "url(images/pic9.jpg)"];
    var bigpic = document.querySelector(".main-top-wrapper");
    var index = 0;
    // 指示器移动函数
    function dotsmove() {
        for (var j = 0; j < dots.length; j++) {
            dots[j].className = "";
            dots[index].className = "on";
        }
    }
    // 给左边的按钮绑定单击事件
    btns[1].onclick = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index++
        if (index > li.length - 1) {
            index = 0
        }
        li[index].style.transition = "all 0.5s linear"
        li[index].style.opacity = 1;
        bigpic.style.backgroundImage = arr[index];
        bigpic.style.backgroundSize="6000px";
        bigpic.style.backgroundPosition="center center";
        // 让指示器跟着当前图片走
        dotsmove();
    }
    // 给右边的按钮绑定单击事件
    btns[0].onclick = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index--
        if (index < 0) {
            index = li.length - 1
        }
        li[index].style.transition = "all 0.5s linear"
        li[index].style.opacity = 1;
        bigpic.style.backgroundImage = arr[index];
        bigpic.style.backgroundSize="6000px";
        bigpic.style.backgroundPosition="center center";
        // 让指示器跟着当前图片走
        dotsmove()
    }
    // 给指示器绑定事件
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute("index", i);
        dots[i].onclick = function () {
            index = this.getAttribute("index");
            for (var j = 0; j < li.length; j++) {
                li[j].style.opacity = 0
            }
            li[index].style.transition = "all 0.5s linear"
            li[index].style.opacity = 1;
            bigpic.style.backgroundImage = arr[index];
            // 让指示器跟着当前图片走
            dotsmove()
        };
    }
    // 通过定时器实现自动轮播
    function automatic() {
        btns[1].onclick();
    }
    var timer = setInterval(automatic, 1000);
    // 鼠标移入到轮播图区域时，暂停播放
    bigpic.onmouseover = function () {
        clearInterval(timer);
    }
    // 鼠标离开轮播图区域时，恢复播放
    bigpic.onmouseout = function () {
        timer = setInterval(automatic, 1000);
    }
}

// 设置顶部输入框的获焦和失焦效果
focus();
function focus() {
    var input = document.querySelector(".header-input input");
    var text = input.value;
    input.onfocus = function () {
        input.value = "";
    }
    input.onblur = function () {
        input.value = text;
    }
}

// 设置新碟上架左右移动的轮播图
Rotationchart222(".new-inner", ".inner-inner", ".btn2");
function Rotationchart222(slide, picList, btn) {
    var slide = document.querySelector(slide);
    var picList = document.querySelector(picList);
    var li = picList.children;
    var btns = document.querySelectorAll(btn);
    var index = 1;
    // 给右边的按钮绑定单击事件
    btns[1].onclick = function () {
        index++;
        picList.style.transition = "left 0.5s cubic-bezier(.31,.11,0,.87)";
        if (index > li.length - 1) {
            index = 1;
            picList.style.left = "-640px";
            picList.style.transition = "";
        }
        picList.style.left = -640 * index + "px";
    }
    // 给右边的按钮绑定单击事件
    btns[0].onclick = function () {
        index--;
        picList.style.transition = "left 0.5s cubic-bezier(.31,.11,0,.87)";
        if (index < 0) {
            index = li.length - 2;
            picList.style.left = "-1920px";
            picList.style.transition = "none";
        }
        picList.style.left = -640 * index + "px";
    }
};

// 设置顶部按钮的显示和隐藏
block();
function block() {
    var btn = document.querySelector(".back-to-top");
    document.onscroll = function () {
        if (document.documentElement.scrollTop == 0) {
            btn.style.display = "none";
        } else {
            btn.style.display = "block";
        }
    }
}