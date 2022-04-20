$(document).ready(function(){
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    })
    
    //header add on
    $('#header').hover(function(){
        $(this).addClass('on');
    },function(){
        $(this).removeClass('on');
    });
    
    //scroll header > top add on
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $('#header, .top').addClass('on');
        }else{
            $('#header, .top').removeClass('on');
        }
    });
    
    //mobileMenu
    $('.mobileBtn').click(function(){
        $('.mobileMenu').stop().slideDown(200);
    });
    
    $('.hd-close').click(function(){
        $('.mobileMenu').stop().slideUp(100);
    })
    
    $('.mobileMenu>ul>li>a').click(function(){
        $(this).parent('li').siblings('li').find('ul').hide();
        $(this).next().slideToggle(0);
    })
    
    //top
    $('.top').click(function(){
        $('html, body').stop().animate({scrollTop:0},800);
    })
})