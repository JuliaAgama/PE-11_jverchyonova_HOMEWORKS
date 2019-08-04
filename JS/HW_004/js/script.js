;
/********** JS HOMEWORK #04. OBJECTS **********/
//Теоретический вопрос
//
//Опишите своими словами, что такое метод обьекта

// Метод - это функция внутри объекта, т.е. property объекта, которое по сути является функцией.



console.log('-----------------------------------')
/******* JS HOMEWORK #04.1 basic. CREATE USER  *******/
console.log('*** EXERCISE 04.1 CREATE USER ***')

//Задание
//Реализовать функцию для создания объекта "пользователь".
//
//Технические требования:
//
//Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
//При вызове функция должна спросить у вызывающего имя и фамилию.
//Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.
//Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
//Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.
//

const getName = (promptText, placeHolder) => prompt(promptText, placeHolder);


const createNewUser = (firstName, lastName) => {
    let newUser = {
        firstName: firstName,
        lastName: lastName
    };
    newUser.getLogin = function() {
        return (this.firstName.charAt(0)+this.lastName).toLowerCase();
    }
    return newUser;
}

let userOne = createNewUser(getName('What is your first name?', 'Johnny'), getName('What is your last name?', 'Depp'));

let userOneLogin = userOne.getLogin();

console.log(userOne);
console.log(userOne.firstName, `'s login is: `, userOneLogin);






console.log('-----------------------------------')
/*** JS HOMEWORK #04.1 advanced. defineProperties, SETTERS  ***/
console.log('*** JS HOMEWORK #04.1 advanced. defineProperties, SETTERS ***')
//
//Не обязательное задание продвинутой сложности:
//
//Сделать так, чтобы свойства firstName и lastName нельзя было изменять напрямую. Создать функции-сеттеры setFirstName() и setLastName(), которые позволят изменить данные свойства.


Object.defineProperties (userOne, {
    'firstName': {
        writable: false
    },
    'lastName': {
        writable: false
    }
});


userOne.firstName ='Katya';
console.log('{writable:false}. userOne.firstName ="Katya" ; Is user first name Katya? ', userOne.firstName === 'Katya');


let setNewName = (key, changeValue) => {
    Object.defineProperty (userOne, key, {
        get() { return changeValue; },
        set(newValue) {changeValue = newValue; }
    })
}
setNewName('firstName', 'Kolya');
setNewName('lastName', 'Pupkin');

console.log(`New name of userOne is set by Setter Function: ${userOne.firstName} ${userOne.lastName}, but login is: ${userOneLogin}`);


