$(function() {
    // var indox = 0
    // console.log($(".zhongjianli")[0])
    // $(".die .a1").click(function() {
    //     if (indox == 0) {
    //         indox = 4;
    //         $(".zhongjianli")[0].style.left = -645 * 4 + "px"
    //     }
    //     indox--
    //     $(".zhongjianli").stop(true, true).animate({
    //         left: -645 * indox
    //     }, 500);
    //     return false
    // })
    // $(".die .a2").click(function() {
    //     if (indox == 4) {
    //         indox = 0;
    //         $(".zhongjianli")[0].style.left = 0
    //     }
    //     indox++
    //     $(".zhongjianli").stop(true, true).animate({
    //         left: -645 * indox
    //     }, 500);
    //     return false
    // })

})
window.onload = function() {
    // 轮播图
    function slide() {
        var beijin = document.querySelector(".beijin")
        var slide = document.querySelector(".slide");
        var picList = slide.querySelector(".picList");
        var btns = document.querySelectorAll(".btns a");
        var dots = slide.querySelectorAll(".dots span");
        var index = 0;
        var a = ["wt100 beijin jiji", "wt100 beijin back", "wt100 beijin back2", "wt100 beijin back3", "wt100 beijin back4", "wt100 beijin back5", "wt100 beijin back6", "wt100 beijin back7", "wt100 beijin back8"]
        btns[1].onclick = function() {
            index++;
            if (index > 8) {
                index = 0;
            }
            picList.style.left = -730 * index + "px";
            for (var j = 0; j < dots.length; j++) {
                dots[j].className = "";
                dots[index].className = "on";
            }
            beijin.className = a[index]
        }
        btns[0].onclick = function() {
            index--;
            if (index < 0) {
                index = 8;
            }
            picList.style.left = -730 * index + "px";
            for (var j = 0; j < dots.length; j++) {
                dots[j].className = "";
                dots[index].className = "on";
            }
            beijin.className = a[index]
        };
        for (var i = 0; i < dots.length; i++) {
            dots[i].setAttribute("index", i);
            dots[i].onclick = function() {
                index = this.getAttribute("index");
                picList.style.left = -730 * index + "px";
                for (var j = 0; j < dots.length; j++) {
                    dots[j].className = "";
                    this.className = "on";
                }
                beijin.className = a[index]
            };
        }

        function go() {
            btns[1].onclick();
        }
        var timer = setInterval(go, 3000);
        beijin.onmouseover = function() {
            clearInterval(timer);
        }
        beijin.onmouseout = function() {
            timer = setInterval(go, 3000);
        }
    }
    slide();
    // 底下碟片的轮播图
    function fun() {
        var zhongjian = document.querySelector(".zhongjian")
        var zhongjianli = zhongjian.querySelector(".zhongjianli")
        var lia = document.querySelectorAll(".zhongjianli>li")
        console.log(lia)
        zhongjianli.style.width = lia.length * 645 + "px"
        var btna = document.querySelectorAll(".lun .aa")
        var indox = 0
        var a = 0
        btna[1].onclick = function() {
            clearInterval(timer)
            var timer = setInterval(function() {
                a = a - 5
                console.log(a)
                if (a % 645 * indox == 0) {
                    clearInterval(timer)
                }
                zhongjianli.style.left = a + "px"

            }, 5)
            if (indox == 4) {
                // zhongjianli.style.left = 0 + "px"
                indox = 0
                a = 0
            }
            indox++;
            return false
        }
        btna[0].onclick = function() {
            // clearInterval(timer)

            var min = setInterval(function() {
                a = a + 5
                zhongjianli.style.left = a + "px"

                if (a % -645 * indox == 0) {
                    clearInterval(min)
                }



            }, 5)

            if (indox === 0) {
                indox = 4
                a = -645 * 4
                zhongjianli.style.left = (-645 * 4) + "px"
            }
            indox--;

            // console.log(indox)


            return false
        }
    }
    fun()
        // 固定定位

    document.onscroll = function() {
        var gudina = document.querySelector(".gudina")
        var t0 = document.documentElement.scrollTop;
        if (t0 == 0) {
            gudina.style.display = "none"
        } else {
            gudina.style.display = "block"
        }
    }

    // 顶部黑红部分
    function dianji() {
        var toubuula = document.querySelectorAll(".toubuul  a")
        for (i = 0; i < toubuula.length; i++) {
            toubuula[i].onclick = function() {
                for (j = 0; j < toubuula.length; j++) {
                    toubuula[j].className = ""
                }
                this.className = "moaa"
            }
        }
    }
    dianji()
        // 红色部分
    function em() {
        var hongbeiem = document.querySelectorAll(".hongul em")
        for (i = 0; i < hongbeiem.length; i++) {
            hongbeiem[i].onclick = function() {
                for (j = 0; j < hongbeiem.length; j++) {
                    hongbeiem[j].style.backgroundColor = ""
                }
                this.style.backgroundColor = "#9B0909"
            }
        }
    }
    em()
}