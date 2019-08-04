;
/********** JS Homework#05. STRINGS, DATE, TIME **********/

//Теоретический вопрос
//
//Опишите своими словами, что такое экранирование, и зачем оно нужно в языках программирования
//
// Экранирование  - это запись знаков, которые используются для кода, в виде обычного текста для вывода в строке. Для этого используется "\" перед знаком.



console.log('-----------------------------------')
/******* JS HOMEWORK #05. User age and password *******/
console.log('*** JS HOMEWORK #05. User age and password ***')

//Задание
//Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.

//
//Технические требования:
//
//Возьмите выполненное домашнее задание номер 4 (созданная вами функция createNewUser()) и дополните ее следующим функционалом:
//
//При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday.
//Создать метод getAge() который будет возвращать сколько пользователю лет.
//Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).
//
//
//Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.


const createNewUser = (firstName, lastName, birthday) => {
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday
    };
    newUser.getYearBirth = function () {
        return Number(this.birthday.split('.')[2]);
    }

    newUser.getAge = function() {
        let now = new Date;
        return now.getFullYear() - this.getYearBirth();
    };

    newUser.getPassword = function() {
        return (this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase()+this.getYearBirth());
    };

    return newUser;
};


let userOne = createNewUser(prompt('What is your first name?', 'Johnny'), prompt('What is your last name?', 'Depp'),prompt('What is your birthday? (dd.mm.yyyy)', '09.06.1963'));

let userOneAge = userOne.getAge();
let userOnePassword = userOne.getPassword();

console.log(userOne);
console.log(userOne.firstName, `'s age is: `, userOneAge);
console.log(userOne.firstName, `'s password is: `, userOnePassword);


