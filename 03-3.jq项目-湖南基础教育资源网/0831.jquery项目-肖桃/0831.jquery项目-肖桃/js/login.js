;(function($){
    $(function(){
        // 设置边框获取焦点的颜色改变
        $(".login-box form .kuang input").focus(function(){
            $(this).parent().css("border-color","orange")
        }).blur(function(){
            $(this).parent().css("border-color","#c8c8c8")
        })
        $(".login-box form input.kuang").focus(function(){
            $(this).css("border-color","orange")
        }).blur(function(){
            $(this).css("border-color","#c8c8c8")
        })
        // 设置登录的验证和界面的跳转
        $(".submit").click(function () {
            if($("#user").val()!="zwl"||$("#pw").val()!="123"){
                layer.alert('用户名或者密码不正确！',{icon: 2});
                return false
            }
            if($("#yzm").val()!="spoi"){
                layer.alert('验证码不正确！',{icon: 2});
                return false
            }
            //跳转到首页
            window.close('login.html');
            var mywin=window.open('index copy.html');
            // console.log(mywin.layer)
            mywin.alert('登录成功！');
            // mywin.layer.alert('登录成功，欢迎来到湖南省基础教育资源网！',{icon:1});
           
        })
    })
})(jQuery)