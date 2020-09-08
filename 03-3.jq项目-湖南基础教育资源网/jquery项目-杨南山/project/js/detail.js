 //检索国家资源网
$(function(){
    var $guojia = $("#guojia");
    var $jimi = $("#jimi");
    var $jLi = $jimi.find("li");
    var $guo = $("#guo")
    $jimi.bind("click",function(){
        return false;
    });
    $guojia.bind("click",function(){
       console.log(123)
        $jimi.slideToggle(200);
        return false;
    });
    $jLi.bind("click",function(){
        $guo.text($(this).text())
    });

    //切换皮肤
    $("#change").find("a").click(function(){
        if($(this).attr("id")=="blue"){
            $(this).addClass("cur").siblings().addClass("cuu");
            $("#orange").attr("disabled","false");
            $("#blue").removeAttr("disabled")
        }else{
            $(this).removeClass("cuu").siblings().removeClass("cur");
            $("#orange").removeAttr("disabled")
        }
    })



    // 切换
    function tabs(){
        var $list = $("#list");
        var $li = $list.children();
        var $boxs = $li.find(".box1");
        console.log($li)
        $li.bind("click",function(){
            var index =$(this).index();
            $li.removeClass("active");
            $(this).addClass("active");
            $boxs.hide();
            $boxs.eq(index).show();

        });

    }
    tabs()

   function slid(){
      var $next= $("#next");
      var $pre= $("#pre");
   }



//    切换城市
//切换城市
$("#tabs").bind("click",function(){
    console.log(123)
    $(this).find("div").filter(".boxs").toggle();
 })
 //高亮显示和切换对应的城市
 var $li = $("#cc").children();
 var $bds = $("#bds").find(".box1");
 var $bli = $bds.find("li");
 var $boxs = $("#boxs");
 var $tcy = $("#tcy");
 $boxs.bind("click",function(){
     return false;
 })
 $li.bind("click",function(e){
     var index= $(this).index();
     $li.removeClass("active");
     $(this).addClass("active");
     $bds.removeClass("on");
     $bds.eq(index).addClass("on");
     $tcy.text($(this).text())
     return false;
 })
 $bli.bind("click",function(){
     $bli.removeClass();
     $(this).addClass("cur");
     $tcy.text($(this).text())
 })
})

