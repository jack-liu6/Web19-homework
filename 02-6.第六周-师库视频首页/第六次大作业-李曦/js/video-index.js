window.onload = function() {
    // shortcut二级菜单
    var orderulLi = document.querySelector(".orderul-li");
    var shopList = document.querySelector(".shop-list");
    orderulLi.addEventListener("mouseover", function() {
        shopList.style.display = "block";
    })
    orderulLi.addEventListener("mouseout", function() {
            shopList.style.display = "none";
        })
        // 轮播图
    function focus() {

        var focus_top = document.querySelector(".focus_top");
        var picList = focus_top.querySelector(".picList");
        var arrowL = focus_top.querySelector(".arrow-l");
        var arrowR = focus_top.querySelector(".arrow-r");
        var square = focus_top.querySelectorAll(".square li");
        var index = 0;
        arrowL.onclick = function() {
            index--;
            if (index < 0) {
                index = 5;
            }
            picList.style.left = -567 * index + "px";
            for (var j = 0; j < square.length; j++) {
                square[j].className = "";
                square[index].className = "current";
            }
        };
        // 下一张
        arrowR.onclick = function() {
            index++;
            if (index > 5) {
                index = 0;
            }
            picList.style.left = -567 * index + "px";
            for (var j = 0; j < square.length; j++) {
                square[j].className = "";
                square[index].className = "current";
            }
        };
        for (var i = 0; i < square.length; i++) {
            // square[i].index = i;
            square[i].setAttribute("index", i);
            square[i].onclick = function() {
                index = this.getAttribute("index");
                picList.style.left = -567 * index + "px";
                for (var j = 0; j < square.length; j++) {
                    square[j].className = "";
                    this.className = "current";
                }
            }
        }

        function go() {
            arrowR.onclick();
        }
        var timer = setInterval(go, 2000);
        focus_top.onmouseover = function() {
            clearInterval(timer);
        }
        focus_top.onmouseout = function() {
            timer = setInterval(go, 2000);
        }
    }
    focus();

    //定时改变图片的src
    var focus_bottom = document.querySelector(".focus_bottom");
    var oImg = focus_bottom.querySelector("img");
    var flag = true;
    setInterval(function() {
        if (flag) {
            oImg.src = "images/pic_03.png";
            flag = false;
        } else {
            oImg.src = "images/tifen_03.jpg";
            flag = true;
        }
    }, 5000);
    //定时改变图片的src
    var register_cake = document.querySelector(".register_cake");
    var ooImg = register_cake.querySelector("img");
    var flag = true;
    setInterval(function() {
        if (flag) {
            ooImg.src = "images/piccake_03.png";
            flag = false;
        } else {
            ooImg.src = "images/towin.png";
            flag = true;
        }
    }, 3000);

    // 历史记录
    // var PH = document.querySelector("#play_history");
    // var RL = document.querySelector(".record-list");
    // var register = document.querySelector(".register");
    // var PHlist = document.querySelector("#PH-list");
    // var PHlistli = PHlist.children[0];
    // var RLlist = document.querySelector("#RL-list");
    // console.log(RLlist);
    // PHlistli.onmouseover = function() {
    //     RL.style.display = "block";
    //     PHlistli.style.border = "1px solid #c6c6c6";
    //     PHlistli.style.background = "#fff";
    //     register.style.display = "none";
    //     RL.style.background = "#fff";
    // }
    // PHlistli.onmouseout = function() {
    //         RL.style.display = "none";
    //         PHlistli.style.border = "";
    //         register.style.display = "block";
    //     }
    // 鼠标经过显现历史记录
    var wokan = document.querySelector(".wokan");
    var RL = document.querySelector(".record-list");
    var register = document.querySelector(".register");
    wokan.addEventListener("mouseover", function() {
        RL.style.display = "block";

        wokan.style.border = "1px solid #c6c6c6";
        register.style.display = "none";
    })
    wokan.addEventListener("mouseleave", function() {
            RL.style.display = "none";
            wokan.style.border = "0";
            register.style.display = "block";
        })
        // 删除历史记录
    var icoswrong = document.querySelectorAll(".icos-wrong");
    console.log(icoswrong);
    var RLlist = document.querySelector("#RL-list");
    console.log(RLlist);
    var clearAll = document.querySelector(".clearAll");
    for (var i = 0; i < icoswrong.length; i++) {
        // icoswrong[i].index = i;
        icoswrong[i].onclick = function() {
                RLlist.removeChild(this.parentNode.parentNode);
                console.log(222);
            }
            // 删除全部历史记录
            // clearAll.onclick = function() {
            //     RLlist.removeChild(this.parentNode.previousSibling);
            // }
    }





}