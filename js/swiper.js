export default function configSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            900: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // when window width is >= 640px
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },
    });
}