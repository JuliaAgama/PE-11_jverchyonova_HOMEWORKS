;
/***** JS Homework #15. jQuery *****/


console.log('-----------------------------------');
/******* JS Homework #15. jQuery effects  *******/
console.log('*** JS Homework #15. jQuery effects ***');


//
//Задание
//Добавить в домашнее задание HTML/CSS №6 (Flex/Grid) различные эффекты с использованием jQuery
//
//Технические требования:
//
//Добавить вверху страницы горизонтальное меню со ссылкой на все разделы страницы.
//При клике на ссылку - плавно прокручивать страницу вниз до выбранного места.
//Если прокрутить страницу больше чем на 1 экран вниз, справа внизу должна появляться кнопка "Наверх" с фиксированным позиционариванием. При клике на нее - плавно прокрутить страницу в самый верх.
//Добавить под одной из секций кнопку, которая будет выполнять функцию slideToggle() (прятать и показывать по клику) для данной секции.
//

// 1. Добавить вверху страницы горизонтальное меню со ссылкой на все разделы страницы

//$('html, body').css({scrollTop: 0});

const $pageMenu = $('<div class="page-menu"></div>')
$('.main-menu').after($pageMenu);
$pageMenu.append($('<a href="#posts-section" class="page-link">our posts</a>'));
$pageMenu.append($('<a href="#clients-section" class="page-link">our clients</a>'));
$pageMenu.append($('<a href="#rated-section" class="page-link">top rated</a>'));
$pageMenu.append($('<a href="#news-section" class="page-link">hot news</a>'));

const $pageLinks = $('.page-link');
$pageLinks.hover((event) => {
    $(event.target).css({backgroundColor: '#18b4cf'});
});
$pageLinks.mouseout((event) => {
    $(event.target).css({backgroundColor: ''});
});


// 2. При клике на ссылку - плавно прокручивать страницу вниз до выбранного места.

$.fn.slowScrollTo = function(speed) {
    let position = $($(`${this[0].hash}`)).offset().top;
    $('html, body').animate({scrollTop: position-100}, 1000);
};

$pageLinks.click(function(event) {$(this).slowScrollTo(1000)});



// 3. Если прокрутить страницу больше чем на 1 экран вниз, справа внизу должна появляться кнопка "Наверх" с фиксированным позиционариванием. При клике на нее - плавно прокрутить страницу в самый верх

const $btnToTop = ('<button class="btn-to-top">to top</button>');
$($('script')[0]).before($btnToTop);


$.fn.slowDisplay = function(speed) {
    if ($(window).scrollTop() > $(window).innerHeight()) {
        $(this).fadeIn(speed);
    } else {
        $(this).fadeOut(speed);
    }
};

$(document).scroll(function() {$('.btn-to-top').slowDisplay('slow')});

$('.btn-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1000);
});


// 4. Добавить под одной из секций кнопку, которая будет выполнять функцию slideToggle() (прятать и показывать по клику) для данной секции.

$btnSlideToggle = ('<button class="btn-slide-toggle">hide section</button>');
$('.first-section').after($btnSlideToggle);

$.fn.changeText = function (textOne, textTwo) {
    this.text(this.text() === textOne ? this.text = textTwo : textOne);
};


$('.btn-slide-toggle').click(function() {
    $('.posts-section').slideToggle(1000);
    setTimeout(()=>{$(this).changeText('hide section', 'display section');},500);
});
