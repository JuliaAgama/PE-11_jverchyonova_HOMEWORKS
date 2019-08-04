;
/********** JS HOMEWORK #20 - OPTIONAL. Sprint Planning **********/

//Данное задание не обязательно для выполнения
//

 console.log('===========================================')
/******* JS HOMEWORK #05. User age and password *******/
console.log('*** JS HOMEWORK #20 - OPTIONAL. Sprint Planning ***')

//Задание
//Реализовать функцию, которая позволит оценить, успеет ли команда разработчиков сдать проект до наступления дедлайна.
//
//Технические требования:
//
//Функция на вход принимает три параметра:
//
//массив из чисел, который представляет скорость работы разных членов команды. Количество элементов в массиве означает количество человек в команде. Каждый элемент означает сколько стори поинтов (условная оценка сложности выполнения задачи) может выполнить данный разработчик за 1 день.

//массив из чисел, который представляет собой беклог (список всех задач, которые необходимо выполнить). Количество элементов в массиве означает количество задач в беклоге. Каждое число в массиве означает количество стори поинтов, необходимых для выполнения данной задачи.
//дата дедлайна (объект типа Date).
//
//
//После выполнения, функция должна посчитать, успеет ли команда разработчиков выполнить все задачи из беклога до наступления дедлайна (работа ведется начиная с сегодняшнего дня). Если да, вывести на экран сообщение: . Подставить нужное число дней в текст. Если нет, вывести сообщение Команде разработчиков придется потратить дополнительно ? часов после дедлайна, чтобы выполнить все задачи в беклоге
//
//Работа идет по 8 часов в день по будним дням



let deadline1 = new Date(2019,5,20,18);
let workSpeed1 = [20, 3, 7, 8, 12, 16, 4]; //сколько стори поинтов может выполнить данный разработчик за 1 день
let backLog1 = [160, 35, 15, 27, 9, 98, 41, 19]; // количество стори поинтов, необходимых для выполнения каждой из задач в массиве

let deadline2 = new Date(2019,5,15,18);
let workSpeed2 = [1, 3, 7, 8, 6, 4]; //сколько стори поинтов может выполнить данный разработчик за 1 день
let backLog2 = [150, 35, 12, 27, 90, 54, 41, 19, 63];


estimateFinish(workSpeed1, backLog1, deadline1);
estimateFinish(workSpeed2, backLog2, deadline2);



function estimateFinish (arrSpeed, arrTasks, dline) {

    let now = new Date();

    console.log ('Now is: ', now);
    console.log ('Deadline is: ', dline);
//    console.log('-------------------------')

    let dayProductivity = arrSpeed.reduce((a,b) => a+b)/8;
    console.log ('Working Speed of team members: ', arrSpeed, 'per 8-hour working day');
//    console.log ('1-hour productivity of total team: ', dayProductivity, 'storypoints');

    let storypointsLeft = arrTasks.reduce((a,b) => a+b);
    console.log ('Number of storypoints to do for each task: ', arrTasks);
//    console.log ('Total storypoints: ', arrTasks.reduce((a,b) => a+b));
//
//    console.log ('To finish all storypoints', Math.ceil(storypointsLeft/dayProductivity*100)/100, 'hours are needed')

    function calcBusinessHours (dLine) { // cчитаем рабочие часы
        let count = 0;
        for (let i = now.valueOf() ; i < dLine.valueOf() ; i = (now.setMinutes(now.getMinutes() + 1)).valueOf()) {
            if (now.getDay() != 0 && now.getDay() != 6 && ((now.getHours() >= 9 && now.getHours() < 13) || (now.getHours() >= 14 && now.getHours() < 18))) {
                count++;
            }
        }
//        console.log('Hours left till deadline:', count/60);
        return count/60;
    }

    let hoursLeft = calcBusinessHours(dline);

    if (storypointsLeft/dayProductivity <= hoursLeft) {
        console.log (`Все задачи будут успешно выполнены за`, Math.floor((hoursLeft-storypointsLeft/dayProductivity)/8), `рабочих дней до наступления дедлайна!`)
    } else {
        console.log (`Команде разработчиков придется потратить дополнительно`, Math.ceil(storypointsLeft/dayProductivity-hoursLeft), `часов после дедлайна, чтобы выполнить все задачи в беклоге`)
    }
    console.log('===========================================')
}


