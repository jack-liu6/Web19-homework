$(function() {
	var myImg = ["image/1099511652418838431.jpg", "image/109951165242710165.jpg", "image/109951165241883687.jpg",
		"image/109951165241862733.jpg", "image/109951165241855999.jpg", "image/109951165241811075.jpg",
		"image/109951165241790475.jpg", "image/109951165241778826.jpg"
	]
	// var myimage = ["../image/1099511652418838431.jpg", "../image/109951165242710165.jpg", "../image/109951165241883687.jpg",
	// 	"../image/109951165241862733.jpg", "../image/109951165241855999.jpg", "../image/109951165241811075.jpg",
	// 	"../image/109951165241790475.jpg", "../image/109951165241778826.jpg"
	// ]
	var imgIndex = 0;
	var getTime = "";

	function getImg() {
		imgIndex++;
		if (imgIndex > 7) {
			imgIndex = 0;
		}
		$(".tiee-2 img").attr("src", myImg[imgIndex]);
		// $(".tiee img").attr("background", +myimage[imgIndex]);
		$(".dian div").attr("class", "dian1")
		$(".dian div").eq(imgIndex).attr("class", "dian1 dia")
	}
	getTime = setInterval(getImg, 2000);
	$(".dian div").click(function() {
		imgIndex = $(this).index();
		$(".tiee-2 img").attr("src", myImg[imgIndex]);
		// $(".tiee").attr("background", +myimage[imgIndex]);
		$(".dian div").attr("class", "dian1")
		$(this).attr("class", "dian1 dia")
	})
	$("#stop").mouseover(function() {
		clearInterval(getTime);
	})
	$("#stop").mouseout(function() {
		getTime = setInterval(getImg, 2000);
	})
	$(".tiee-4").click(function() {
		getImg()
	})
	$(".tiee-3").click(function() {
		imgIndex--;
		if (imgIndex == -1) {
			imgIndex = 7;
		}
		$(".tiee-2 img").attr("src", myImg[imgIndex]);
		// $(".tiee img").attr("background", +myimage[imgIndex]);
		$(".dian div").attr("class", "dian1")
		$(".dian div").eq(imgIndex).attr("class", "dian1 dia")
	})


	var dianIndex = 0;
	$(".jian-1").click(function() {
		dianIndex--;
		if (dianIndex == -1) {
			dianIndex = 2;
		}
		$(".btn1").attr("class", "btn1")
		$(".btn2").attr("class", "btn2 nono")
	})
	$(".jian-2").click(function() {
		dianIndex++;
		if (dianIndex > 1) {
			dianIndex = 0;
		}
		$(".btn2").attr("class", "btn2")
		$(".btn1").attr("class", "btn1 nono")
	})
	
	
	$(".itemu").click(function(){
		var btnIndex=$(this).index()
		$(".itemu").attr("class", "itemu");//给button添加空类名
		$(this).attr("class", "hover itemu");//给点击的按钮添加样式
	})
})
