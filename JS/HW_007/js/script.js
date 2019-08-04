;
/********** JS Homework #07. DOM **********/

//
//Теоретический вопрос
//
//Опишите своими словами, как Вы понимаете, что такое Document Object Model (DOM)
//
//DOM - это промежуточный вариант (модель) хранения и структурирования данных (расположение объектов по "дереву" предков-потомков) для стыковки HTML и JS.






console.log('-----------------------------------');
/******* JS Homework #07. DOM. Show list on page *******/
console.log('*** JS Homework #07 - BASIC. DOM. Show list on page ***');


//Задание
//Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка.
//
//Технические требования:
//
//
//Создать функцию, которая будет принимать на вход массив.
//
//
//Каждый из элементов массива вывести на страницу в виде пункта списка
//
//
//Необходимо использовать шаблонные строки и функцию map массива для формирования контента списка перед выведением его на страницу.
//
//
//Примеры массивов, которые можно выводить на экран:
//['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']
//['1', '2', '3', 'sea', 'user', 23]
//
//
//Можно взять любой другой массив.
//

let mainCities = ['Kiev: 	2 942 598', 'Kharkov:	1 466 892', 'Odessa:	995 854', 'Dnepr:	990 748', 'Donetsk:	918 917', 'Zaporoshye:	758 011', 'Lviv:	728 545', 'Krivoy Rog:	646 748', 'Nikolayev:	494 381', 'Mariupol:	458 533'];


(function (arr) {
    let parentElem = document.querySelector(".cities");
    let ol = document.createElement('ol');
    ol.className = "cities-header";
    ol.innerText = "10 biggest Ukrainian cities in 2019:";
    parentElem.appendChild(ol);

    let mapArr = arr.map ((el, i) => `${i+1}. ${el} people`)

    for (let el of mapArr) {
        let li = document.createElement('li');
        ol.appendChild(li);
        li.className = "city";
        li.innerHTML = el;

        li.style.fontWeight = "400";
        li.style.color = "#000";
        li.style.fontSize = "22px";
        li.style.textTransform = "none";
        li.style.lineHeight = "2";
    }
})(mainCities);

console.log('-----------------------------------');








/******* JS Homework #07. DOM. ADVANCED. COUNTDOWN *******/
console.log('*** JS Homework #07 - ADVANCED. COUNTDOWN ***');
//
//Не обязательное задание продвинутой сложности:
//
//??? Очистить страницу через 10 секунд. Показывать таймер обратного отсчета (только секунды) перед очищением страницы.


(function () {
    let previous = document.getElementsByTagName("h2")[1];
    let timer = document.createElement('div');
    previous.after(timer);
//    previous.parentNode.insertBefore(timer, previous.nextSibling);
    timer.className = 'timer';

    timer.style.cssText = 'position: relative; left: 50%; transform: translate(-50%); font-size: 50px; color: red; background-color: yellow; padding: 30px, height: 100px; width: 100px; text-align: center';

    let sec = 10;

    timer.innerText = `${sec}`;

    let count = setInterval(function() {
        timer.innerText = --sec;
    }, 1000);

    setTimeout(function () {
        let citiesDiv = document.querySelector('.cities');
        citiesDiv.classList.toggle("hidden");
        clearInterval(count);
        timer.remove();
//        timer.parentNode.removeChild(timer);

//        setTimeout(function() {
//            citiesDiv.classList.toggle("hidden");
//        }, 2000);
    }, 10000);
})();

console.log('-----------------------------------');






/******* JS Homework #07. DOM. ADVANCED. INNER LIST *******/
console.log('*** JS Homework #07 - ADVANCED. INNER LIST ***');
//Если внутри массива одним из элементов будет еще один массив или объект, выводить его как вложенный список.


let mainCitiesAdvanced = ['Kiev: 	2 942 598', ['Kiev suburbs: 1 732 200'], 'Kharkov:	1 466 892', 'Odessa:	995 854', ['Odessa suburbs: 1 732 200'], 'Dnepr:	990 748', 'Donetsk:	918 917', {'Donetsk 2015': '936 257', 'Donetsk 2010': '968 250', 'Donetsk 2005': '999 975', 'Donetsk 2000': '1 016 194'}, 'Zaporoshye:	758 011', 'Lviv:	728 545', 'Krivoy Rog:	646 748', 'Nikolayev:	494 381', 'Mariupol:	458 533', ['Volnovakha: 50 000']];


function displayList (arr) {

    let parentElem = document.getElementsByClassName('cities')[1];
    let ol = document.createElement('ol');
    ol.className = "cities-header";
    ol.innerText = "10 biggest Ukrainian cities in 2019:";
    parentElem.appendChild(ol);

    function displayListRecursion (array, olList) {

        let mapArr =[];
        for (let i in array) {
            if(typeof(array[i]) !== "object") {
                mapArr.push(`. ${array[i]} people`);
                var li = document.createElement('li'); // без var не видно li в else
                olList.appendChild(li);
                li.className = "city-new";
                li.innerHTML = (mapArr.length+ mapArr[mapArr.length-1]);

                li.style.fontWeight = "400";
                li.style.color = "#000";
                li.style.fontSize = "22px";
                li.style.textTransform = "none";
                li.style.lineHeight = "1.5";

            } else {

                if (!Array.isArray(array[i])) {
                    for (key in array[i]) {
                        array[i][key] = (key+ ': ' + array[i][key]);
                    }
                }

                let olInner = document.createElement('ol');
                olInner.className = 'city-new-group';
                olInner.id ='city-new-group-' + (mapArr.length-1);
                li.after(olInner);
                olInner.style.marginLeft = '50px';

                displayListRecursion(array[i], olInner);
            }
        }
    }
    displayListRecursion(arr, ol);
}
displayList(mainCitiesAdvanced);
