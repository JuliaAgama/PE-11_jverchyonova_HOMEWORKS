;
/********** JS HOMEWORK #06_21. ARRAYS. Advanced Filter **********/

console.log('-----------------------------------')
/******* JS HOMEWORK #05. User age and password *******/
console.log('*** JS HOMEWORK #06_21. ARRAYS. Advanced Filter ***')

//Задание
//Реализовать универсальный фильтр массива объектов
//
//Технические требования:
//
//Написать функцию filterCollection(), которая позволит отфильтровать любой массив по заданным ключевым словам.
//Функция должна принимать на вход три основных аргумента:
//
//массив, который надо отфильтровать
//строку с ключевыми словами, которые надо найти внутри массива (одно слово или несколько слов, разделеных пробелом)
//boolean флаг, который будет говорить, надо ли найти все ключевые слова (true), либо же достаточно совпадения одного из них (false)

//четвертый и последующие аргументы будут являться именами полей, внутри которых надо искать совпадение. Если поле находится не на первом уровне объекта, к нему надо указать полный путь через .. Уровень вложенности полей может быть любой.
//
//
//Пример вызова функции:
//
//filterCollection(vehicles, 'en_US Toyota', true, 'name', 'description', 'contentType.name', 'locales.name', 'locales.description')
//В данном примере будет отфильтрован массив vehicles, с помощью ключевых слов en_US и Toyota. true в третьем параметре означает, что для успешного включения записи в финальный результат должно быть совпадение по обоим ключевым словам. Последние несколько параметров содержат имена полей, внутри которых надо искать ключевые слова. Например contentType.name означает, что внутри каждого объекта vehicle может быть поле contentType, которое является объектом или массивом объектов, внутри которых может быть поле name. Именно в этом поле (а также в других указанных) необходимо искать сопадения с ключевыми словами.
//
//В примере выше - запись locales.name означает, что поле locales внутри объекта vehicle может быть как объектом, так и массивом. Если оно является массивом, это значит, что внутри массива находятся объекты, у каждого из которых может быть свойство name. Для успешной фильтрации достаточно нахождения ключевого слова хотя бы в одном из элементов массива.
//Разные ключевые слова могут находиться в разных свойствах объекта. Например, в примере выше, ключевое слово en_US может быть найдено в поле locales.name, в то время как ключевое слово Toyota может, например, находиться внутри свойства description. При этом такой объект должен быть найден.
//Поиск должен быть нечувствительным к регистру.
//
//
//Примечание:
//Реализацию данной задачи можно использовать в реальной жизни. Например, если на странице есть таблица с данными, а вверху есть строка поиска, данную функцию можно использовать для фильтра значений в таблице при вводе ключевых слов в строку поиска


let vehicles = [];

vehicles[0] = {
    name: 'Toyota',
    description: 'Toyota is a good Japanese car',
    contentType: {
        name: 'Corolla',
        description: 'the most popular model of Toyota' 
    },
    locales: {
        name: 'en_US',
        description: 'still a good car'
    }
};

vehicles[1] = {
    name: 'Lada',
    description: 'Toyota is a shitty Russian car',
    contentType: {
        name: 'Kalina',
        description: 'awfull model of awful Lada car' 
    },
    locales: [{name: 'ru_RU', description: 'still an awful car'}, 175]
};

vehicles[2] = {
    name: 'Fiat',
    description: 'Fiat is a typical Italian car',
    contentType: [
        {name: 'Uno', description: 'funny small model of junky Fiat car'},
        {nameOptional: 'Uto Fiat', descriptionOptional: 'funny junky small bug-car'}],
    locales: {
        name: 'it_IT',
        description: 'still a funny car'
    }
};

vehicles[3] = {
    name: 'Renault',
    description: 'Renault is a great French car',
    contentType: {
        name: 'Megane',
        description: 'my favorite model ever' 
    },
    locales: {
        name: 'fr_FR',
        description: 'i love this car'
    }
};

vehicles[4] = {
    name: 'Volvo',
    description: 'Volvo is an old-fashioned brand of Austrian cars',
    contentType: [
        {name: 'S60', description: 'Nothing to describe about this model of Volvo'},
        {nameOptional: 'S-class', descriptionOptional: 'nothing special about the car'}],
    locales: [
        {name: 'de_AU', description: 'old-style looking car'}, 
        {nameOptional: 'de_DE', descriptionOptional: 'fine but old-fashioned'}]
};

vehicles[5] = {
    name: 'Mercedes',
    description: 'Mercedes is the leader and the most recognizable car in the world',
    contentType: {
        name: 'C300',
        description: 'Great car of the great quality' 
    },
    locales: {
        name: 'de_DE',
        description: 'The most respectable one'
    }
};

vehicles[6] = {
    name: 'ZAZ',
    description: 'What the hell is it - you may ask, and you are right...',
    contentType: {
        name: 'Forza',
        description: 'A copy of some foreign car, as always' 
    },
    locales: {
        name: 'ua_UA',
        description: 'Cheap and ugly Ukrainian car'
    }
};

console.log(vehicles);

console.log('-----------------------------------');



function filterCollection(arr, filterString, findAll, ...fields) {
    let filterStringArr = filterString.split(" ");
    let fieldsArr = fields;
    
    for (let field of fieldsArr) {
        for (let key of arr) {
            
        }
    }
    
    
    
    
    
    
    console.log(filterStringArr);
    console.log (fieldsArr);
    console.log(arr, filterString, findAll, fields);
}



filterCollection('vehicles', 'en_US Toyota', true, 'name', 'description', 'contentType.name', 'locales.name', 'locales.description');






