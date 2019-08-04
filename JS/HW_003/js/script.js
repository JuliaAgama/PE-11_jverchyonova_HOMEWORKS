;
/********** JS HOMEWORK #03. FUNCTIONS **********/

//Теоретический вопрос
//
//Описать своими словами для чего вообще нужны функции в программировании.
//

/* Чтобы
а) разбить код на маленькие составные части-кирпичики, каждая из которых представляет собой логический блок с вычислением или действием, и которые связывются взаимовызовом в общую логику кода.
б) внутри функции записать сценарий какого-то вычисления или действия, результаты которого можно будет использовать в других частях кода, получая нужный результат, вызывая функцию в нужном месте и вводя в нее нужные вводные аргументы.
в) можно было вызывать один и тот же сценарий (действие) неоднократно.
*/

//Описать своими словами, зачем в функцию передавать аргумент.
/*аргуемент - это изменямые вводные, которые мы передаем для получения вычисления или действия по заданному сценарию с использованием этой вводной.
*/

console.log('-----------------------------------')


/******* JS HOMEWORK #03.1. MATH function  *******/
console.log('*** EXERCISE 03.1 MATH function ***')

//Задание
//Реализовать функцию, которая будет производить математические операции с введеными пользователем числами.
//
//Технические требования:
//
//Считать с помощью модального окна браузера два числа.
//Считать с помощью модального окна браузера математическую операцию, которую нужно совершить. Сюда может быть введено +, -, *, /.
//Создать функцию, в которую передать два значения и операцию.
//Вывести в консоль результат выполнения функции.
//


let enterNumber = function(promptText) {
    return prompt(promptText,'');
};

let calcResult = function(numOne, numTwo, mathOper) {
    numOne = +numOne;
    numTwo = +numTwo;
    switch (mathOper) {
        case '+':
            result = numOne+numTwo;
            break;
        case '-':
            result = numOne-numTwo;
            break;
        case '/':
            result = numOne/numTwo;
            break;
        case '*':
            result = numOne*numTwo;
            break;
    }
    return result;
}


console.log('The result is: ' + calcResult(enterNumber('Task Basic. Please enter 1st number'), enterNumber('Task Basic. Please enter 2nd number'), enterNumber('Task Basic. Please enter math operation (+, -, *, /)')));




console.log('-----------------------------------')


/*** JS HOMEWORK #03.2. MATH function with validation ***/
console.log('*** EXERCISE 03.2 VALIDATION ***')


//Не обязательное задание продвинутой сложности:
//
//После ввода данных добавить проверку их корректности. Если пользователь не ввел числа, либо при вводе указал не числа, - спросить оба числа заново (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее информация).

let enterNum = function(number = 'Number') {
    number = prompt('Task ADVANCED. Please enter your number','');
    if (!Number(number) || !number) {
        enterNum(number);
    } else {
        return number;
    }
};

let enterSign = function(sign = 'Sign') {
    sign = prompt('Task ADVANCED. Please enter math operation (+, -, *, /)','');
    if (sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/') {
        enterSign(sign);
    } else {
        return sign;
    }
};


console.log('The result is: ' + calcResult(enterNum(), enterNum(), enterSign()));
