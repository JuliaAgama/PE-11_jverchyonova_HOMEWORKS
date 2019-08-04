;
/******** JS HOMEWORK #03.16. FUNCTIONS. RECURSION ********/

/*
Теоретический вопрос

Напишите как вы понимаете рекурсию. Для чего она используется на практике?


в моем понимании рекурсия - это эдакое фрактальное самовоспроизведение функции . Более сложный и ресурсозатратный (в смысле памяти) вариант цикла, требующий, как и цикл (но еще более требующий), условия выхода из себя. В отличии от цикла - хранит значения всех итераций.
*/

console.log('-----------------------------------')


/******* JS HOMEWORK #03.16.01 basic. FACTORIAL  *******/
console.log('*** EXERCISE 03.16.01 basic. FACTORIAL ***')
//
//Задание
//Реализовать функцию подсчета факториала числа.
//
//Технические требования:
//
//Считать с помощью модального окна браузера число, которое введет пользователь.
//С помощью функции посчитать факториал числа, которое ввел пользователь, и вывести его на экран.
//Использовать синтаксис ES6 для работы с перемеными и функциями.


const enterNumber = promptText => prompt(promptText,'5');

const factorialFun = x => (x === 1) ? x : x * factorialFun(x-1);

/*long version:

const factorialFun = function (x) {
    if (x === 1) {
        return x;
    } else {
        return x*factorialFun(x-1);
    }
};
*/

console.log('The resulting factorial is: ' + factorialFun(enterNumber('Enter the number >0 to calculate factorial')));



console.log('-----------------------------------')


/*** JS HOMEWORK #03.16.2 advanced. FACTORIAL WITH VALIDATION ***/
console.log('*** EXERCISE 03.16.02 advanced. VALIDATION ***');


//Не обязательное задание продвинутой сложности:
//
//После ввода данных добавить проверку их корректности. Если пользователь не ввел числа, либо при вводе их указал не числа, - спросить оба числа заново (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее информация).


const enterNum = (num = 5) => {
    do {
        num = prompt('Task ADVANCED. Enter the number >0 to calculate factorial', num);
        console.log('The input number is: ', num);
    }
    while (!Number(num) || !num);
    return Number(num);
};

console.log('The resulting factorial is: ', factorialFun(enterNum()));


