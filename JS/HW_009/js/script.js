;
/********** JS Homework #09. Event Listener **********/


console.log('-----------------------------------');
/******* JS Homework #08 - BASIC. Validate Price  *******/
console.log('*** JS Homework #09 - BASIC. Tabs ***');

//Задание
//Реализовать переключение вкладок (табы) на чистом Javascript.
//
//Технические требования:
//

//В папке tabs лежит разметка для вкладок. Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки. При этом остальной текст должен быть скрыт. В комментариях указано, какой текст должен отображаться для какой вкладки.
//Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
//Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться. При этом нужно, чтобы функция, написанная в джаваскрипте, из-за таких правок не переставала работать.



// 1. организовываем связь между элементами.... (так, чтобы можно было просто последовательно добавлять новые титулы и их тексты в разметку, а их идентификация и связь между титулом и соответствующим контентом организовывалась сама - по тексту титула) - это проще, чем каждому титулу и тексту добавлять новый id или класс в разметке...)

let tabsTitleLIst = document.querySelectorAll('.tabs-title');
let tabsContentList = document.querySelectorAll('.tabs-content li');
tabsTitleLIst.forEach((el, ind) => {
    el.id = el.innerText.toLowerCase();
    tabsContentList[ind].classList.add(el.id);
    if (el.className !== 'tabs-title active') {
        tabsContentList[ind].classList.add('hidden');
    }
});

// 2. ставим слушателя: меняем стиль выбранного титула и показываем только соответствующий текст....

let tabs = document.querySelector('.tabs');
tabs.addEventListener('click', (event) => {

    tabsTitleLIst.forEach ((el) => el.classList.remove('active'));
    event.target.classList.add('active');

    tabsContentList.forEach ((el) => {
        el.classList[0] === event.target.id ? el.classList.remove('hidden') : el.classList.add('hidden');
    })
})
