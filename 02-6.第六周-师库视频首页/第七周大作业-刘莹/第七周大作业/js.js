window.onload = function() {
    // 星星评论
    var star = document.querySelectorAll(".pin>a");
    for (var i = 0; i < star.length; i++) {
        star[i].index = i;
        star[i].onmouseover = function() {
            for (var j = 0; j <= this.index; j++) {
                star[j].className = "active";
            }
            for (var z = this.index + 1; z < star.length; z++) {
                star[z].className = "";
            }
        };
    }
    var comment = document.getElementById("commet");
    for (var i = 0; i < star.length; i++) {
        star[i].onclick = function() {
            comment.innerHTML = "<b class='red'>" + "(" + (this.index + 1) * 2 + "分)" + "</b>"
        };
    };
    // Tab切换页
    function tabs(tabTit, tabBd, eventType) {
        var oTit = document.getElementById(tabTit);
        var oBd = document.querySelectorAll(".tab-pal");
        var oTitList = oTit.children;
        for (var i = 0; i < oTitList.length; i++) {
            oTitList[i].index = i;
            oTitList[i][eventType] = function() {
                for (var j = 0; j < oTitList.length; j++) {
                    if (this.index == j) {
                        oBd[this.index].style.display = "block";
                        this.className = "on";
                    } else {
                        oBd[j].style.display = "none";
                        oTitList[j].className = "";
                    }
                }
                return false;
            }
        }
    }

    tabs("tabTit", "tabBody", "onclick");
}