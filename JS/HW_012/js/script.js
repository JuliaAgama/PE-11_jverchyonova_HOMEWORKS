;
/***** JS Homework #12. Working with timers, setTimeout and setInterval, localStorage, sessionStorage *****/


//#Теоретический вопрос

//Опишите своими словами разницу между функциями setTimeout() и setInterval().
// setTimeout()  - вызывается единоразово через заданное время,  setInterval() - вызывается многоразово с заданным промежутком времени.


//Что произойдет, если в функцию setTimeout() передать нулевую задержку? Сработает ли она мгновенно, и почему?
// сработает через ~4+мс, после того, как освободится место в очереди выполнения, т.е. после завершения основного текущего скрипта.


//Почему важно не забывать вызывать функцию clearInterval(), когда ранее созданный цикл запуска вам уже не нужен?
// чтобы избежать бесконечного цикла вызова функции и чрезмерной загрузки процессора.




console.log('-----------------------------------');
/******* JS Homework #12. Cycled slider *******/
console.log('*** JS Homework #12. Basic. Cycled slider ***');

//Задание
//Реализовать программу, показывающую циклично разные картинки.
//
//Технические требования:
//
//В папке banners лежит HTML код и папка с картинками.
//При запуске программы на экране должна отображаться первая картинка.
//Через 10 секунд вместо нее должна быть показана вторая картинка.
//Еще через 10 секунд - третья.
//Еще через 10 секунд - четвертая.
//После того, как покажутся все картинки - этот цикл должен начаться заново.
//При запуске программы где-то на экране должна появиться кнопка с надписью Прекратить.
//По нажатию на кнопку Прекратить цикл завершается, на экране остается показанной та картинка, которая была там при нажатии кнопки.
//Рядом с кнопкой Прекратить должна быть кнопка Возобновить показ, при нажатии которой цикл продолжается с той картинки, которая в данный момент показана на экране.
//Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
//
//


/******* цикл смены картинок *******/

let images = document.querySelectorAll('.first-wrapper .image-to-show');
let i = 0;
let isPaused = false;

let slider = setInterval( () => {
    if (!isPaused) {
        images.forEach((el) => {
            el.setAttribute('hidden', 'true');
        });
        images[i].removeAttribute('hidden');
        (i === images.length - 1) ? i = 0 : i++;
    }
}, 1000);


/******* создать кнопки для стопа и продолжения *******/

let buttons = document.createElement('div');
buttons.classList.add('buttons');
document.querySelector('.first-wrapper').after(buttons);

let stopBtn = document.createElement('button');
stopBtn.classList.add('stop-btn');
stopBtn.innerText = 'PAUSE CYCLE';
buttons.appendChild(stopBtn);

let resumeBtn = document.createElement('button');
resumeBtn.classList.add('resume-btn');
resumeBtn.innerText = 'RESUME CYCLE';
stopBtn.after(resumeBtn);


/******* слушать и активировать кнопки *******/

buttons.addEventListener ('click', (event) => {
    if (event.target === stopBtn) {
        isPaused = true;
    } else if (event.target === resumeBtn) {
        isPaused = false;
    }
});






//Не обязательное задание продвинутой сложности:
//
//При запуске программы на экране должен быть таймер с секундами и миллисекундами, показывающий сколько осталось до показа следующей картинки.
//Делать скрытие картинки и показывание новой картинки постепенным (анимация fadeOut / fadeIn) в течение 0.5 секунды.

console.log('-----------------------------------');
console.log('*** JS Homework #12. Advanced. Slow slider ***');


/******* цикл смены картинок *******/

let $images = $('.second-wrapper .image-to-show');
let n = 0;
let secShow = 5;
let paused = false;

let $timer=$(`<div class="timer">${secShow}</div>`);
$('.second-wrapper').append($timer);

let countDown = (x) => {
    if (x > 0 && !paused) {
        setTimeout( () => {
            x === 1 ? $timer.text(`${secShow}`) : $timer.text(`${x-1}`);
            countDown(--x);
        }, 1000);
    }
};
countDown(secShow);

let slide = setInterval( () => {
    if (!paused) {
        $($images[n]).fadeOut(500);
        (n === $images.length - 1) ? n = 0 : n++;
        $($images[n]).fadeIn(500);
        countDown(secShow);
    }
}, secShow*1000);


/******* создать кнопки для стопа и продолжения *******/

let $buts = $('<div class="buttons slow-buts"></div>');
$('.second-wrapper').after($buts);

let $stopBut = $('<button class="stop-btn">PAUSE CYCLE</button>');
$buts.append($stopBut);

let $resumeBut = $('<button class="resume-btn">RESUME CYCLE</button>');
$stopBut.after($resumeBut);


/******* слушать и активировать кнопки *******/
$stopBut.click(()=> {paused = true; });
$resumeBut.click(()=> {paused = false; });

