;
/********** JS Homework#06. ARRAYS **********/

//Теоретический вопрос
//
//Опишите своими словами как работает цикл forEach.
//
// это колл-бэк функция, которая перебирает каждый элемент в массиве, делает с ним одно и то же действие, прописанное в теле функции. Сам по себе ничего не возвращает, только то, что мы укажем в return фукнции.



console.log('-----------------------------------')
/******* JS HOMEWORK #05. User age and password *******/
console.log('*** JS HOMEWORK #06. Filter Array ***')


//Задание
//Реализовать функцию фильтра массива по указанному типу данных.
//
//Технические требования:
//
//Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
//Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].



let fruitsArr = ["Яблоко", null, "Груша", 23, '23', null, undefined, 57];
console.log('Initial array: ', fruitsArr)



let filterBy = (arr, dataType) => (dataType === 'null') ? arr.filter((el) => (el !== null)) : arr.filter((el) => (typeof(el) !== dataType)) // на null нужна отдельная проверка, через typeof не срабатывает



console.log('filtered array excluding "null": ', filterBy(fruitsArr, 'null'));
console.log('filtered array excluding "undefined": ', filterBy(fruitsArr, 'undefined'));
console.log('filtered array excluding "string": ', filterBy(fruitsArr, 'string'));


