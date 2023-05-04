// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [4, 234, true, 'js', 'node', false, 'sql', 12.345, null, 'John'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Harry Potter',
    pageCount: 348,
    genre: 'fantasy'
}

let book2 = {
    title: 'Kobzar',
    pageCount: 835,
    genre: 'poetry'
}

let book3 = {
    title: 'White click',
    pageCount: 426,
    genre: 'adventure story'
}

console.log(book1, book2, book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Twin Peaks',
    pageCount: 398,
    genre: 'drama',
    authors: [
        {name: 'Mark Frost', age: 45},
        {name: 'David Lynch', age: 38},
    ]
}

let book5 = {
    title: 'We read in English',
    pageCount: 435,
    genre: 'English language books for children',
    authors: [
        {name: 'Olga Goncharova', age: 35},
        {name: 'Natalia Papushyna', age: 41},
    ]
}

let book6 = {
    title: 'Little Princess',
    pageCount: 426,
    genre: 'novel',
    authors: [
        {name: 'Frances', age: 42},
        {name: 'Eliza', age: 36},
        {name: 'Burnett', age: 39},
    ]
}

console.log(book4, book5, book6)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Vasya', username: 'vasko', password: 'Qwerty1-'},
    {name: 'Oleg', username: 'olegishe92', password: 'Olefyut!-'},
    {name: 'Anna', username: 'ann232', password: 'Afdghfgj68+'},
    {name: 'Nataly', username: 'papu', password: 'NataPapu1-'},
    {name: 'Sergiy', username: 'serg2000', password: 'ApSerg!-'},
    {name: 'Igor', username: 'igor93', password: 'Sfghjlkk3!'},
    {name: 'Danylo', username: 'danilko2009', password: 'QwertyQwerty1-'},
    {name: 'Liza', username: 'elizavetta2012', password: 'lizka!-'},
    {name: 'Maxim', username: 'max17', password: 'Mhgyu8+'},
    {name: 'Evgeniy', username: 'jeka32', password: 'Wdgfhjj+'},
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
// let x = 0;
let x = -3;
if (x != 0) {
    console.log('Вірно');
} else console.log('Невірно');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 10;
if (time >= 0 && time <= 14) {
    console.log('The first quarter of an hour');
} else if (time >= 15 && time <= 29) {
    console.log('The second quarter of an hour');
} else if (time >= 30 && time <= 44) {
    console.log('The third quarter of an hour');
}
else if (time >= 45 && time <= 59) {
    console.log('The fourth quarter of an hour');
} else {
    console.log('Enter a number from 0 to 59');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;
if (day >= 1 && day <= 10) {
    console.log('The first decade of the month');
} else if (day >= 11 && day <= 20) {
    console.log('The second decade of the month');
} else if (day >= 21 && day <= 31) {
    console.log('The third decade of the month');
} else {
    console.log('Enter a number from 1 to 31');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekday = +prompt('Enter a weekday:');
switch (weekday) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('There is no such day of the week!');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Enter the first number:');
let num2 = +prompt('Enter the second number:');
if (num1 > num2) {
    console.log(`The maximum number is ${num1}`);
} else if (num1 < num2) {
    console.log(`The maximum number is ${num2}`);
} else if (num1 === num2) {
    console.log('These numbers are equal');
} else {
    console.log('Something went wrong');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1;
if (x1 === 0 || x1 === '' || x1 === null || x1 === isNaN || x1 ===undefined) {
    x1='default';
}
console.log(x1);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}