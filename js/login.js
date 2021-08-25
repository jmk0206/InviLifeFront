$(function() {

    // input에 focus일 때 테두리 색 변경
    
    $("#user_id, #user_pw").focus(function() {
        $(this).addClass('user_select');
    }).blur(function() {
        $(this).removeClass('user_select');
    });

    // 언어 변경 select박스 클릭시 테두리 색 변경

    $("#login_lang_in").focus(function() {
        $(this).css({border: '1px solid #680000'})
    }).blur(function() {
        $(this).css({border: '1px solid #ccc'})
    });


})