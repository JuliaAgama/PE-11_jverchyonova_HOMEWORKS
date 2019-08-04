;
/***** JS Homework #10. DOM. Working with events. Attaching events to DOM nodes. Keyboard and scroll events *****/


console.log('-----------------------------------');
/******* JS Homework #10. Show password  *******/
console.log('*** JS Homework #10. Show password ***');

//Задание
//Написать реализацию кнопки "Показать пароль".
//
//Технические требования:
//
//В файле index.html лежит разметка для двух полей ввода пароля.
//По нажатию на иконку рядом с конкретным полем - должны отображаться символы, которые ввел пользователь, иконка меняет свой внешний вид.
//Когда пароля не видно - иконка поля должна выглядеть, как та, что в первом поле (Ввести пароль)
//Когда нажата иконка, она должна выглядеть, как та, что во втором поле (Ввести пароль)
//По нажатию на кнопку Подтвердить, нужно сравнить введенные значения в полях
//Если значения совпадают - вывести модальное окно (можно alert) с текстом - You are welcome;
//Если значение не совпадают - вывести под вторым полем текст красного цвета  Нужно ввести одинаковые значения
//
//После нажатия на кнопку страница не должна перезагружаться
//Можно менять разметку, добавлять атрибуты, теги, id, классы и так далее.





/*** логика взаимодействия пользователя с формой ***/

let form = document.getElementById('password-form');
form.addEventListener('click', (event) => {

    // 1. показывать\прятать введенное в инпутах в зависимости от символа глаза
    showPassword ();

    // 2. при нажатии на глаз менять его символ
    if(event.target.tagName === 'I') {
        let iconsList = document.querySelectorAll(`#${event.target.parentElement.id} i`)
        iconsList.forEach( (el)=> {
            el.classList.toggle('hidden');
        });

    // 3. при нажатии на "сабмит"
    } else if (event.target.tagName === 'BUTTON'){

        // 3.1. убрать дефолтные действия кнопки
        event.preventDefault();

        // 3.2. удалить, если есть, сообщение об ошибке
        removeElement(document.querySelector('.error-message'));

        // 3.3. проверить заполненность всех инпутов в блоке и сравнить сооветствие значений двух выбранных по id инпутов
        let inputValues = document.querySelectorAll(`#${form.id} input`);
        validateInput (inputValues);
    }
});



/***  функция показа содержимого инпутов: ***/

function showPassword () {
    let hiddenList = document.querySelectorAll('.hidden');
    hiddenList.forEach( (el) => {
        let inputField = document.querySelector(`#${el.parentElement.id} input`);
        switch (el.classList[1]) {
            case 'fa-eye':
                inputField.setAttribute('type', 'password');
                break;
            case 'fa-eye-slash':
                inputField.setAttribute('type', 'text');;
                break;
        }
    })
};


/***  функция уделения лишнего элемента: ***/

function removeElement (el) {
    if(el) {
        el.remove();
    }
};


/***  функция валидации содержимого всех инпутов в отдельном блоке: ***/

function validateInput (nodeList) {
    let array = Array.prototype.slice.call(nodeList);
    if (array.some(el => el.value === '')) {
        return false;
    } else {
        comparePasswords (array);
    };
};


/***  функция проверки соответствия содержимого двух выбранных по id инпутов в блоке и допуск к дальнейшим шагам: ***/

function comparePasswords (arr) {

    let arrCompare=[];
    for (key of arr) {
        if (key.id === 'pass' || key.id === 'confirm') {
            arrCompare.push(key.value);
        }
    }

    if (arrCompare[0] === arrCompare[1]) {
        setTimeout( ()=>{
            alert('You are welcome');
        },0);
    } else {
        let errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.innerText = 'Нужно ввести одинаковые значения';
        document.getElementById('confirm').after(errorMessage);
    }
};


