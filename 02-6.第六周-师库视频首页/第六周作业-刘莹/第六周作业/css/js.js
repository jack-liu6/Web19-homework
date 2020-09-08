
window.onload = function(){
// 搜索框
var an = document.getElementsByClassName("an")[0]
    an.onfocus = function() {
        an.value = ""
    }
    an.onblur = function() {
            an.value = "请输入关键字"
        }
	

//轮播图
    function slide() {
        var slide = document.querySelector(".slide");
        var picList = slide.querySelector(".picList");
        var dots = slide.querySelectorAll(".dots span");
        var btns = slide.querySelectorAll(".btns a");
        var index = 0;
        btns[0].onclick = function() {

            index++;

            if (index > 1) {
                index = 0;
            }
            picList.style.left = -565 * index + "px";
            for (var j = 0; j < dots.length; j++) {
                dots[j].className = "";
                dots[index].className = "on";
            }
        }
        btns[1].onclick = function() {
            index--;

            if (index < 0) {
                index = 1;
            }
            picList.style.left = -565 * index + "px";
            for (var j = 0; j < dots.length; j++) {
                dots[j].className = "";
                dots[index].className = "on";
            }
        };
        for (var i = 0; i < dots.length; i++) {
            dots[i].setAttribute("index", i);
            dots[i].onclick = function() {
                index = this.getAttribute("index");
                picList.style.left = -565 * index + "px";
                for (var j = 0; j < dots.length; j++) {
                    dots[j].className = "";
                    this.className = "on";
                }
            };
        }
        function go() {
            btns[0].onclick();
        }
        var timer = setInterval(go, 1000);
        slide.onmouseover = function() {
            clearInterval(timer);
        }
        slide.onmouseout = function() {
            timer = setInterval(go, 1000);
        }
    }
    slide();
    
	
	
}
