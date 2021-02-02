let menu = document.getElementsByClassName('menu')[0];
let menuBreak = document.getElementsByClassName('menu-item');

menu.insertBefore(menuBreak[2],menuBreak[1]);  // меняем порядок

let five = document.createElement('div');
five.classList.add('menu-item');
five.innerHTML = 'Пятый пункт';
menu.appendChild(five); //добавили 5-ый пункт
document.body.style.backgroundImage = 'url(img/apple_true.jpg)'; //меняем фон

let title = document.getElementById('title');
title.textContent ="Мы продаем только подлиную технику Apple"; 


let column = document.getElementsByClassName('column')[1];
let adv = document.getElementsByClassName('adv')[0];
column.removeChild(adv);


let question = prompt("Какого ваше отношение к технике Apple?","");
let prom = document.getElementsByClassName('prompt')[0];
console.log(prom);
prom.textContent ="Отношение клиентов к технике Apple:   " + question;