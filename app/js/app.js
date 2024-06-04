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
    
});
