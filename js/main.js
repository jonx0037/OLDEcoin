(function ($) {
  "use strict";

  const $stickyTop = $('.sticky-top');
  const $backToTop = $('.back-to-top');

  // Spinner
  const spinner = () => {
    setTimeout(() => {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar & Back to top button
  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 300) {
      $stickyTop.addClass('shadow-sm').css('top', '0px');
      $backToTop.fadeIn('slow');
    } else {
      $stickyTop.removeClass('shadow-sm').css('top', '-100px');
      $backToTop.fadeOut('slow');
    }
  });

  // Back to top button scroll animation
  $backToTop.click(() => {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });

  // Roadmap carousel
  $(".roadmap-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 }
    }
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });
  
})(jQuery);
