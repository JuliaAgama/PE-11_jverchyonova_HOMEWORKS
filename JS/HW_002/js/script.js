/********** JS HOMEWORK #02. LOOPS **********/

// Теоретический вопрос. Зачем нужны циклы:
//
//Циклы - это способ сделать одно и то же действие необходимое количество раз. И выполнять его так долго (или столько раз), пока выполняется заданное условие.





/******* JS HOMEWORK #02.1. Multiples of 5 from 0 to entered number *******/


/* Реализовать программу на Javascript, которая будет находить все числа кратные 5 (делятся на 5 без остатка) в заданном диапазоне.

Технические требования:
- Считать с помощью модального окна браузера число, которое введет пользователь.
- Вывести в консоли все числа кратные 5, от 0 до введенного пользователем числа. Если таких чисел нету - вывести в консоль фразу `Sorry, no numbers'
- Обязательно необходимо использовать синтаксис ES6 (ES2015) при создании переменных.

Не обязательное задание продвинутой сложности (1):
- Проверить, что введенное значение является целым числом. Если данное условие не соблюдается, повторять вывод окна на экран до тех пор, пока не будет введено целое число.
- Считать два числа, `m` и `n`. Вывести в консоль все простые числа (http://ru.math.wikia.com/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE) в диапазоне от `m` до `n` (меньшее из введенных чисел будет `m`, бОльшее будет `n`). Если хотя бы одно из чисел не соблюдает условие валидации, указанное выше, вывести сообщение об ошибке, и спросить оба числа заново.*/

;

let rangeMax,
    array=[];

do {
    rangeMax = prompt('Let\'s console all multiples of 5 within the range from 0 to:', '10');
} while (!parseInt(rangeMax) || rangeMax==0 || Number(rangeMax)%1!==0);

//Второй вариант:
//
//let rangeMax = prompt('We\'ll show you all multiples of 5 within the range from 0 to:', '10');
//;
//
//while (!parseInt(rangeMax) || rangeMax==0) {
//    rangeMax = prompt('We\'ll show you all multiples of 5 within the range from 0 to:', '10');
//}
//

rangeMax=+rangeMax;

for (let i=0; i <= Math.abs(rangeMax); i++) {
    if (i % 5 === 0) {
        if (rangeMax > 0) {
            console.log (i);
        } else {
            if (i === 0) {
                console.log (0);
            } else {
                console.log (-i);
            }
        }
        array.push(i)
    }
}

if (!array[1]) { // вообще-то ноль тоже кратен 5, поэтому если ноль включен в диапазон, то ситуация "сорри, нет кратных чисел" будет невозможной. Поэтому, чтобы продемонстрировать, как срабатывает подобное действие, выводим "сорри, нет кратных ненулевых чисел".
    console.log(`sorry, there are no non-Zero multiples of 5 within the input range from 0 to ${rangeMax}`)
}


console.log('======================');






/******* JS HOMEWORK #02.2. Simple numbers within entered range *******/


/*Не обязательное задание продвинутой сложности (2):
- Считать два числа, `m` и `n`. Вывести в консоль все простые числа (http://ru.math.wikia.com/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE) в диапазоне от `m` до `n` (меньшее из введенных чисел будет `m`, бОльшее будет `n`). Если хотя бы одно из чисел не соблюдает условие валидации, указанное выше, вывести сообщение об ошибке, и спросить оба числа заново.*/

;
let firstNum = prompt('Let\'s console all simple numbers within your range. Enter 1st number:', '1'),
    secondNum = prompt('Enter 2nd number:', '10');

while (!parseInt(firstNum) || firstNum==='' || Number(firstNum)%1!==0 || !parseInt(secondNum) || secondNum==='' || Number(secondNum)%1!==0 || firstNum==secondNum) {
    alert('ERROR!! Enter only intiger NUMBERS. They MUST NOT be equal!')
    firstNum = prompt('Enter 1st number:', '1');
    secondNum = prompt('Enter 2nd number:', '10');
}
if (firstNum < secondNum) {
    m = +firstNum;
    n = +secondNum;
} else {
    m = +secondNum;
    n = +firstNum;
}

for (let el = m; el <= n; el++) {
    for (let i = 2; i <= el; i++) {
        if ((el % i) ===0 && el!=2) {
            break;
        } else if (el===2 || i === el-1) {
            console.log(el);
        }
    }
}
