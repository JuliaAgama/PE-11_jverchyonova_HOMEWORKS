;
/********** JS HOMEWORK #04. OBJECTS **********/

/******* JS HOMEWORK #19. CLONE OBJECT  *******/


console.log('-----------------------------------')
console.log('*** JS HOMEWORK #19. CLONE OBJECT ***')

//Задание
//Реализовать функцию полного клонирования объекта.
//
//Технические требования:
//
//Написать функцию для рекурсивного полного клонирования объекта (без единой передачи по ссылке, внутренняя вложенность свойств объекта может быть достаточно большой).
//Функция должна успешно копировать свойства в виде объектов и массивов на любом уровне вложенности.
//В коде нельзя использовать встроенные механизмы клонирования, такие как функция Object.assign() или спред-оператор.



/******* PRIMARY OBJECT EXAMPLE *******/
const now = new Date();
const objectPrimary = {
    name: 'Vasya',
    lastName: 'Pupkin',
    age: 35,
    getYearBirth: function() {return now.getFullYear() - this.age},
    parameters: {
        sizes: {
            height: 187,
            feet: 44,
            scores: [23, {min: 27, max: 68}, 45, 12, 47, 90]
        },
        weight: 93,
    },
    skills: ['management', 'english', 'presentation', ['business planning', 'budget planning', 'process planning'], 'negotiations'],
    smoker: true
}
objectPrimary.yearBirth = objectPrimary.getYearBirth();

console.log('-----------------------------------')






/******* CLONING FUNCTION  *******/

function cloneObject(src) {
    let target = {};
    if (Array.isArray(src)) {
        target = [];
    }
    for (let key in src) {
        target[key] = src[key];
        if (typeof(target[key]) === 'object') {
            target[key] = cloneObject(src[key]);
        }
    }
    return target;
}
/********************************/






let newObject = cloneObject(objectPrimary);
newObject.yearBirth = newObject.getYearBirth();

/******* CHECKING CLONE OBJECT  *******/

newObject.name = 'Petya';
newObject.lastName = 'Kozyulkin';
newObject.age = 27;
newObject.parameters.sizes.height = 182;
newObject.parameters.sizes.feet = 41;
newObject.parameters.sizes.scores = [3, 109, 67];
newObject.parameters.weight = 87;
newObject.skills.unshift('engineering');




console.log('NEW OBJECT: ', newObject);
console.log('PRIMARY OBJECT: ', objectPrimary);






