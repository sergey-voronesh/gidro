$(function(){
    $('.banner__section--slider').slick({
        dots: true,
        prevArrow: '<button class="banner__section--slider-btn banner__section--slider-btnprev"><img src="./images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner__section--slider-btn banner__section--slider-btnnext"><img src="./images/arrow-right.svg" alt=""></button>',

        responsive: [
            {
              breakpoint: 969,
              settings: {
                arrows: false,
              }
            }
          ]
    });

    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab-active');
        $($(this).closest('.tabs__wrapper').siblings().find('div')).removeClass('tabs__content-active');
        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs__content-active');

        $('.product__slider').slick('setPosition');
    });



    $('.product__item--favorite').on('click', function(){
        $(this).toggleClass('product__item--favorite-active')
    });

    $('.product__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
         arrows: false,
        prevArrow: '<button class="product__slider--slider-btn product__slider--slider-btnprev"><img src="./images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product__slider--slider-btn product__slider--slider-btnnext"><img src="./images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 1301,
              settings: {
                arrows: false,
                dots: true
              }
              },
              {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    dots: true
              }
            },
            {
                breakpoint: 871,
                settings: {
                    slidesToShow: 2,
                    dots: true
              }
            },
            {
                breakpoint: 591,
                settings: {
                    slidesToShow: 1,
                    dots: true
              }
            }
          ]
        
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter-extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle();
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });


    $('.catalog__filter--btngrid').on('click', function(){
        $(this).addClass('catalog__filter--button-active');
        $('.catalog__filter--btnline').removeClass('catalog__filter--button-active');
        $('.product__item--wpapper').removeClass('product__item--wpapper-list');
    });

    $('.catalog__filter--btnline').on('click', function(){
        $(this).addClass('catalog__filter--button-active');
        $('.catalog__filter--btngrid').removeClass('catalog__filter--button-active');
        $('.product__item--wpapper').addClass('product__item--wpapper-list');

    });


    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        spacing: "7px"
      });

      $('.menu__btn').on('click', function(){
        $('.menu__mobile--list').toggleClass('menu__mobile--list-active');
      });

      $('.footer__top--title').on('click', function(){
        $(this).next().slideToggle();
      });

      $('.aside__btn').on('click', function(){
        $(this).next().slideToggle();
      });


});