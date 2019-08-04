/** JS Homework#01. AGE CONTROL. Alert, Prompt, Confirm **/
;
let name, age;
name = prompt('Hello, what is your name? ');
age = parseInt(prompt('Please, enter your age: '));


/********** Check validation of input data **********/


while (!/[0-9,';', ',', '#']/.test(name) || !isNaN(name) || !name || isNaN(age) || !age || age==0) {
    alert ('ERROR, PLEASE TRY AGAIN!');
    if (/[0-9, ';', ',', '#']/.test(name) || !isNaN(name) || !name ) {
        name = prompt ('Enter correct name (letters only):', name);
    }
    if (isNaN(age) || !age) {
        age = parseInt(prompt ('Enter correct age: (numbers only)'), age);
    }
}


/********** Feedback to User depending on his age **********/


if (age < 18 || isNaN(age) || !age) {
    alert ('You are not allowed to visit this website, you are too young and stupid, ' + name.charAt(0).toUpperCase() + name.slice(1) + '!');
} else if (age <= 22) {
    if (confirm ('Are you sure you want to continue, ' + name.charAt(0).toUpperCase() + name.slice(1) + '?')) {
        alert ('Well... You\'re a little bit too young but anyway welcome, ' + name.charAt(0).toUpperCase() + name.slice(1));
        } else {
            alert ('You better do not visit this website, you\'re still not mature enough, '  + name.charAt(0).toUpperCase() + name.slice(1) + '!');
        }
} else {
    alert ('Welcome, my best friend '   + name.toUpperCase() + '!');
}
