"use strict";

$(function () {
  $('#regBtn').click(function () {
    if ($('#username').val() == '') {
      $('#username').css('width', '70%');
      $('span')[1].innerText = '账号不能为空';
      return;
    } else {
      $('#username').css('width', '100%');
      $('span')[1].innerText = ''; // $('#username').css('width','100%');
    }

    if ($('#password').val() == '') {
      $('#password').css('width', '70%');
      $('span')[3].innerText = '密码不能为空';
      return;
    } else {
      $('#password').css('width', '100%');
      $('span')[3].innerText = '';
    }

    $.get("http://jx.xuzhixiang.top/ap/api/checkname.php", {
      username: $('#username').val()
    }, function (data) {
      // console.log(data);   
      // console.log(1);
      // // alert('注册成功');
      if (data.code == 1) {
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
          username: $('#username').val(),
          password: $('#password').val()
        }, function (data) {
          if (data.code == 1) {
            // setTimeout(window.location.href='login.html',3);
            // console.log(1);
            if (confirm("注册成功，是否要跳转登录页面")) {
              window.location.href = 'login.html';
            } else {
              return false;
            }

            console.log(data);
          } else {
            alert('用户名重复');
          }
        }); // console.log(data);
      } else {
        alert('用户名重复');
      }
    });
  });
});