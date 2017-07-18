'use strict';

;(function () {
    'use-strict';

    activateCarousel('.js-carousel-cards-1');
    activateCarousel('.js-carousel-cards-2');
    activateCarousel('.js-carousel-cards-3');
    activateCarousel('.js-carousel-cards-4');
    activateCarousel('.js-carousel-cards-5');

    function activateCarousel(className) {
        $(className).slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<span class="carousel-cards__prev"></span>',
            nextArrow: '<span class="carousel-cards__next"></span>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 485,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }

    //smooth scroll to link ankhor
    var smoothLinks = document.querySelectorAll('.js-smooth-to');
    var smoothSpeed = .3;

    for (var i = 0; i < smoothLinks.length; i++) {
        smoothLinks[i].addEventListener('click', function (e) {
            e.preventDefault();

            var w = window.pageYOffset;
            var hash = this.href.replace(/[^#]*(.*)/, '$1');
            var t = document.querySelector(hash).getBoundingClientRect().top;
            var start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) start = time;

                var progress = time - start;
                var r = t < 0 ? Math.max(w - progress / smoothSpeed, w + t) : Math.min(w + progress / smoothSpeed, w + t);

                window.scrollTo(0, r);

                if (r != w + t) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        }, false);
    }

    //Запрет перетаскивать картинки
    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });
})();