(function ($) {  

  $(window).scroll(
    function(){
    var t_scroll = $(window).scrollTop();
    var t_sticky = $('#navbar');

    if (t_scroll >= 100) t_sticky.addClass('header-navbar--modifier');
      else t_sticky.removeClass('header-navbar--modifier');
  });

  $(document).ready(function() {
    $('#navbar').onePageNav({
      currentClass: 'active',
    });
  });

  AOS.init({
    duration: 500,
    easing: 'ease-in-sine',
  });

})(jQuery);