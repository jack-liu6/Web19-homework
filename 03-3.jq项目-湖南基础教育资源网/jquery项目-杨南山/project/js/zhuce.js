window.onload=function(){
    // 验证
    var name = document.getElementsByClassName("name")[0];
    var pwd = document.getElementsByClassName("pwd")[0];
    var comfirm = document.getElementsByClassName("comfirm")[0];
    var realName = document.getElementsByClassName("realName")[0];
    var sfz = document.getElementsByClassName("sfz")[0];
    var btn = document.getElementsByClassName("btn")[0];
    var birthday = document.getElementsByClassName("birthday")[0];
    var email = document.getElementsByClassName("email")[0];
    //提示消息
    function message(flag,success,error,obj){
        var obj = obj.parentNode.nextElementSibling;
        if(flag){
            obj.innerHTML = success;
        }else{
            obj.innerHTML = error;
        }
    }   

    btn.onsubmit=function(){
        
        return flag=name.onblur() && pwd.onblur() && comfirm.onblur() && realName.onblur() && sfz.onblur() && birthday.onblur() && email.onblur();
        
    }

    // 用户名验证
    name.onblur=function(){
        var reg = /\d+[a-zA-Z_]+|[a-zA-Z_]+\d+/;
        var flag=reg.test(this.value);
        message(flag,"输入正确","<span style='color:red'>*只允许为字母、数字和下划线</span>",this);
        return flag;
    }
    // 密码验证
    pwd.onblur=function(){
        var reg = /^(?!bai[0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
        var flag=reg.test(this.value);
        message(flag,"输入正确","<span style='color:red'>*密码长度必须在6-12个字符之间</span>",this);
        return flag;
    }

    comfirm.onblur=function(){
        var flag = pwd.value===this.value;
        message(flag,"输入正确","<span style='color:red'>*密码不一致</span>",this);
        return flag;
    }

    //真实姓名
    realName.onblur=function(){
        var reg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
        var flag=reg.test(this.value);
        message(flag,"输入正确","<span style='color:red'>*姓名不合法</span>",this);
        return flag;
    }

    //身份证
    sfz.onblur=function(){
        var reg = /^[1-8][1-7]\d{4}(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/;
        var flag=reg.test(this.value);
        message(flag,"输入正确","<span style='color:red'>*身份证输入不正确</span>",this);
        return flag;
    }
    
    // 生日验证
    birthday.onblur=function(){
        var reg = /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/;
        var flag=reg.test(this.value);
        message(flag,"输入正确","<span style='color:red'>*请输入合法生日</span>",this);
        return flag;
    }

    // 邮箱验证
    email.onblur=function(){
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        var flag=reg.test(this.value);
        message(flag,"输入正确","<span style='color:red'>*请输入合法得邮箱</span>",this);
        return flag;
    }

}



