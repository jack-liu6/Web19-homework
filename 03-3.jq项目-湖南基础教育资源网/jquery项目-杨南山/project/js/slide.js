(function($){

    //默认配置
    var defaults = {
        dot:["","","","",""],
        bodys:['','','','',''],
        img:['','','','',''],
        events : 'click'
    }
    //配置
    var settings = {}
    //当前的this
    var $parents = null;
    
    function init(options){

        settings = $.fn.extend(settings,defaults,options);

        $parents = this;

        create();

        bind();


    }

    //动态创建
    function create(){
        var $box =$("<div class='box'></div>");
        var $do = $("<div class='do'></div>");
        var $ul = $("<ul class='clearfix'></ul>");
        
        $box.append($do);
        $box.append($ul);
        $parents.append($box);
        for(var i=0;i<settings.dot.length;i++){
            var $a=$("<a>"+settings.dot[i]+"</a>");
           
            if(i==0){
                $a.attr('class','active')
            }
            $do.append($a);
        }
        
        for(var i=0;i<settings.bodys.length;i++){
            var $li = $("<li>"+settings.bodys[i]+"</li>");
            var $a = $("<a href='#'></a>");
            var $img =$("<img src="+settings.img[i]+">");
            $li.append($a);
            $a.append($img);
            $ul.append($li);
        }
    }   
    //绑定事件
    function bind(){
        var $li = $parents.find(".box ul li");
        $li.slice(0,1).css("left",0);
        $li.slice(1).css("left",500);
        var iNow = 0;
        var index=0;;
        var flag =true;
        var $box = $parents.find(".box");

        $parents.find(".do a").on(settings.events,function(){
            index = $(this).index();
            if(flag){
                $parents.find(".do a").attr('class','');
                $(this).attr('class','active');
                flag = false;
                if(index>iNow){
                    $li.eq(iNow).animate({left:-500});
                    $li.eq(index).css({left:500});
                }else if(index<iNow){
                    $li.eq(index).css({left:-500});
                    $li.eq(iNow).animate({left:500});
                }
                $li.eq(index).animate({left:0},function(){
                    flag=true;
                });
                iNow = index;
            }
        })



        function fun(){
            index++;
            $parents.find(".do a").attr('class','');
            $parents.find(".do a").eq(index).attr('class','active');
            $li.eq(index-1).animate({left:-500});
            $li.eq(index).css({left:500});
            $li.eq(index).animate({left:0});
            if(index==5){
                index=0;
                $parents.find(".do a").eq(index).attr('class','active');
                $li.eq(0).css({left:-500});
                $li.eq(4).animate({left:500});
                $li.eq(0).animate({left:0});
            }
        }
        $box.timer=setInterval(fun,2000)

        $box.bind("mouseover",function(){
           clearInterval($box.timer);
        })

        $box.bind("mouseout",function(){
            $box.timer=setInterval(fun,2000)
        })
    }
    
    //接口
    $.fn.extend({
        slides : init
    })
})(jQuery);