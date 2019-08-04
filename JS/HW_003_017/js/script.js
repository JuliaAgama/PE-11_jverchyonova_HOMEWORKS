;
/******** JS HOMEWORK #03.17. FUNCTIONS. FIBONACCI ********/

//Задание
//Реализовать функцию для подсчета n-го обобщенного числа Фибоначчи.
//
//Технические требования:
//
//Написать функцию для подсчета n-го обобщенного числа Фибоначчи. Аргументами на вход будут три числа - F0, F1, n, где F0, F1 - первые два числа последовательности (могут быть любыми целыми числами), n - порядковый номер числа Фибоначчи, которое надо найти. Последовательнось будет строиться по следующему правилу F2 = F0 + F1, F3 = F1 + F2 и так далее.
//Считать с помощью модального окна браузера число, которое введет пользователь (n).
//С помощью функции посчитать n-е число в обощенной последовательности Фибоначчи и вывести его на экран.
//Пользователь может ввести отрицательное число - результат надо посчитать по такому же правилу (F-1 = F-3 + F-2).



/*
console.log('-----------------------------------')
console.log('*** EXERCISE 03.17.01. FIBONACCI SIMPLE ***')


const enterNumOld = (num = 10) => {
    num = prompt("Числа ФИБОНАЧЧИ. Введите порядковый номер числа в последовательности Фибоначчи, чтобы узнать его: ", num);
    return (!Number.isInteger(Number(num)) || !num)  ? enterNumOld(num): Number(num);
};

((n) => {
    let prePrev = 0;
    let prev = 1;
    let curr = (n === 0) ? 0 : 1;
    for (i = 2; i <= Math.abs(n); i++) {
        curr = (n>0) ? prev+prePrev : prePrev-prev;
        prePrev = prev;
        prev = curr;
    }
    console.log (`заданный порядковый номер в последовательности Фибоначчи = ${n}, число = ${curr}`);
})(enterNumOld());


*/

console.log('-----------------------------------')
console.log('*** EXERCISE 03.17.01. FIBONACCI EXTENDED - RECURSION ***')




const enterNum = (num = 10) => {
    num = prompt("Обобщение чисел ФИБОНАЧЧИ. Введите порядковый номер числа в  последовательности Фибоначчи, чтобы узнать его: ", num);
    return (!Number.isInteger(Number(num)) || !num)  ? enterNum(num): Number(num);
};

const calcFibo = (f0, f1, n) => {
    if ( n === 0 ) {
        return f0;
    } else if (n === 1 || n === -1) {
        return f1;
    } else if (n > 1) {
        return calcFibo(f0, f1, n-2) + calcFibo(f0, f1, n-1);
    } else if (n < 1) { //указано условие специально - для наглядности...
        return calcFibo(f0, f1, n+2) - calcFibo(f0, f1, n+1);
    }
};

console.log(calcFibo(-7, 3, enterNum()));

