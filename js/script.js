//отримати 2 цифрових значення і вивести результат математичнихх операцій в console.
let a = 4 + 4;
let b = 5 - 3;
console.log(a + b);
console.log(a / b);
// Отримати 2 текстових значення і вивсести за допомогою document .write  "User name: FirstVar  User last name SecondVar "
// ( firstVar, secondVar значення які отримали )
let FirstVar = "James";
let SecondVar = "Bond";
document.write("User name:", FirstVar);
document.write("</br>");
document.write("User last name:", SecondVar);
//отримати текстове  значення і виконати перевіку: якщо  uk повернути true, якщо ru  повернути false
let uk = 1;
let ru = 1;
let trust = true;
let goodPeople = false;
let rain = uk == trust;
let rain1 = ru == goodPeople;
console.log(rain);
console.log(rain1);
//отримати 2 числових значення якщо перше більше 20 а друге більше 30 то вивстести true, якщо одна з умов не відповідає вивсести false
let first = 21;
let second = 31;
console.log(first > 20, "true");
console.log(second > 30, "true");
console.log(first < 20, "false");
console.log(second < 30, "false");
