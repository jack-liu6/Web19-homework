$(function (){
    $("#skinblue").bind('click',function (){
        $(this).toggleClass('dg');
        if($(this).hasClass('dg')){
            $("#skinorange").toggleClass('dg1');
        }
        $('#bluecss').removeAttr('disabled');
        $('#orangecss').attr('disabled','disabled');
    })

    $("#skinorange").click(function(){
        $(this).toggleClass("dg1");
        if($(this).hasClass('dg1')){
            $("#skinblue").toggleClass('dg');
        };
        $('#orangecss').removeAttr('disabled');
        $('#bluecss').attr('disabled','disabled');
    });

    $(".ss a").bind('click',function (){
        $(this).addClass('bg1').siblings().removeClass('bg1');
        $(".ss1").eq($(this).index()).show().siblings().hide();
    })

    $(".dt").bind('click',function (){
        $(".dt3").show(100);
    })

    $(".nav2 ul li a").bind('click',function (){
        if($(".aa:eq(1)").is("strong")==false){
            $(this).addClass('nav2-bg').parent().siblings().children().removeClass('nav2-bg');
        }else{
            $(this).addClass('nav-bg2').parent().siblings().children().removeClass('nav-bg2');
        }
    })

    $(".aa1").hover(function (){
        $(".mm1").slideDown(100);
    })
    $(".mm1").hover(function (){
    },function (){
        $(this).slideUp(100);
    })

    $(".xz").bind('click',function (){
        $(this).addClass('bg2').siblings().removeClass('bg2')
        $(".mc1").eq($(this).index()).show().siblings().hide();
    })

    layui.use(['carousel', 'form'], function(){
        var carousel = layui.carousel
            ,form = layui.form;

        carousel.render({
            elem: '#test10'
            ,width: '502px'
            ,height: '234px'
            ,interval: 3000
        });

        $('.demoTest .layui-btn').on('click', function(){
            var othis = $(this), type = othis.data('type');
            active[type] ? active[type].call(this, othis) : '';
        });
    });

    $(".gx").bind('click',function (){
        $(this).addClass('gx1').siblings().removeClass('gx1');
    });

    $(".gx2").bind('click',function (){
        $(this).addClass('gx1').siblings().removeClass('gx1');
        $(".cc").eq($(this).index()).show().siblings().hide();
    });

    var $ul=$(".lb1");
    var $list=$ul.children("ul").width();
    $ul.width($ul.children().length*$list);
    console.log($ul.width($ul.children().length*$list))
    var count=1;
    $(".prev").bind('click',function (){
        if(!$ul.is(":animated")){
            count++;
            console.log(count)
            $ul.animate({
                "left":-count*653
            },600,function (){
                if(count==3){
                    count=1;
                    $ul.css("left",-653);
                }
            });
        }

    });
    $(".next").bind('click',function (){
        if(!$ul.is(":animated")){
            count--;
            console.log(count)
            $ul.animate({
                "left":-count*653
            },600,function (){
                if(count==0){
                    $ul.css("left",-2*653);
                    count=2;
                }
            });
        }

    });

    $(".xk ul li").bind('click',function (){
        $(this).addClass('bg3').siblings().removeClass('bg3');
        $(".slk").eq($(this).index()).show().siblings().hide();
    })

    $(".code").bind('click',function (){
        $(this).addClass('bg6').siblings().removeClass('bg6');
        $(".btl").eq($(this).index()).show().siblings().hide();
    })

    var $ul1=$(".lb2");
    var $list1=$ul1.children(".al").width();
    $ul1.width($ul1.children().length*$list1);
    console.log($ul1.width($ul1.children().length*$list1))
    var counst=1;
    $(".left").bind('click',function (){
        if(!$ul1.is(":animated")){
            counst++;
            console.log(counst)
            $ul1.animate({
                "left":-counst*768
            },600,function (){
                if(counst==3){
                    counst=1;
                    $ul1.css("left",-768);
                }
            });
        }

    });
    $(".right").bind('click',function (){
        if(!$ul1.is(":animated")){
            counst--;
            console.log(counst)
            $ul1.animate({
                "left":-counst*768
            },600,function (){
                if(counst==0){
                    $ul1.css("left",-2*768);
                    counst=2;
                }
            });
        }

    });

    $(".zd span img").hover(function (){
        $(".fxf").show()
    },function (){
        $(".fxf").hide()
    })

    var $ul2=$(".lb3");
    var $list2=$ul2.children(".al").width();
    $ul2.width($ul2.children().length*$list2);
    console.log($ul2.width($ul2.children().length*$list2))
    var counst1=1;
    $(".left1").bind('click',function (){
        if(!$ul2.is(":animated")){
            counst1++;
            console.log(counst1)
            $ul2.animate({
                "left":-counst1*768
            },600,function (){
                if(counst1==3){
                    counst1=1;
                    $ul2.css("left",-768);
                }
            });
        }

    });
    $(".right1").bind('click',function (){
        if(!$ul2.is(":animated")){
            counst1--;
            console.log(counst)
            $ul2.animate({
                "left":-counst1*768
            },600,function (){
                if(counst1==0){
                    $ul2.css("left",-2*768);
                    counst1=2;
                }
            });
        }

    });

    var $ul3=$(".lb4");
    var $list3=$ul3.children(".al").width();
    $ul3.width($ul3.children().length*$list3);
    console.log($ul3.width($ul3.children().length*$list3))
    var counst2=1;
    $(".left2").bind('click',function (){
        if(!$ul3.is(":animated")){
            counst2++;
            console.log(counst2)
            $ul3.animate({
                "left":-counst2*768
            },600,function (){
                if(counst2==3){
                    counst2=1;
                    $ul3.css("left",-768);
                }
            });
        }

    });
    $(".right2").bind('click',function (){
        if(!$ul3.is(":animated")){
            counst2--;
            console.log(counst2)
            $ul3.animate({
                "left":-counst2*768
            },600,function (){
                if(counst2==0){
                    $ul3.css("left",-2*768);
                    counst2=2;
                }
            });
        }

    });

})

window.addEventListener('load',function (){
    var dt1=document.querySelector('.dt1 p');
    var ss=document.querySelectorAll('.ss2 a');
    var dt3=document.querySelector('.dt3');
    for(i=0;i<ss.length;i++){
        ss[i].addEventListener('click',function (){
            dt1.innerText=this.innerText;
            dt3.style.display='none';
        })
    }
})