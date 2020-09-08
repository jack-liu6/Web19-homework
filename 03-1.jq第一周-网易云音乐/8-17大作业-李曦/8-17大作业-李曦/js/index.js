// 轮播图
window.onload = function() {
    function focus() {
        var slide = document.querySelector(".slide");
        var picList_wrap = document.querySelector(".picList-wrap");
        var picList = picList_wrap.querySelector(".picList");
        console.log(picList);
        var arrowL = document.querySelector(".arrow-l");
        var arrowR = document.querySelector(".arrow-r");
        var circle = document.querySelectorAll(".circle li");
        var index = 0;

        // 上一张
        arrowL.onclick = function() {
            index--;
            if (index < 0) {
                index = 5;
            }
            picList.style.left = -730 * index + "px";
            for (var j = 0; j < circle.length; j++) {
                circle[j].className = "";
                circle[index].className = "cur";
            }
        };
        // 下一张
        arrowR.onclick = function() {
            index++;
            if (index > 5) {
                index = 0;
            }
            picList.style.left = -730 * index + "px";
            for (var j = 0; j < circle.length; j++) {
                circle[j].className = "";
                circle[index].className = "cur";
            }
        };
        for (var i = 0; i < circle.length; i++) {
            circle[i].setAttribute("index", i);
            circle[i].onclick = function() {
                index = this.getAttribute("index");
                picList.style.left = -730 * index + "px";
                for (var j = 0; j < circle.length; j++) {
                    circle[j].className = "";
                    this.className = "cur";
                }
            }
        }

        function go() {
            arrowR.onclick();
        }
        var timer = setInterval(go, 2000);
        slide.onmouseover = function() {
            clearInterval(timer);
        }
        slide.onmouseout = function() {
            timer = setInterval(go, 2000);
        }
    }
    focus();
    // 小火箭
    var rocket = document.getElementById("rocket");

    rocket.onclick = function() {
        // var speed=5;
        // 读：读取当前滚动条的位置信息
        var top = document.documentElement.scrollTop; //100
        var timer = setInterval(function() {
            // speed+
            top -= 1000;
            // console.log(1)
            // scrollTop是可读写的！！
            // 写，改变滚动条的位置
            document.documentElement.scrollTop = top;
            if (top <= 0) {

                clearInterval(timer);
            }
        }, 10);
    }

}