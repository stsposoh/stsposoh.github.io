(function() {
  "use-strict";

  //установить длинну линий в шапке
  $(window).on('load resize', function () {
    if ($(window).width() >= 575){
      var offsetNode = document.querySelector('.js-get-offset');
  
      if (offsetNode) {
        offset = offsetNode.getBoundingClientRect();

        if ($(window).width() >= 860){
          $('.header__img-line-left').css('width', Math.round(offset.left - 19) + 'px');
          $('.header__img-line-right').css('width', Math.round(offset.left + 10) + 'px');
        } else {
          $('.header__img-line-left').css('width', '');
          $('.header__img-line-right').css('width', '');
        }
      
        $('.header__btns-line').css('right', Math.round(offset.left + 100) + 'px');
      }
    } else {
      $('.header__btns-line').css('right', '');
    }
  });

  //menu
  $('.menu__icon').on('click', function() {
    $('.menu__wrap').addClass('--show');
    animateCSS('.menu__panel', 'slideInRight');
  });

  $('.menu__panel-close, .menu__hidder').on('click', function() {
    if (GetIEVersion() > 0) {
      $('.menu__wrap').removeClass('--show');
    } else {
      animateCSS('.menu__panel', 'slideOutRight', function() {
        $('.menu__wrap').removeClass('--show');
      })
    }
  });

  function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    if (Idx > 0) {
      return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
    } else if (!!navigator.userAgent.match(/Trident\/7\./)) {
      return 11;
    } else {
      return 0;
    }
  }

  function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
  };


  $('.js-connected-carousel').slick({
    dots: false,
    margin: 0,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6
        }
      }
    ]
  });

}());

