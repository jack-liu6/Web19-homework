$(function() {
    $(".chuban").click(function() {
        $(this).find(".nianji").css("display", "block")
        $(this).find(".wenxue").addClass("on")
        $(this).siblings(".chuban").find(".nianji").css("display", "none")
        $(this).siblings().find("a").removeClass("on")
        return false
    })
    var zixin = $(".div2-left-div3 .zuixin")
    zixin.click(function() {
        $(this).find(".huodong").css("display", "block")
        $(this).find(".chengguoa").addClass("gong")
        $(this).siblings(".zuixin").find(".huodong").css("display", "none")
        $(this).siblings().find(".chengguoa").removeClass("gong")
        return false
    })
    var sheji = $(".div2-right2 .zuixin")
    sheji.click(function() {
        $(this).find(".sheji").css("display", "block")
        $(this).find(".chengguoa").addClass("gong")
        $(this).siblings(".zuixin").find(".sheji").css("display", "none")
        $(this).siblings().find(".chengguoa").removeClass("gong")
        return false
    })
})
window.onload = function() {
    var chengguoa = document.querySelectorAll(".left-div2 .chengguoa")
    var zuixin_div = document.querySelectorAll(".left-div2 .zuixin-div")
    for (i = 0; i < chengguoa.length; i++) {
        chengguoa[i].indox = i
        chengguoa[i].onclick = function() {
            for (j = 0; j < chengguoa.length; j++) {
                chengguoa[j].className = "chengguoa"
            }
            for (h = 0; h < zuixin_div.length; h++) {
                zuixin_div[h].style.display = "none"
            }

            this.className = "gong chengguoa"
            zuixin_div[this.indox].style.display = "block"
            return false
        }
    }
}