// 设置搜索框的下拉按钮
function search() {
    var top_search_ul = document.querySelector(".top-search-ul");
    top_search_ul.onmouseover = function () {
        top_search_ul.style.overflow = "visible";
    };
    top_search_ul.onmouseout = function () {
        top_search_ul.style.overflow = "hidden";
    };
    var top_search_ul_li = document.querySelectorAll(".top-search-ul li");
    console.log(top_search_ul_li[1].innerText)
    var first = document.getElementById("first");
    for (var i = 0; i < top_search_ul_li.length; i++) {
        top_search_ul_li[i].onclick = function () {
            console.log(1)
            first.firstElementChild.innerText = this.innerText
        };
    };
};
search();
// 设置我看过的效果
function looklook() {
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
}
looklook();
// 设置切换页
function tabs(e, ele1, ele2) {
    var li = document.querySelectorAll(ele1)
    var tab_pal = document.querySelectorAll(ele2)
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("index", i)
        li[i][e] = function () {
            for (var j = 0; j < li.length; j++) {
                li[j].className = "fl xiang tc pore"
            }
            li[1].style.borderRight = "#e2e2e2 solid 1px";
            li[1].style.borderLeft = "#e2e2e2 solid 1px";
            this.className = "fl xiang xiang0 tc pore"
            for (var x = 0; x < tab_pal.length; x++) {
                tab_pal[x].style.display = "none"
            }
            tab_pal[this.getAttribute("index")].style.display = "block"
        }
    }
}
tabs("onmouseover", ".xiang", ".zxul2")
// 设置滑动星星评分
function star() {
    var star = document.querySelectorAll(".star");
    for (var i = 0; i < star.length; i++) {
        star[i].index = i;
        star[i].onmouseover = function () {
            // 从这颗星星往前需要点亮
            for (var j = 0; j <= this.index; j++) {
                star[j].style.backgroundPosition = "-26px -120px";
            }
            // 从这颗星星开始往后需要清空
            for (var z = this.index + 1; z < star.length; z++) {
                star[z].style.backgroundPosition = "-26px -139px";
            }
        };
    }
    var comment = document.getElementById("comment");
    // 点击时评分
    for (var i = 0; i < star.length; i++) {
        star[i].onclick = function () {
            // console.log(1)
            comment.innerHTML = "(" + (this.index + 1) * 2 + "分)";
        };
    };
}
star()
// 实现留言板的特效
function send(name) {
    var submit = document.querySelector(".c-submit");
    submit.onclick = function () {
        var message = document.querySelector(".textarea").value;
        if (!message) {
            alert('您的评论不能为空！');
            return
        }
        var comment = document.querySelector(".coms");
        var div = document.createElement("div");
        var num = document.getElementById("num");
        num.innerText = message.length;
        //获取时间
        var time = new Date()
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var hour = time.getHours();
        var min = add(time.getMinutes());
        var sec = add(time.getSeconds());
        function add(num) {
            if (num < 10)
                return num = '0' + num;
            else
                return num
        }
        var istime = ' ' + year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
        if (comment.innerText === "") {
            div.className = "com lh16 mt20 clearfix"
            div.innerHTML = '<p class="clearfix mb10"><span class="blue10 mr5">标题：值得购买</span> ' + name + '<span class="gray22">发表于' + istime + '</span><span class="fr">支持<span class="red">（0）</span><span class="gray22 ml5 mr5">|</span> 反对（0）</span></p><div class="pt cutFont">' + message + '</div>'
        } else {
            div.className = "com lh16 mt20 pb15"
            div.innerHTML = '<p class="clearfix mb10"><span class="blue10 mr5">标题：值得购买</span> ' + name + '<span class="gray22">发表于' + istime + '</span><span class="fr">支持<span class="red">（0）</span><span class="gray22 ml5 mr5">|</span> 反对（0）</span></p><div class="pt cutFont">' + message + '</div>'
        }
        //清空文本内容
        document.querySelector(".textarea").value = ''
        comment.insertBefore(div, comment.firstElementChild);
    }
}
send("小猪猪")
// 字数的统计
function num() {
    var message = document.querySelector(".textarea");
    var num = document.getElementById("num");
    setInterval(function () {
        num.innerText = message.value.length;
        // setTimeout(function () {
            // if (message.value.length == 200) {
            //     alert("评论字数在200字以内！")
            // }
        // }, 2000)
    }, 1000);
}
num()
// 删除函数(选做)
function delMsg(obj) {
    if (confirm('确定要删除吗？')) {
        var comment = document.getElementById("comment")
        var a = comment.getElementsByTagName("a");
        for (var i = 0; i < a.length; i++) {
            comment.removeChild(obj.parentNode.parentNode);
        }
    }
}