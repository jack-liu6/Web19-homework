//搜索框的下拉框
var search_ul = document.getElementById("search_ul")
var index = document.getElementById("index")
search_ul.onmouseover = function () {
    search_ul.style.overflow = "visible"
}
search_ul.onmouseout = function () {
    search_ul.style.overflow = "hidden"
}
var search_li = search_ul.children
var main_menu_li = document.getElementById("main_menu_li").children
for (var i = 0; i < search_li.length; i++) {
    search_li[i].onclick = function () {
        search_li[0].firstElementChild.innerText = this.innerText
        for (var j = 0; j < main_menu_li.length; j++) {
            if (main_menu_li[j].firstElementChild.innerText == this.innerText) {
                main_menu_li[j].firstElementChild.style.color = "#ffffff";
                main_menu_li[j].firstElementChild.style.backgroundColor = "#2280cf";
                main_menu_li[j].lastElementChild.style.display = "block"
            } else {
                main_menu_li[j].firstElementChild.style.color = "#5e5e5e";
                main_menu_li[j].firstElementChild.style.backgroundColor = "#ffffff";
                main_menu_li[j].lastElementChild.style.display = "none"
            }
        }
    }
}
// 设置一下搜索框的默认情况
search_li[0].firstElementChild.innerText = "首页"
index.style.display = "block"
index.style.color = "#d84600"
//设置搜索框框的文字
var search_input = document.getElementById("search_input")
search_input.onfocus = function () {
    search_input.value = ""
}
search_input.onblur = function () {
    search_input.value = "请输入关键字"
}
// 设置主体菜单的点击效果
main_menu_li[0].firstElementChild.style.color = "#ffffff";
main_menu_li[0].firstElementChild.style.backgroundColor = "#2280cf";
main_menu_li[0].lastElementChild.style.display = "block"
for (var i = 0; i < main_menu_li.length; i++) {
    main_menu_li[i].onclick = function () {
        for (var j = 0; j < main_menu_li.length; j++) {
            if (main_menu_li[j] == this) {
                search_li[0].firstElementChild.innerText = this.innerText
                main_menu_li[j].firstElementChild.style.color = "#ffffff";
                main_menu_li[j].firstElementChild.style.backgroundColor = "#2280cf";
                main_menu_li[j].lastElementChild.style.display = "block"
            }
            else {
                main_menu_li[j].firstElementChild.style.color = "#5e5e5e";
                main_menu_li[j].firstElementChild.style.backgroundColor = "#ffffff";
                main_menu_li[j].lastElementChild.style.display = "none"
            }
        }
    }
}

// 设置首页的效果
// 设置我看过的效果
// 清空单个的播放历史
var liclose = document.querySelectorAll(".look-menu-ol1 li")
var ol1 = document.querySelector(".look-menu-ol1")
var look_clearall = document.querySelector(".look-clearall")
for (var i = 0; i < liclose.length; i++) {
    liclose[i].lastElementChild.lastElementChild.onclick = function () {
        ol1.removeChild(this.parentNode.parentNode)
        if (!ol1.innerText) {
            var newdiv = document.createElement("div")
            newdiv.innerText = "暂无播放历史";
            newdiv.className = "newdiv"
            ol1.parentNode.insertBefore(newdiv, look_clearall)
            look_clearall.onclick = null
        }
    }
}

// 清空所有的播放历史
look_clearall.onclick = function () {
    ol1.innerHTML = ""
    var newdiv = document.createElement("div")
    newdiv.innerText = "暂无播放历史";
    newdiv.className = "newdiv"
    ol1.parentNode.insertBefore(newdiv, look_clearall)
    look_clearall.onclick = null
}

// 设置主体的广告底下部分
// （真的最好用函数封装起来，不然两部分容易串起来）
function ad(img,obj) {
    var ad_img = document.getElementById(img)
    var adobj = obj
    var i = 0;
    function adimgfun() {
        ad_img.src = adobj[i];
        i++
        if (i > Object.keys(adobj).length - 1) {
            i = 0
        }
    }
    var timer = setInterval(adimgfun, 1000)
    ad_img.onmouseover = function () {
        clearInterval(timer)
    }
    ad_img.onmouseout = function () {
        timer = setInterval(adimgfun, 1000)
    }
}
ad("ad_img",{ 0: "images/ad-bottom1.jpg", 1: "images/ad-bottom2.jpg" })
ad("img",{ 0: "images/win_03.png", 1: "images/canke_03.png" })

// 设置好评和热门的切换
function tabs(e, ele1, ele2) {
    var li = document.querySelectorAll(ele1)
    var tab_pal = document.querySelectorAll(ele2)
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("index", i)
        li[i][e] = function () {
            for (var j = 0; j < li.length; j++) {
                li[j].style.color = "black"
                li[j].style.borderBottom = "2px solid transparent"
            }
            this.style.color = "orange"
            this.style.borderBottom = "2px solid orange"
            for (var x = 0; x < tab_pal.length; x++) {
                tab_pal[x].style.display = "none"
            }
            tab_pal[this.getAttribute("index")].style.display = "block"
        }
    }
}
tabs("onmouseover", ".refer-wrapper .hot-wrapper h3>div", ".refer-wrapper .hot-ul ul")
tabs("onmouseover", ".test-wrapper .hot-wrapper h3>div", ".test-wrapper .hot-ul ul")
tabs("onmouseover", ".classroom-wrapper .hot-wrapper h3>div", ".classroom-wrapper .hot-ul ul")

// 轮播图的切换
function dan() {
    var slide = document.querySelector(".ad-top");
    var li = slide.querySelectorAll(".ad-top a");
    var dots = slide.querySelectorAll(".sequence-wrapper .sequence");
    var index = 0;
    function fun() {
        for (var j = 0; j < dots.length; j++) {
            dots[j].className = "sequence inline tc bgcolor10";
            dots[index].className = "sequence inline tc bgcolor11";
        }
    }
    function btn_() {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index++
        if (index > li.length - 1) {
            index = 0
        }
        li[index].style.transition = "all 0.5s"
        li[index].style.opacity = 1;
        fun()
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute("index", i);
        dots[i].onclick = function () {
            index = this.getAttribute("index");
            for (var j = 0; j < li.length; j++) {
                li[j].style.opacity = 0
            }
            li[index].style.transition = "all 0.5s"
            li[index].style.opacity = 1;
            fun()
        };
    }
    function go() {
        btn_();
    }
    var timer = setInterval(go, 1000);
    slide.onmouseover = function () {
        clearInterval(timer);
    }
    slide.onmouseout = function () {
        timer = setInterval(go, 1000);
    }
}
dan()
// 设置二级菜单的效果
function nav() {
    var navli = document.querySelectorAll(".nav-two li")
    var sanji = document.querySelectorAll(".sanji")
    for (var i = 0; i < navli.length; i++) {
        navli[i].index = i
        navli[i].onmouseover = function () {
            for (var j = 0; j < navli.length; j++) {
                sanji[j].style.display = "none"
            }
            sanji[this.index].style.display = "block"
        }
        navli[i].onmouseout = function () {
            for (var j = 0; j < navli.length; j++) {
                sanji[j].style.display = "none"
            }
        }
    }
}
nav()
// 设置验证码的点击切换
function code() {
    var yzmimg = document.querySelector(".yzmimg")
    function codefun() {
        var code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g']
        function yzm() {
            return Math.round(Math.random() * 16);
        }
        var arr = []
        for (var i = 0; i < 4; i++) {
            arr.push(code[yzm()]);
        }
        yzmimg.innerText = arr.join('')
    }
    codefun()
    yzmimg.onclick = codefun
    var myform = document.myform
    var yzminput = myform.yzminput
    myform.onsubmit = function () {
        if (yzminput.value != yzmimg.innerText) {
            alert("您输入的验证码有误！请重新输入")
            return false
        }
    }
}
code()
// 设置logo条的吸附效果
function getPos(ele) {
    var l = 0;
    var t = 0;
    while (ele.offsetParent) {
        l += ele.offsetLeft + ele.offsetParent.clientLeft;
        t += ele.offsetTop + ele.offsetParent.clientTop;
        ele = ele.offsetParent;
    }
    return {
        'left': l,
        'top': t
    };
}
function xifu() {
    var grand = document.querySelector(".logo-wrapper");
    var hot_search = document.querySelector(".hot-search");
    var search_left = document.querySelector(".search-left");
    var search_sec = document.querySelector(".search-sec");
    var search_right = document.querySelector(".search-right");
    document.onscroll = function () {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        var t = getPos(grand).top + grand.offsetHeight;
        if (top > t) {
            grand.className = "logo-wrapper mt20 clearfix xf wt980";
            grand.style.backgroundColor = "#ffffff";
            search_left.removeChild(hot_search);
            search_sec.removeChild(search_right);
            search_sec.style.marginTop = "8px";
            search_sec.style.marginRight = "60px";
        } else {
            grand.className = "logo-wrapper mt20 clearfix";
            grand.style.backgroundColor = ""
            search_left.appendChild(hot_search);
            search_sec.appendChild(search_right);
            search_sec.style.marginTop = "";
            search_sec.style.marginRight = "";
        }
    }
}
xifu()