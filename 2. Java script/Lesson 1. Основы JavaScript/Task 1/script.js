console.log("Первый урок по JS MyFreedom");
// console - объект, log - метод (функция)

// olzhan.teach()
// students.learn ()

console.log(console)

let name = "Gulzhan";
// let - объявлять переменную (decleration) (создать)
// name - название переменной
// = - присваивание значении

// camelCase - myName (формат)
// python - my_name

// ** ПОРЯДОК ВЫПОЛНЕНИЯ КОДА (АЛГОРИТМ)*/
// let name = "Gulzhan";
// console.log(myName);


// **UNDEFINED (НЕОПРЕДЕЛЕННОСТЬ)*/
let meName;
console.log(myName);

// ** CONST И LET*/
let meName;
myName = "Gulzhan";
console.log(myName);
myName = "Adema";

const mySurname = 'Dzhumagulova';
const mySurname = 'Zhumagulova';
console.log(mySurname);



// // ** ТИПЫ ДАННЫХ JS */
// // ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ
// // 1 - STRING (строка, текст)
// const text1 = 'Some text'
// const text2 = 'Some text'
// const text3 = 'Some text'

// // 2 - NUMBER (число)
// const num1 = 5
// const num2 = 1000
// const num3 = 0.5

// // 3 - BOOLEAN (булевое, правда или ложь)
// const isAdemaIsSmart (AdemaSmart)= true
// const isAdemaIsNotSmart = false

// // 4- UNDEFINED
// let someUndefinedVariable;

// // 5 - BIG INIT
// const bigInt = 19124556686n;
// console.log(typeof 5);
// console.log(typeof bigInt);

// // 6 - SYMBOL
// const someSymbol = ('hello');
// console.log(someSymbol)


// НЕ ПРИМИТИВНЫЕ ТИПЫ ДАННЫЗ
// 1 - OBJECT (обьект)
// const name = "Gulzhan"
// const surname = "Dzhumagulova"
// const age = 40

// const user = {
//     name = "Gulzhan" ,
//     surname = "Dzhumagulova",
//     age = 40,
//     sayHello: () => {console.log("hello")}
// }

// console.log(user.sayHello());

// 1.1 - ARRAY (массив, список)
// const stidents = ['Sabit', 'Gulzhan', 'Serik'] // 0-Sabit, 1 - Gulzhan, 2 - Serik/
// console.log(students [1]);

// 2 - NULL (обьект)
// const num1 = undefined; //примитивный, я скорее всего буду что то зранить, но не знаю чего)
// const name2 = null; // обьект, Я не буду ничего хранить


// ** РАБОТА С БРАУЗЕРОМ* /
// ALERT (-) ничего не возвращает
// alert ("Всем привет!")

// PROMT (string) возвращает стринг - вызывая промт, в отличие от алерт можно ответить на вопрос
// const age = prompt ('Ваш возраст?')
// console.log(Number(age)); /(+age) /
// console.log(40);

// CONFIRM (boolean) - возвращает булин - правду или ложь
// const isStudent = confirm ("Вы студент?")
// console.log(isStudent);

// ** ОПЕРАТОРЫ*/ делится на АРИФМЕТИЧЕСКИЕ и ЛОГИЧЕСКИЕ  
// АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ это // +, -. /, *, %

// // "+"
// console.log(5 + "10");
// console.log('Gulzhan' +' ' + 'Dzhumagulova')

// // "-"" 
// console.log(10 - '5');
// console.log('Gulzhan' - 'Dzhumagulova')

// // "/"" деление
// console.log(5 / 2);
// console.log(typeof (5 / 0))

// // "*"
// console.log(5 * 2);
// console.log(typeof (5 * 0))

// // "%" модуль (модуль позводяет найти остаток после деление)
// console.log(13 % 5);
// console.log(typeof (5 / 0))

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ (boolean) / всегда возвращает булин - правду или ложь
// "=="
// console.log(7 == 5); // false == сравниваем одно с другим

// // ">="
// console.log(5 >= 5); // true

// // ">", "<"
// console.log(2 > 5); // false

// // "!=" - не равно
// console.log(5 != 5); //false
// console.log(10 != 5); //true


// // "===", "!==" - ВСЕГДА ПИСАТЬ === 
// console.log(5 == '5'); //false
// console.log(underfined == null) // true
// console.log(underfined === null) // false
// console.log(0 == false); // true - 0 - ложь, 1 - правда
// console.log(0 != undefined) // true

// // в JS - 0, false, null, underfined, " " - называются falsy values

// ** Сложение с присваиванием (+=) */
// let num = 5
// num = num + 5  // num = 5 + 5 = 10 -> num += 5 (равносильно, одинаково)
// console.log(num);

// КОНКАТЕНАЦИЯ СТРОК  ('строка' + 'строка' */
// console.log('Gulzhan' + ' '+'Dzzhumagulova');
// const namt = 'Gulzhan'
// console.log('Hello, '+ name + '!')
// console.log('Hello, '${name} '!')

// console.log('Привет, 'Алмаз'');

// console.log(''\t\t\t\tПривет,\n 'Жанна"'); // вниз спустить Жанну надо через '\' и \t - означает пробел/
// console.log('Привет, \"САША""'); // '\' - применяется к определенной части/ 


// ** ОПЕРАТОРЫ "И" " ИЛИ" */
// && - и
console.log(true && false) // true
console.log(true && false) //false
console.log(true && false) // false
console.log(true && false) //false

    // || - или
console.log(true && true) // true
console.log(true && true) //true
console.log(true && false) // true
console.log(true && false) //false

/** IF ELSE (условия)  */

//let num1 = 7
// let num2 = 5

// if(num1 > num2){ //if(false) -> НИЧЕ НЕ БУДЕТ РАБОТАТЬ
//     console.log('${num1} БОЛЬШЕ ${num2}');
// }

// else if(num1 < num2){ 
//     console.log('${num1} МЕНЬШЕ ${num2}');
// }

// else {
//     console.log('ЧИСЛА РАВНЫ')
// }

// 1 ЗАДАЧА
// const userName = prompt('Напишите ваше имя')
// alert('Привет,$(userName)!')

// 2 ЗАДАЧА
// const number = prompt('Введите число')
// const exponent = prompt('В какую степень вывести число?')
// console.log(number ** exponent);

// 5 * 2 = 10
// 5 ** 2 = 25

// 3 ЗАДАЧА
// const userCountry = prompt('Ваше гражданство?')
// if(userCountry === 'Казахстан' 
//     || userCountry === 'Kazakhstan' 
//     || userCountry === 'КАЗАХСТАН'
//     || userCountry === 'Қазақстан'){
//     alert("Вы резидент Казахстана!");
// }
// else {
//     alert("Вы не резидент Казахстана!");

// }

// 4 ЗАДАЧА - && -и, также || - или
// const userAge = Number (prompt('Сколько вам полных лет?'))
// console.log(userAge)
// if(Number.isNaN)(userAge){
//     alert('Введите пожалуйста число')
// }
// if(userAge >= 21) {
//     alert('Вам можно пить пиво!')
// }
// if(userAge < 0 || userAge . 140) {
//     alert('Вы издеваетесь?')
// }

// else if(userCountry === 'Казахстан' 
// || userCountry === 'Kazakhstan' 
// || userCountry === 'КАЗАХСТАН'
// || userCountry === 'Қазақстан'){
//     alert('Вам можно пить алкоголь!')
// }

// else {
//     alert('Вам нельзя пить алкоголь!')
// }

// 5 ЗАДАЧА
// const userAge = prompt('Ваш возраст:')
// if(userAge <= 0 || uaerAge >=25) { //ЕСЛИ ИНТЕРВАЛ - &&
//     alert('Вы не подросток!')
// }
// else {
//     alert('Вы не подросток!')
// }
