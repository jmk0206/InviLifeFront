$(function() {
    
    // all_menu를 클릭할 때
    $('.all_menu').click(function(){ 

        $('#side').animate({right : '0%'}, 1000);
        // fixed로 만들어서 스크롤 바가 없어지도록 한다.
        $('#wrap').css({position : 'fixed'});
        return false;
    });

    $('.s_close').click(function() {
        $('#side').animate({right : '-100%'}, 1000);
        // fixed를 relative로 만들어 다시 스크롤 바가 생기도록 한다.
        $('#wrap').css({position : 'relative'});
        return false;
    });


    // 사이드 아코디언 메뉴 열기

    $('.s_gnb .d1 .m1').click(function() {
        var d = $(this).siblings('.sub').css('display'); // 디스플레이 속성을 확인한다.

        if (d == 'block'){
            $('.s_gnb .d1 .sub').slideUp();
            $('.s_gnb .d1 .m1').removeClass('on');
        } else {
            $('.s_gnb .d1 .sub').slideUp();
            $(this).siblings('.sub').slideDown();
            $('.s_gnb .d1 .m1').removeClass('on');
            $(this).addClass('on');
        }
        return false;
    });

});

// pc 상단 메뉴바 open/close
$(document).ready(function() {
    $('.menu').on('mouseenter', function() {
        var d = $(this).siblings('.menu_category').css('display');
        if (d == 'block') {
            $('.menu_category').stop().slideUp();
        } else {
            // $('.menu_category').stop().slideUp();
            $(this).siblings('.menu_category').stop().slideDown();
        }
        return false;    
    });                                     

    $('.menu_category').on('mouseleave', function() {
        var d = $(this).css('display');
        if (d == 'block') {
            $('.menu_category').stop().slideUp();
        } else {
            $(this).siblings('.menu_category').stop().slideDown();
        }
        return false;
    });

    // 메인 이미지 슬라이드 효과
    $('.coffee_img').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay : true
      });

      
      // store_into 글자 애니메이션
    $('.store_info').on('mouseover', function() {
        $('.store_txt1').stop().fadeIn(2000, function() {
            $(this).css('display', 'block');
        });

        $('.store_txt2').stop().fadeIn(2000, function() {
            $(this).css('display', 'block');
        });
    });             
    
    $('.store_info').on('mouseout', function() {
        $('.store_txt1').stop().fadeOut(2000, function() {
            $(this).css('display', 'none');
        });

        $('.store_txt2').stop().fadeOut(2000, function() {
            $(this).css('display', 'none');
        });
    });
});
