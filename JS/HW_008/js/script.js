;
/********** JS Homework #08. Event Listener **********/

//Теоретический вопрос
//
//Опишите своими словами, как Вы понимаете, что такое обработчик событий.

// это функция, ожидающая какого-либо взаимодействия пользователя с элементом, после которого начинается ее выполнение.



console.log('-----------------------------------');
/******* JS Homework #08 - BASIC. Validate Price  *******/
console.log('*** JS Homework #08 - BASIC. Validate Price ***');
//
//Задание
//Создать поле для ввода цены с валидацией.
//
//Технические требования:
//
//При загрузке страницы показать пользователю поле ввода (input) с надписью Price. Это поле будет служить для ввода числовых значений


let inputField = document.createElement('input');
inputField.classList.add('input-field');
inputField.setAttribute('placeholder', 'Price');
inputField.setAttribute('type', 'text');

document.getElementsByTagName('script')[0].before(inputField);


let inputLegend = document.createElement('span');
inputLegend.classList.add('input-legend');

let inputLegendBtn = document.createElement('span');
inputLegendBtn.classList.add('input-legend-btn');
inputLegendBtn.innerHTML = '<i class="far fa-times-circle"></i>';
//inputLegendBtn.innerText = '+';

let errorMessage = document.createElement('p');
errorMessage.innerText = 'Please enter correct price';
errorMessage.classList.add('error-message');


//Поведение поля должно быть следующим:
//
//При фокусе на поле ввода - у него должна появиться рамка зеленого цвета. При потере фокуса она пропадает.

inputField.addEventListener('focusin', (event) => {
    event.currentTarget.style.outlineColor = 'green';
    event.currentTarget.style.border = '3px solid green';
    event.currentTarget.style.backgroundColor = '';
    inputLegend.remove();
    inputLegendBtn.remove();
    errorMessage.remove();
});

inputField.addEventListener('focusout', (event) => {
    event.currentTarget.style.outlineColor = '';
    event.currentTarget.style.border = '';

//Когда убран фокус с поля - его значение считывается, над полем создается span, в котором должен быть выведен текст: Текущая цена: ${значение из поля ввода}. Рядом с ним должна быть кнопка с крестиком (X). Значение внутри поля ввода окрашивается в зеленый цвет.
    if (event.target.value !== '' && Number(event.target.value) >=0) {
        event.currentTarget.style.backgroundColor = 'palegreen';
        inputLegend.innerText = `Текущая цена: ${Number(event.target.value)}`;
        inputField.before(inputLegend);
        inputField.before(inputLegendBtn);
    } else {

//Если пользователь ввел число меньше 0 - при потере фокуса подсвечивать поле ввода красной рамкой, под полем выводить фразу - Please enter correct price. span со значением при этом не создается.
        event.currentTarget.style.outlineColor = 'red';
        event.currentTarget.style.border = '3px solid red';
        event.currentTarget.style.backgroundColor = '';
        inputField.after(errorMessage);
    }
});

//При нажатии на Х - span с текстом и кнопка X должны быть удалены. Значение, введенное в поле ввода, обнуляется.
inputLegendBtn.addEventListener('click', (event) => {
    event.currentTarget.nextElementSibling.value = '';
    event.currentTarget.nextElementSibling.style.backgroundColor = '';
    event.currentTarget.previousElementSibling.remove();
    event.currentTarget.remove();
})

