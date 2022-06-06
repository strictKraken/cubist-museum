import $ from "jquery";

export function letGoSlick() {
    const $slider = $('.slider');
    $($slider).slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:$('.slider__prev-btn'),
        nextArrow:$('.slider__next-btn'),
    })
}