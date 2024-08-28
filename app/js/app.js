import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {

    var swiper = new Swiper(".section-products .product-slider", {
        loop: true,
        pagination: {
          el: ".section-products .product-slider__pagination_products"
        },
        navigation: {
            nextEl: ".section-products .product-slider__next",
            prevEl: ".section-products .product-slider__prev",
        }
    });


    var swiper3 = new Swiper(".section-products .single-slider", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
          el: ".section-products .product-slider__pagination_single"
        },
        navigation: {
            nextEl: ".section-products .product-slider__next",
            prevEl: ".section-products .product-slider__prev",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            991: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            1560: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
        }
    });


    var swiper2 = new Swiper(".section-recomended .single-slider", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
          el: ".section-recomended .product-slider__pagination_products"
        },
        navigation: {
            nextEl: ".section-recomended .product-slider__next",
            prevEl: ".section-recomended .product-slider__prev",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            991: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            1560: {
                slidesPerView: 5,
                slidesPerGroup: 5,
            },
        }
    });

    if( document.querySelectorAll('.btn-catalog').length ) {
        document.querySelector('.btn-catalog').addEventListener('click', function(e) {

            if (document.querySelector('body').classList.contains('catalog-openned')) {
                document.querySelector('body').classList.remove('catalog-openned');
            } else {
                document.querySelector('body').classList.add('catalog-openned');
            }
        });
    }

    if( document.querySelector('.geo-current') ) {
        var geo =  document.querySelector('.geo');

        document.querySelector('.geo-current').addEventListener('click', function(e) {

            if (geo.classList.contains('openned')) {
                geo.classList.remove('openned');
            } else {
                geo.classList.add('openned');
            }
        });

        document.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(geo);
        
            if ( ! withinBoundaries ) {
                geo.classList.remove('openned');
            }
        });
    }
    
    
    function checkScroll() {
        const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if(width > 991) {
            if (window.scrollY > 48) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        }
    }
    window.addEventListener('scroll', checkScroll);

    checkScroll();


    if( document.querySelectorAll('.menu-toggler').length ) {
        document.querySelector('.menu-toggler').addEventListener('click', function(e) {
            if (document.querySelector('body').classList.contains('header-menu-openned')) {
                document.querySelector('body').classList.remove('header-menu-openned');
            } else {
                document.querySelector('body').classList.add('header-menu-openned');
            }
        });
    }


    if( document.querySelectorAll('.map').length ) {


        const hoverObjects = document.querySelectorAll('.map .pin');
        const targetObjects = document.querySelectorAll('.pan path.interactive');
        
        hoverObjects.forEach((hoverObject, index) => {
          const targetObject = targetObjects[index];
          
          hoverObject.addEventListener('mouseenter', () => {
            targetObject.classList.add('active');
          });
        
          hoverObject.addEventListener('mouseleave', () => {
            targetObject.classList.remove('active');
          });
        });
        

    }
});
