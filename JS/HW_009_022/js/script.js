;
/********** JS Homework #22. Event Listener **********/


console.log('-----------------------------------');
/******* JS Homework #08 - BASIC. Validate Price  *******/
console.log('*** JS Homework #22. Draw Circle ***');


//
//Нарисовать на странице круг используя параметры, которые введет пользователь.
//
//Технические требования:
//
//При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг". Данная кнопка должна являться единственным контентом в теле HTML документа, весь остальной контент должен быть создан и добавлен на страницу с помощью Javascript.
//При нажатии на кнопку "Нарисовать круг" показывать одно поле ввода - диаметр круга. При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета. При клике на конкретный круг - этот круг должен исчезать, при этом пустое место заполняться, то есть все остальные круги сдвигаются влево.
//У вас может возникнуть желание поставить обработчик события на каждый круг для его исчезновения. Это неэффективно, так делать не нужно. На всю страницу должен быть только один обработчик событий, который будет это делать.



// 1. создать по клику первой кнопки поле для ввода диаметра с валидацией ввода чисел и кнопку запуска рисования.

const inputDiameter = document.createElement('input');
inputDiameter.setAttribute('type', 'number');
inputDiameter.classList.add('input-diameter');
inputDiameter.setAttribute('placeholder', 'enter circle diameter here');

inputDiameter.addEventListener('keypress', (event) => {
    if (isNaN(Number(event.key))) {
        return false;
    }
});

const btnSubmit = document.createElement('button');
btnSubmit.classList.add('btn-submit');
btnSubmit.innerText = 'DRAW';

const btnDraw = document.querySelector('.btn-draw');
btnDraw.addEventListener('click', (event) => {
    event.currentTarget.after(inputDiameter);
    inputDiameter.after(btnSubmit);
});


// 2. по клику на 'draw' создать 100 кругов с заданным диаметром и случайным цветом
const circlesContainer = document.createElement('div');
circlesContainer.classList.add('circles-container');

const bgColor = () => Math.floor(Math.random()*255);
let circle;

btnSubmit.addEventListener('click', (event) => {
    while (circlesContainer.firstChild) {
        circlesContainer.removeChild(circlesContainer.firstChild);
    };
    let fragment = document.createDocumentFragment();
    for (let i=0; i<100; i++) {
        circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.cssText =
            `height: ${Number(inputDiameter.value)}px;` +
            `width: ${Number(inputDiameter.value)}px;` +
            `background-color: rgb(${bgColor()}, ${bgColor()}, ${bgColor()})`;
        fragment.appendChild(circle);
    }
    btnSubmit.after(circlesContainer);
    circlesContainer.appendChild(fragment);
});


//3. По клику - удалять круг

circlesContainer.addEventListener ('click', (event) => {
   if (event.target.className === circle.className) {
       event.target.remove();
   }
});

