function fun(){
    // 提示：
    // 1、给所有的星星绑定鼠标移入事件
    // 2、鼠标滑到任一颗星星时，可将效果分为两部分：前一部分为高亮，后一部分为熄灭
    // 3、还得给每一颗星星绑定点击事件，点击某一颗星星，得到星星表示的索引，并取对应数组元素的值显示到comment中即可
    var star=document.querySelectorAll(".star>a");
    for(var i=0;i<star.length;i++){
        star[i].index=i;
        star[i].onmouseover=function(){
            console.log(this.index);
            // 从这颗星星往前需要点亮
            for(var j=0;j<=this.index;j++){
                star[j].className="active";
            }
            // 从这颗星星开始往后需要清空
            for(var z=this.index+1;z<star.length;z++){
                star[z].className="";
            }
        };
    }
    var comment=document.getElementById("comment");
    // 点击时评分
    for(var i=0;i<star.length;i++){
        star[i].onclick=function(){
            // console.log(1)
            comment.innerHTML="<b class='red'>"+(this.index+1)+"分</b>";
        };
    };
}
fun()
// tab切换
//好评页切换
var xiang=document.querySelectorAll(".xiang")
var lbb=document.querySelectorAll(".lbb")
function tabs(e, a, b) {
	for (var i = 0; i < a.length; i++) {
		a[i].setAttribute("index", i)
		// 绑定单击事件
		a[i][e] = function () {
			// 设置面板标题样式的切换
			for (var j = 0; j < a.length; j++) {
				a[j].className = "xiang fl"
			}
			this.className = "xiang in fl";
			// 设置面板的切换
			for (var x = 0; x < b.length; x++) {
				b[x].style.display = "none"
			}
			b[this.getAttribute("index")].style.display = "block"
		}
	}
}
tabs("onclick",xiang,lbb)


var cord84 = document.getElementsByClassName('cord84')[0];
var xiala = document.getElementsByClassName('xiala')[0];
var falg = true;
cord84.addEventListener('click', function () {
	if (falg == true) {
		xiala.style.display = "block";
		falg = false
	} else if (falg == false) {
		xiala.style.display = "none";
		falg = true
	}
})