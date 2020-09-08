var stars=document.querySelectorAll(".stars");
var star=document.querySelectorAll(".star");

for(var i=0;i<star.length;i++){
    star[i].index=i;
    star[i].onmouseover=function(){
        // 从这颗星星往前需要点亮
        for(var j=0;j<=this.index;j++){
            stars[j].src="image/star2_03.png";
            stars[j].style.left="0px"
            stars[j].style.bottom="0px"
        }
        // 从这颗星星开始往后需要清空
        for(var z=this.index+1;z<star.length;z++){
            stars[z].src="image/star.png";
            stars[z].style.left="2px"
            stars[z].style.bottom="2px"
        }
    };
}
var comment=document.getElementById("comment");

for(var i=0;i<star.length;i++){
    star[i].onclick=function(){
        comment.innerHTML="<b class='red'>"+"("+(this.index+1)+"分)</b>"
    };
};


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
// 教学视频

var radios = document.querySelector('.radios');
var keyword = document.querySelector('.keyword');
var keywords = document.querySelectorAll('.keyword a');
for (var i = 0; i < keywords.length; i++) {
	keywords[i].onclick = function () {
		radios.innerText = this.innerText
	}
};
var li = document.querySelectorAll('.xiala a');
for (var j = 0; j < li.length; j++) {
	li[j].onclick = function () {
		radios.innerText = this.innerText
	}
}

// 我看过的下拉
var ship=document.querySelector(".ship");
var wenzi1=document.querySelector(".wenzi1");
var k=true;
wenzi1.addEventListener('click', function () {
	if (k) {
		ship.style.display = "block";
		k = false
	} else if (k == false) {
		ship.style.display = "none";
		k = true
	}
})

var wenzi=document.querySelector(".wenzi");
var ships=document.querySelector(".ships");
var g=true;
wenzi.addEventListener('click', function () {
	if (g) {
		ships.style.display = "block";
		g = false
	} else if (g == false) {
		ships.style.display = "none";
		g = true
	}
})


//发表评论


function sub(name){
    var div=document.createElement("div");
    var evaluate=document.querySelector(".evaluate");
    var space=document.querySelector(".space");

    if(evaluate.value==""){
        alert('您的评论不能为空');
        return false
    }
    

    var time = new Date()
    var year = time.getFullYear();
    var month = add(time.getMonth() + 1);
    var date = add(time.getDate());
    var hour = add(time.getHours());
    var min = add(time.getMinutes());
    var sec = add(time.getSeconds());
    function add(num) {
        if (num < 10)
            return num = '0' + num;
        else
            return num
    }
    var istime = ' ' + year + '-' + month + '-' + date + ' ' + hour + ':' + min


    div.innerHTML='<div class="Published-content clearfix"><span class="cor316">标题：值得购买</span><span class="cor414">'+name+'</span><span class="corb2b">发表于'+istime+'</span><div class="fr"><span>支持<span class="red">(0)</span></span><span class="bors posir"></span><span>反对(0)</span></div><div class="good">'+evaluate.value+'</div></div>'
    space.appendChild(div);
    evaluate.value=""
}