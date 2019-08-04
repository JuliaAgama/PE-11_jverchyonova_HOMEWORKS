;
/***** JS Homework #14. jQuery *****/


console.log('-----------------------------------');
/******* JS Homework #14. jQuery tabs  *******/
console.log('*** JS Homework #14. jQuery tabs ***');

//
//Задание
//Переделать домашнее задание 9 (табы), используя jQuery


// 1. оставляем видимым только текст активного заголовка.

let $tabsTitleList = $('.tabs-title');
let $tabsContentList = $('.tabs-content li');


let displayActive = () => {
    $tabsTitleList.each(function () {
        if ($(this).hasClass('active')) {
           $($tabsContentList[$tabsTitleList.index(this)]).removeClass('hidden');
        } else {
            $($tabsContentList[$tabsTitleList.index(this)]).addClass('hidden');
        }
    })
}

displayActive();


// 2. ставим слушателя: меняем стиль выбранного титула и показываем только соответствующий текст....
$tabsTitleList.click(function() {
    $tabsTitleList.removeClass('active');
    $(this).addClass('active');
    displayActive();
})


