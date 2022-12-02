//отримати 2 цифрових значення і вивести результат математичнихх операцій в console.
let firstValue = prompt("answer one ");
let secondValue = prompt("answer two ");
console.log(Number(firstValue) + Number(secondValue));
console.log(Number(firstValue) / Number(secondValue));
// Отримати 2 текстових значення і вивсести за допомогою document .write  "User name: FirstVar  User last name SecondVar "
// ( firstVar, secondVar значення які отримали )
let FirstVar = prompt("James");
let SecondVar = prompt("Bond");
document.write("User name:", FirstVar);
document.write("</br>");
document.write("User last name:", SecondVar);
//отримати текстове  значення і виконати перевіку: якщо  uk повернути true, якщо ru  повернути false
let uk = prompt(1);
let ru = prompt(1);
let trust = prompt(true);
let goodPeople = prompt(false);
let rain = uk == trust;
let rain1 = ru == goodPeople;
console.log(rain);
console.log(rain1);
//отримати 2 числових значення якщо перше більше 20 а друге більше 30 то вивстести true, якщо одна з умов не відповідає вивсести false
let first = 21;
let second = 31;
console.log(first > 20 && second > 30);

console.log(first < 20 && second < 30);
