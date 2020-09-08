window.onload=function(){
    var json = [
        {uers:"123",psd:"456"}
    ]
    
    var btn = document.getElementById("btn");
    var users = document.getElementById("users");
    var pwd = document.getElementById("pwd");
    //点击提交验证数据
    btn.onclick=function(){
        var userVal = users.value;
        var pwdVal = pwd.value;
        for(var i=0;i<json.length;i++){
            if(json[i].uers==userVal && json[i].psd==pwdVal){
                alert("登录成功");
                window.location.href="index.html"; 
            }else{
                alert("登录失败")
            }
        }
    }
}