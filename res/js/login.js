$(function(){
    $('.btn').click(function(){
        console.log(123);
        $.get(
            "http://jx.xuzhixiang.top/ap/api/login.php",
            {
                username: $('#username').val(),
                password: $('#password').val()
        },
        data =>{
            if(data.code==1){
                setCookie('uid',data.data.id);
                setCookie('tooken',data.data.token);
                if (confirm("登录成功，是否要跳转到首页面")) {
                window.location.href='index.html';
            } else {
                return false;
            
            }
            }else{
                alert('用户名或者密码错误，请重新输入');
            }
            
        }
        )

    })
   
})