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
search_li[0].firstElementChild.innerText = "教学视频"
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
main_menu_li[4].firstElementChild.style.color = "#ffffff";
main_menu_li[4].firstElementChild.style.backgroundColor = "#2280cf";
main_menu_li[4].lastElementChild.style.display = "block"
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
// 实现筛选条件
var conditions = document.getElementById("conditions")
var condition = conditions.children
var select = document.getElementById("select")
var hang1 = document.getElementById("hang1")
var hang2 = document.getElementById("hang2")
var hang3 = document.getElementById("hang3")
var hang4 = document.getElementById("hang4")
hang(hang1)
hang(hang2)
hang(hang3)
hang(hang4)
function hang(hang) {
    var lie = hang.children
    for (var i = 0; i < lie.length; i++) {
        lie[0].style.color = "orange"
        lie[0].style.textDecoration = "underline"
        lie[i].onclick = function () {
            if (this != lie[0]) {
                lie[0].style.color = "#0062dd"
                lie[0].style.textDecoration = "none"
            }
            else {
                for (var j = 0; j < lie.length; j++) {
                    if (lie[j] == this) {
                        lie[j].style.color = "orange"
                        lie[j].style.textDecoration = "underline"
                    }
                    else {
                        lie[j].style.color = "#0062dd"
                        lie[j].style.textDecoration = "none"
                        for (var y = 0; y < condition.length; y++) {
                            if (condition[y].innerText == lie[j].innerText) {
                                conditions.removeChild(condition[y])
                            }
                        }
                    }
                }
            }
            this.style.color = "orange"
            this.style.textDecoration = "underline"
            for (var x = 0; x < condition.length; x++) {
                if (condition[x].innerText == this.innerText) {
                    return
                }
            }
            if (this.innerText == "不限") {
                return
            }
            var div = document.createElement("div")
            div.className = "condition fl centery  mr20 orange3 font12 pl5"
            div.innerHTML = this.innerText + '<div class="clear inline ml10"></div>'
            conditions.appendChild(div)
            // 删除单个的搜索条件
            console[lie]
            for (var i = 0; i < condition.length; i++) {
                condition[i].lastElementChild.onclick = function () {
                    conditions.removeChild(this.parentNode)
                    var lis = select.getElementsByTagName("li")
                    for (var z = 0; z < lis.length; z++) {
                        if (lis[z].innerText == this.parentNode.innerText) {
                            lis[z].style.color = "#0062dd"
                            lis[z].style.textDecoration = "none"
                        }
                    }
                    // 当我们把一行的元素都删除以后，怎么将不限恢复为默认呢？
                    var lie1 = hang1.children
                    var lie2 = hang2.children
                    var lie3 = hang3.children
                    var lie4 = hang4.children
                    function moren(mylie) {
                        var count = 0
                        for (var i = 0; i < mylie.length; i++) {
                            if (conditions.innerText.indexOf(mylie[i].innerText) == -1) {
                                count++
                            }
                        }
                        if (count == mylie.length) {
                            mylie[0].style.color = "orange"
                            mylie[0].style.textDecoration = "underline"
                        }
                    }
                    moren(lie1)
                    moren(lie2)
                    moren(lie3)
                    moren(lie4)
                }
            }

        }
    }
}

// 清空所有的搜索条件
function hanghang(hang) {
    var aiya = hang.children
    for (var i = 0; i < aiya.length; i++) {
        aiya[i].style.color = "#0062dd"
        aiya[i].style.textDecoration = "none"
    }
    hang.firstElementChild.style.color = "orange"
    hang.firstElementChild.style.textDecoration = "underline"
}
var clearall = document.getElementById("clearall")
clearall.onclick = function () {
    conditions.innerHTML = ""
    hanghang(hang1)
    hanghang(hang2)
    hanghang(hang3)
    hanghang(hang4)
}
// 搜索条件列表的移入移出效果
var select = document.querySelector(".select")
select.onmouseover = visible
conditions.onmouseover = visible
function visible() {
    conditions.style.overflow = "visible"
}
select.onmouseout = hidden
conditions.onmouseout = hidden
function hidden() {
    conditions.style.overflow = "hidden"
}
// 设置最新、热播、好评的效果
var upfather = document.querySelectorAll(".upfather")
for (var i = 0; i < upfather.length; i++) {
    upfather[i].setAttribute("index", i)
    upfather[i].onclick = function () {
        for (var j = 0; j < upfather.length; j++) {
            upfather[j].lastElementChild.style.backgroundPosition = "0 -167px"
        }
        this.lastElementChild.style.backgroundPosition = "0 -179px"
        // 上下菜单的点击效果一致
        if (this.getAttribute("index") <= 2) {
            upfather[+this.getAttribute("index") + 3].lastElementChild.style.backgroundPosition = "0 -179px"
        }
        else {
            upfather[+this.getAttribute("index") - 3].lastElementChild.style.backgroundPosition = "0 -179px"
        }
    }
}
// 设置分栏的效果
var videolist_top = document.querySelector(".videolist-top")
var videolist_bottom = document.querySelector(".videolist-bottom")
var sq1father = document.querySelectorAll(".sq1father")
var sq2father = document.querySelectorAll(".sq2father")
var dn1 = function () {
    this.lastElementChild.style.backgroundPosition = "0 -211px"
    videolist_top.style.display = "block"
    videolist_bottom.style.display = "none"
}
sq1father[0].onclick = dn1;
sq1father[0].addEventListener("click", function () {
    sq1father[1].lastElementChild.style.backgroundPosition = "0 -211px"
    sq2father[0].lastElementChild.style.backgroundPosition = "-22px -190px"
    sq2father[1].lastElementChild.style.backgroundPosition = "-22px -190px"
})
sq1father[1].addEventListener("click", function () {
    sq1father[0].lastElementChild.style.backgroundPosition = "0 -211px"
    sq2father[0].lastElementChild.style.backgroundPosition = "-22px -190px"
    sq2father[1].lastElementChild.style.backgroundPosition = "-22px -190px"
})
sq1father[1].onclick = dn1;
// 设置顺序的效果
function dn2() {
    this.lastElementChild.style.backgroundPosition = "-22px -211px"
    videolist_top.style.display = "none"
    videolist_bottom.style.display = "block"
}
sq2father[0].onclick = dn2;
sq2father[1].onclick = dn2;
sq2father[0].addEventListener("click", function () {
    sq2father[1].lastElementChild.style.backgroundPosition = "-22px -211px"
    sq1father[0].lastElementChild.style.backgroundPosition = "0 -190px"
    sq1father[1].lastElementChild.style.backgroundPosition = "0 -190px"
})
sq2father[1].addEventListener("click", function () {
    sq2father[0].lastElementChild.style.backgroundPosition = "-22px -211px"
    sq1father[0].lastElementChild.style.backgroundPosition = "0 -190px"
    sq1father[1].lastElementChild.style.backgroundPosition = "0 -190px"
})
// 设置页码的点击效果
var page = document.querySelectorAll(".page-ul li")
for (var i = 0; i < page.length; i++) {
    page[i].setAttribute("index", i)
    page[i].onclick = function () {
        for (var j = 0; j < page.length; j++) {
            page[j].style.color = "#1f85d2"
        }
        this.style.color = "black"
        // 上下菜单的点击效果一致
        if (this.getAttribute("index") <= 12) {
            page[+this.getAttribute("index") + 13].style.color = "black"
        }
        else {
            page[+this.getAttribute("index") - 13].style.color = "black"
        }
    }
}
// js设置默认的页码效果
page[0].style.color = "black"
page[13].style.color = "black"
// 设置主体右边图片的切换效果
function ad() {
    var img = document.getElementById("img")
    var obj = { 0: "images/win_03.png", 1: "images/canke_03.png" }
    var i = 0;
    function imgfun() {
        img.src = obj[i];
        i++
        if (i > Object.keys(obj).length - 1) {
            i = 0
        }
    }
    var timer = setInterval(imgfun, 1000)
    img.onmouseover = function () {
        clearInterval(timer)
    }
    img.onmouseout = function () {
        timer = setInterval(imgfun, 1000)
    }
}
ad()
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