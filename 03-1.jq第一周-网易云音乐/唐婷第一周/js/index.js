$(function () {
    // 歌单推荐
    var index=0
    $(".title_1 a").click(function () {
        $(this).addClass("in").siblings().removeClass("in")
        $(".cutFont_1 ul").eq($(this).index()).show().siblings().hide();
        
    })
    // 左移动
    $(".control1_2").click(function(){
        index++;
        if(index>1){
            index=0;
        }
        $(".cutFont_1 ul").animate({left: -1200*index+'px'});
        
    })
    // 右移动
    $(".control1_1").click(function(){
        index++;
        if(index>1){
            index=0;
        }
        $(".cutFont_1 ul").animate({left:-1200*index+'px'})
        
    })
    // 控件切换
    $(".dot1_2").click(function(){
        $(".cutFont_1 ul").animate({left:'-100%'});
        $(this).addClass("o").siblings().removeClass("o")
    })
    $(".dot1_1").click(function(){
        $(".cutFont_1 ul").animate({left:'0px'});
        $(this).addClass("o").siblings().removeClass("o")
    });


    // 新歌首发
    var index_2=0
    $(".onnn").click(function () {
        $(this).addClass("in").siblings().removeClass("in")
        $(".news .mod_1").eq($(this).index()).show().siblings().hide();
    })
    // 左移动
    $(".control2_2").click(function(){
        index_2++;
        if(index_2>1){
            index_2=0;
        }
        $(".news .mod_1").animate({left: -1230*index_2+'px'});
        
    })
    // 右移动
    $(".control2_1").click(function(){
        index_2++;
        if(index_2>1){
            index_2=0;
        }
        $(".news .mod_1").animate({left:-1230*index_2+'px'})
        
    })


    // 精彩推荐
    var index_3=0
    
    // 左移动
    $(".control3_2").click(function(){
        index_3++;
        if(index_3>1){
            index_3=0;
        }
        $(".marvellous ul").animate({left: -1230*index_3+'px'});
        
    })
    // 右移动
    $(".control3_1").click(function(){
        index_3++;
        if(index_3>1){
            index_3=0;
        }
        $(".marvellous ul").animate({left:-1230*index_3+'px'})
        
    })

    
    // 客户端
    $(".kehu").hover(function(){
        $(".popup_data_detail").slideDown(400)
    },function(){
        $(".popup_data_detail").slideUp(400)
    }
    )
})


