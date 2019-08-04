;
/********** JS HOMEWORK #04. OBJECTS **********/

/******* JS HOMEWORK #18.1 for in, for of. CREATE STUDENT  *******/


console.log('-----------------------------------')
console.log('*** JS HOMEWORK #18.1 for in, for of. CREATE STUDENT ***')

//Задание
//Создать объект студент "студент" и проанализировать его табель.
//
//Технические требования:
//
//Создать пустой объект student, с полями name и last name.
//Спросить у пользователя имя и фамилию студента, полученные значения записать в соответствующие поля объекта.
//В цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. Записать оценки по всем предметам в свойство студента tabel.
//Посчитать количество плохих (меньше 4) оценок по предметам. Если таких нет, вывести сообщение Студент переведен на следующий курс.
//Посчитать средний балл по предметам. Если он больше 7 - вывести сообщение Студенту назначена стипендия.
//
//


const student = {
    name: null,
    lastName: null
};

student.name = prompt('What is your first name?', 'Billy');
student.lastName = prompt('What is your last name?', 'Whisky');
student.table = {};


// функция для создания ключа и значения (курс, оценки)
let setTableProperty = (course, score) => {
        student.table[course] = score;
};

// функции для запроса от пользователя данных  о курсе и оценках
const getCourse = text => {
    text = prompt('What is your course?', text);
    return (Number(text) || text === "" || text == 0)  ? getCourse(text) : text;
};

const getScore = (num = 10) => {
    num = prompt('What is your score?', num);
    return (!Number(num) || !num || num <0 || num >12)  ? getScore(num): Number(num);
};


// повтор запроса ввода разных предметов, пока не надоест.
for(;;) {
    let inputCourse = getCourse();;
    if (typeof(inputCourse) == "object") { // возвращает только при 'cancel'
        break;
    } else {
        let inputScore = getScore();
        setTableProperty(inputCourse, inputScore);
    }
}
console.log(student);

//перебор полученного субобъекта: на наличие плохих оценок и на получение вводных для вычисления средней оценки:
let lowScores = [],
    sumScore = 0,
    n=0;

for (let prop in student.table) {
    if (student.table[prop] <= 4) {
        lowScores.push(student.table[prop]); // массив плохих оценок
    };
    n++; // количество предметов
    sumScore = sumScore + Number(student.table[prop]); // сумма всех оценок
}


if (!lowScores[0]) { // второй вариант: не равен undefined
    console.log('Студент '+ student.name + ' ' + student.lastName + ' переведен на следующий курс');
};


let avScore = sumScore/n;
console.log('средняя оценка студента: ', avScore);

if (avScore > 7) {
    console.log ('Студенту назначена стипендия');
}
;
