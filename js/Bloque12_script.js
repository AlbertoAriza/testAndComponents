"use strict";

/*    _    _   _ ____ _ 
 __ _(_)__| | / |__  / |
 \ V / / _` | | | / /| |
  \_/|_\__,_| |_|/_/ |_|
*/
// 171.-  CONVERTING AND CHECKING NUMBERS
console.log('171.-  CONVERTING AND CHECKING NUMBERS');
/*
 *  Returns: 
 * Parameters:
 * 
 */
console.log('Number.parseInt()');
console.log(Number.parseInt('120x'));
console.log(Number.parseInt('1.2x'));

console.log('Number.parseFloat()');
console.log(Number.parseFloat('1.2x'));

console.log('Number.isNaN()');
console.log(Number.isNaN(23));
console.log(Number.isNaN('23'));
console.log(Number.isNaN(23/0));
console.log(Number.isNaN(+'hola'));

console.log('Number.isFinite()');
console.log(Number.isFinite(10));
console.log(Number.isFinite('10'));
console.log(Number.isFinite(+'10'));

console.log('Number.isInteger()');
console.log(Number.isInteger(10));
console.log(Number.isInteger('10'));
console.log(Number.isInteger(+'10'));


console.log('***************************************************');

/*    _    _   _ ____ ___ 
 __ _(_)__| | / |__  |_  )
 \ V / / _` | | | / / / / 
  \_/|_\__,_| |_|/_/ /___|
*/
// 172.-  MATH AND ROUNDING
console.log('172.-  MATH AND ROUNDING');
/*
 *  Returns: 
 * Parameters:
 * 
 */
console.log('Math.sqrt');
console.log(Math.sqrt(25));
console.log(5 ** 2);

console.log('Math.max()');
let numbers = [1, 34, -120, 48, "55"];
console.log(Math.max(...numbers));

console.log('Math.min()');
console.log(Math.min(...numbers));

console.log('Math.trunc()');
console.log(Math.trunc(5.6));
console.log(Math.trunc(-5.4));

console.log('Math.round()');
console.log(Math.round(5.6));
console.log(Math.round(-5.4));

console.log('Math.floor()');
console.log(Math.floor(25.63));
console.log(Math.floor('25.63')); // It does type cohersion
console.log(Math.floor(-25.63));
console.log(Math.floor(-5.4));

console.log('Math.ceil()');
console.log(Math.ceil(25.63));
console.log(Math.ceil(-5.4));

console.log('Math.random()');
console.log(Math.random());

console.log('Random dice');
document.getElementById('diceRolling').addEventListener('click', function(e){
  e.preventDefault();
  let tirada = Math.trunc(Math.random() * 6 + 1);
  let result02 = document.querySelector('.diceRolling_Result')
  result02.textContent = `${tirada}`;
})
console.log(Math.trunc(Math.random() * 7));


let randomInt = (min, max) => console.log(Math.floor(Math.random() * (max - min) + 1) + min);
randomInt(3, 9);

console.log('.toFixed()');
let decimals = (8.73221).toFixed(1);
console.log(decimals); // → 8.7
console.log(typeof decimals); // → string
console.log(+decimals); // → 8.7
console.log(typeof +decimals); // → number

console.log(typeof "2.5");
console.log(typeof +"2.5");

console.log(typeof 2_000_000_000);
let sumando01 = 2_000_000_000;
let sumando02 = 245_000_002;
console.log(sumando01 + sumando02);
console.log(typeof sumando01);
console.log(typeof sumando01 === typeof sumando02);

console.log('***************************************************');

/*    _    _   _ ____ ____
 __ _(_)__| | / |__  |__ /
 \ V / / _` | | | / / |_ \
  \_/|_\__,_| |_|/_/ |___/
*/
//173.-  THE REMAINDER OPERATOR
console.log('173.-  THE REMAINDER OPERATOR');
console.log(5 % 2); // → 1



console.log('***************************************************');

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];





console.log(Number.MAX_SAFE_INTEGER);

let numeroGrande01 = 999999999999999999999999999999999999999999n;
console.log(typeof numeroGrande01);

let numeroGrande02 = 111n;
console.log(numeroGrande01 + numeroGrande02);

console.log('***************************************************');


/*    _    _   _ ____ __     _ ___  __  
 __ _(_)__| | / |__  / / ___/ ( _ )/  \ 
 \ V / / _` | | | / / _ \___| / _ \ () |
  \_/|_\__,_| |_|/_/\___/   |_\___/\__/ 
*/
// DATES
console.log('176 - 180 DATES');

let dateFunction = () => {
  //We create a variable in which the current date is stored
  let now = new Date();

  //The stored date looks like this
  console.log(now); // → Sat Jul 02 2022 12:37:39 GMT+0200 (hora de verano de Europa central)

  //Different methods can be used to extract information from that Date

  //.getFullYear() extracts the year from the original date.
  let currentYear = now.getFullYear();
  console.log(currentYear);
  //2022

  /*.getMonth() extracts the months from the original date.
  (0 → January, 1 → February, 2 → March, 3 → April, 4 → May, 5 → June, 6 → July...)*/
  let currentMonth = now.getMonth();
  console.log(currentMonth); // → 4 (MAYO)

  //.getDate() extracts the day of the month from the original date.
  let currentDate = now.getDate();
  console.log(currentDate); // → 2

  console.log(
    `The date is ${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`
  );
};
dateFunction();

let now = new Date();

//Giving the text the format as it should be shown in the USA, this is: month/day/year
let usaNow = new Intl.DateTimeFormat("en-US").format(now);
console.log(usaNow);

//Creating now an object, called 'options', to change the way the date is shown
let options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

let usaNow2 = new Intl.DateTimeFormat("en-US", options).format(now);
console.log(usaNow2);

//Doing the same with Spanish date now. Date should be displayed: day/month/year
let spanishNow = new Intl.DateTimeFormat("es").format(now);
console.log(spanishNow);

//Applying now the object 'options' to the Spanish Date to change the way it is shown.
let spanishNow2 = new Intl.DateTimeFormat("es", options).format(now);
console.log(spanishNow2);


console.log('***************************************************');

/*    _    _   _ ___ _ 
 __ _(_)__| | / ( _ ) |
 \ V / / _` | | / _ \ |
  \_/|_\__,_| |_\___/_|
*/
// 181.-  TIMERS: .SETTIMEOUT() AND .SETINTERVAL()
console.log('181.-  TIMERS: .SETTIMEOUT() AND .SETINTERVAL()');

// → .SETTIMEOUT()
console.log('→ .setTimeout()');

let pizzaIngredients = (ing1, ing2) =>
  console.log(`I like pizza with ${ing1} and ${ing2}`);
pizzaIngredients("peperoni", "bacon");

let pizzaTimer = setTimeout(() => console.log(`Here is your pizza`), 3000);

let getH1Title = document.querySelector(".h1Title");

setTimeout(() => (getH1Title.textContent = "Cordoba 🌞, Cordoba 🌞, Cordoba 🌞"), 5000);

// → .SETINTERVAL()
console.log('→ .setInterval()');

//construyendo un reloj
let reloj = document.getElementById('reloj_p');
setInterval(() => {
  let horaNow = new Date();
  reloj.textContent = `${horaNow.getHours()} : ${horaNow.getMinutes()} : ${horaNow.getSeconds()}`;
}, 1000);

// construyendo reloj con hora formateada
let getReloj2 = document.getElementById('reloj_p2');
let opciones = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
setInterval(()=>{
  let now = new Date();
  getReloj2.textContent = `${Intl.DateTimeFormat('es-ES', opciones).format(now)}`;
}, 1000);

/*let now2 = Intl.DateTimeFormat("es", opciones).format(now);
console.log(now2);*/

console.log('***************************************************');

/*
*/

console.log(Number.parseFloat("115.55321455px"));
console.log(Number.parseInt("115.55321455px"));

let getHeader = document.querySelector("header");

//console.log(getComputedStyle(getHeader));

console.log(getComputedStyle(getHeader).height);
// → 221.587px

getHeader.style.height =
  Number.parseFloat(getComputedStyle(getHeader).height) + 30 + "px";

console.log(getComputedStyle(getHeader).height);
// → 251.575px

//getComputedStyle(getHeader).height =
Number.parseInt(getComputedStyle(getHeader).height) + 30 + "px";

console.log(getComputedStyle(getHeader).height);
// → Uncaught DOMException: Failed to set the 'height' property on 'CSSStyleDeclaration': These styles are computed, and therefore the 'height' property is read-only.

let getMain = document.querySelector("#main");
console.log(getMain);
console.log(getMain.firstChild);
console.log(getMain.lastChild);
console.log(document.querySelector("#section01").firstChild);
console.log(document.querySelector("#section01").lastChild);

let getSection01 = document.querySelector("#section01");

/* Reading standard properties without '.getAttribute()' */
console.log(getSection01.className);
//
console.log(getSection01.designer);
//

/* Reading standard and non-standard properties with '.getAttribute()' */
console.log(getSection01.getAttribute("class"));
console.log(getSection01.getAttribute("designer"));
getSection01.id = "section01b";
console.log(getSection01.id);
// → section01bç
getSection01.setAttribute("designer", "Ariza");
console.log(getSection01.getAttribute("designer"));

getSection01.setAttribute("company", "LondonEye English School");
console.log(getSection01.dataset.versionNumber);

getSection01.classList.add("classA", "classB", "classC");
console.log(getSection01.className);

getSection01.classList.remove("classB");
console.log(getSection01.className);

const getToggleButton = document.querySelector(".btn_01");
console.log(getToggleButton);

getToggleButton.addEventListener("click", (e) => {
  getToggleButton.classList.toggle("blue");
});
