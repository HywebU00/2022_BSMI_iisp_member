// 自行加入的JS請寫在這裡
$(function() {
    $('.notification .pic a').click(function() {
        $('.notification_content').stop().slideToggle();
    })
    $('.member_block .member_btn').click(function() {
        $('.header_member .member_block .member_group').stop().slideToggle();
    });
    //諮詢進度 燈箱
    $('.consultation_results_lightbox').hide();
    $('.consultation_01').click(function() {
        $('.consultation_results_lightbox').fadeIn();
        $('body').addClass('fixed');
    })
    $('.consultation_results_lightbox .close a').click(function() {
        $('.consultation_results_lightbox').fadeOut();
        $('body').removeClass('fixed');
    })
    //查詢 燈箱
    $('.lightbox_block').hide();
    $('.needhelp_block .orange_button').click(function() {
        $('.lightbox_block').fadeIn();
        $('body').addClass('fixed');
    })
    $('.lightbox_block .close a').click(function() {
        $('.lightbox_block').fadeOut();
        $('body').removeClass('fixed');
    })
    // 分享按鈕 share
    $('.function_panel .share').children('ul').hide();
    $('.function_panel .share .shareButton').click(function() {
        $(this).siblings('ul').stop(true, true).slideToggle();
    })
    $('.function_panel .share .shareButton').keyup(function() {
        $(this).siblings('ul').stop(true, true).slideDown();
    })
    var _shareButton = $('.shareButton');
    $('.function_panel .share').find('li:last>a').focusout(function(event) {
        $(this).parent().parent('ul').hide();
    });
    // 左欄menu
    $('.header .menu_btn a').click(function() {
        $('.main .left_block').fadeIn();
        $('body').addClass('fixed');
        $('.main .left_block .leftblock_group').css('left', '0');
    })
    $('.main .left_block .overlay').click(function() {
        $('.main .left_block').fadeOut();
        $('body').removeClass('fixed');
        $('.main .left_block .leftblock_group').css('left', '-280px');
    })
    $('.main .left_block .leftblock_group .close a').click(function() {
        $('.main .left_block').fadeOut();
        $('body').removeClass('fixed');
        $('.main .left_block .leftblock_group').css('left', '-280px');
    })
    // 
    $('.needhelp_block').click(function(){
        $('.needhelp_block').css('right','15px');
    })
    // 點外面關閉
    $(document).on('touchend click', function(e) {
        var container = $(".header .search_btn, .function_panel .share, .needhelp_block, .notification"); //點這些以外的區塊
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.function_panel .share ul').slideUp();
            $('.header .search').slideUp();
           $('.needhelp_block').css('right','-150px');
            $('.notification .notification_content').slideUp();
            //要被收起來的區塊
        }
    });
    // password_toggle
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });
});