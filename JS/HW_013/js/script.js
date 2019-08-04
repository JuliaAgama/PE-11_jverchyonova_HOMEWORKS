;
/***** JS Homework #13. Working with timers, setTimeout and setInterval, localStorage, sessionStorage *****/


console.log('-----------------------------------');
/******* JS Homework #13. Change color theme  *******/
console.log('*** JS Homework #13. Change color theme ***');
//
//Задание
//Реализовать возможность смены цветовой темы сайта пользователем.
//
//Технические требования:
//
//Взять любое готовое домашнее задание по HTML/CSS.
//Добавить на макете кнопку "Сменить тему".
//При нажатии на кнопку - менять цветовую гамму сайта (цвета кнопок, фона и т.д.) на ваше усмотрение. При повтором нажатии - возвращать все как было изначально - как будто для страницы доступны две цветовых темы.
//Выбранная тема должна сохраняться и после перезагрузки страницы


// 0. Проверить localstorage на наличие сохраненного стиля

let pageStyle = localStorage.getItem('style-button class');


// 1. добавить кнопку с нужным стилем

let $styleButton;
if(pageStyle && pageStyle === 'style-button day-btn') {
    $styleButton = $(`<button class="${pageStyle}">Click for night style</button>`);
    togglePageStyle();
} else {
    $styleButton = $('<button class="style-button night-btn">Click for day style</button>');
};

$('.top').css({position: 'relative'});
$('.top').append($styleButton);


// 2. при нажатии менять стили кнопки и всего остального

$styleButton.click(function () {
    $(this).toggleClass('night-btn');
    $(this).toggleClass('day-btn');
    $(this).hasClass('night-btn') ? $(this).text('Click for day style') : $(this).text('Click for night style');
    togglePageStyle();
    localStorage.setItem('style-button class', `${this.className}`);
})

$('.main-block').mouseover(function () {
    $styleButton.hasClass('night-btn') ? $($(this).children()[1]).css({color: '#f26522'}) : $($(this).children()[1]).css({fontWeight: '700'});
});
$('.main-block').mouseout(function () {
    $styleButton.hasClass('night-btn') ? $($(this).children()[1]).css({color: ''}) : $($(this).children()[1]).css({fontWeight: ''});
});


// 3. функция замены стилей всех элементов на странице (кроме самой кнопки)

function togglePageStyle () {
    $('body').toggleClass('day-bgc');
    $('.top').toggleClass('day-top');
    $('.top-shadow').toggleClass('hidden');
    $('.caption').toggleClass('day-font');
    $('.picture-box').toggleClass('day-border');
    $('.details-box').toggleClass('day-back');
    $('.footer-text').toggleClass('day-font');
}

