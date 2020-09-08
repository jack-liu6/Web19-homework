window.onload = function() {
    // 搜索框
    var shousuo = document.getElementsByClassName("shuru")[0]
    shousuo.onfocus = function() {
        shousuo.value = ""
    }
    shousuo.onblur = function() {
            shousuo.value = "请输入关键字"
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
    // 我看过的部分
    var odiv = document.querySelector(" #odiv")
    var kanguo = document.querySelector(".feng .kanguo")
    var wei = document.querySelector(".wei")
    kanguo.onmouseover = function() {
        odiv.style.display = "block"
        kanguo.style.backgroundColor = "#FBFBFB"
        kanguo.style.borderTop = "1px solid #C7C7C8"
        kanguo.style.borderLift = "1px solid #C7C7C8"
        kanguo.style.border = "1px solid #C7C7C8"
        wei.style.display = "none"
        odiv.onmouseover = function() {
            odiv.style.display = "block"
            kanguo.style.backgroundColor = "#FBFBFB"
            kanguo.style.borderTop = "1px solid #C7C7C8"
            kanguo.style.borderLift = "1px solid #C7C7C8"
            kanguo.style.border = "1px solid #C7C7C8"
            wei.style.display = "none"
        }
    }
    kanguo.onmouseout = function() {
        odiv.style.display = "none"
        wei.style.display = "block"
        kanguo.style.border = ""
        kanguo.style.backgroundColor = ""
    }
    odiv.onmouseout = function() {
        odiv.style.display = "none"
        kanguo.style.border = ""
        wei.style.display = "block"
        kanguo.style.backgroundColor = ""
    }
}