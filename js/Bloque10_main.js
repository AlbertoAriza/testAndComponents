let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];

let totals = [];

let calcTips = function (bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

for (i = 0; i < bills.length; i++) {
  tips.push(calcTips(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

let calcAverage = function (arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  let average = total / arr.length;
  return average;
};

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [28, -17];

let smallest = temperatures[0];
let biggest = temperatures[0];

function tempAmplitud(arr, arr2) {
  let newArr = temperatures.concat(temperatures2);
  console.log(newArr);
  for (i = 1; i < newArr.length; i++) {
    if (newArr[i] == isNaN() && smallest == isNaN()) continue;
    if (newArr[i] < smallest) smallest = newArr[i];
    if (newArr[i] > biggest) biggest = newArr[i];
  }
}
tempAmplitud(temperatures, temperatures2);

console.log(
  `The biggest value is ${biggest} and the smallest value is ${smallest} and the temperature amplitud is ${
    biggest - smallest
  } :)`
);

let arr28 = {
  firstName: "jose",
  apellido: "ariza",
  posesiones: ["casa", "local", "coche"],
};

console.log(arr28.posesiones[1]);
console.log(arr28.firstName);
console.log(arr28["apellido"]);
console.log(arr28["posesiones"][0]);

//AÑADIENDO EVENT LISTENERS
let getSeccionTesteo = document.querySelector(".seccionTesteo");
let getSeccionTesteada = document.querySelector(".seccionTesteada");

let suceso = function () {
  getSeccionTesteo.textContent = "botón pulsado";

  //AÑADIENDO CLASES
  getSeccionTesteada.classList.toggle("hidden");
  //getSeccionTesteada.classList.add('');
  //getSeccionTesteada.classList.toggle('');
};

getSeccionTesteo.addEventListener("click", suceso);

var birthYear = 2000;

let jose = {
  firstName: "Jose",
  birthYear: 1978,

  calcAge1: function () {
    console.log(2022 - this.birthYear);
  },

  calcAge2: () => {
    console.log(2022 - this.birthYear);
  },
};

//jose.calcAge1();
jose.calcAge1();
jose.calcAge2();

const me = {
  firstName: "Jose",
  lastName: "Ariza",
  edad: 43,
};

const maria = {
  firstName: "Maria",
  lastName: "Ruiz",
  edad: 31,
};

const ana = maria;

console.log(me);
console.log(maria);
console.log(ana);
ana.edad = 18;

console.log(ana);
console.log(maria);

const arr5 = [2, 3, 4];

const restaurant = {
  restaurantName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    fridayOpeningHours: {
      open: 11,
      close: 24,
    },
    saturdayOpeningHours: {
      open: 11,
      close: 23,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered in ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};
restaurant.orderDelivery({
  address: "Alcalde Sanz Noguer, 18",
  time: "21:30",
  starterIndex: 1,
  mainIndex: 1,
});

let [first, , second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const pedido = restaurant.order(2, 0);
const [chosenStarter, chosenMain] = pedido;
console.log(
  `Empezaremos tomando ${chosenStarter} y de plato principal ${chosenMain}.`
);

const [chosenStarter2, chosenMain2] = restaurant.order(1, 1);
console.log(
  `Y nosotros tomaremos ${chosenStarter2} y de plato principal ${chosenMain2}.`
);

const [s, t, v, w] = arr5;
console.log(s, t, v, w);

const [d = 1, e = 1, f = 1, g = 1] = arr5;
console.log(d, e, f, g);

//Destructuring objects
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, b, c } = obj;
console.log(a, b, c);

//destructuring objects inside object
/* const {restaurantName, openingHours, categories} = restaurant;
console.log(restaurantName, openingHours, categories); */

//destructuring objects inside object & changing the name of the variables
console.log(restaurant.openingHours);
const {
  fridayOpeningHours: { open: abrir, close: cerrar },
} = restaurant.openingHours;
console.log(abrir, cerrar);

/* let fridayTimetable = restaurant.openingHours.fridayOpeningHours;
console.log(fridayTimetable);
const {open, close} = fridayTimetable;
console.log(open, close); */

const { saturdayOpeningHours: satTimetable } = restaurant.openingHours;
console.log(satTimetable);

const {
  saturdayOpeningHours: { open: ab, close: ce },
} = restaurant.openingHours;
console.log(ab, ce);

// vid 105 THE SPREAD OPERATOR
const anotherArr1 = [1, 2, 3, 4];
const anotherArr2 = [...anotherArr1, 5, 6, 7];
console.log(anotherArr2);
console.log(...anotherArr2);

const firstObject = {
  a: 1,
  b: 2,
};

const secondObject = {
  c: 3,
  d: 4,
};

Object.assign(firstObject, secondObject);
console.log(firstObject);
console.log(secondObject);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const menu2 = restaurant.mainMenu.concat(restaurant.starterMenu);
console.log(menu2);

//passing the values of an array as arguments to a function
/* const ingredients = [prompt('choose your first ingredient'), prompt('choose your second ingredient'), prompt('choose your last ingredient')];
restaurant.orderPasta(...ingredients); */

const newRestaurant = { ...restaurant };
console.log(newRestaurant);

//joining two arrays in one using rest and spread operators
const [...wholeMenu] = [restaurant.starterMenu, restaurant.mainMenu];
console.log(wholeMenu);

const [...wholeMenu2] = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu2);

const wholeMenu3 = restaurant.starterMenu.concat(restaurant.mainMenu);
console.log(wholeMenu3);

const arr20 = [1, 2, [3, 4]];
console.log(arr20);
const arr21 = [5, 6, [7, 8, 9]];
console.log(arr21);
const arr22 = arr20.concat(arr21);
console.log(arr22);

const [...arr23] = [...arr20, ...arr21];
console.log(arr23);

const thirdRestaurant = {
  nombre2: "Tasquita de levante",
  starterMenu2: ["patatas brava", "croquetas"],
  mainMenu2: ["flamenquín con papas", "rabo de toro", "opción vegana"],
  openingHours2: {
    fridayOpeningHours: {
      open: "20.00",
      close: "24.30",
    },
    saturdayOpeningHours: {
      open: "20.00",
      close: "22.00",
    },
  },
};

const { ...allRestaurants } = { ...restaurant, ...thirdRestaurant };
console.log(allRestaurants);
console.log(allRestaurants.nombre2);
console.log(allRestaurants.restaurantName);
console.log(allRestaurants.length);

let largo = restaurant.length;
console.log(largo);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 5);
add(5, 5, 5, 5);

function max(...numbers) {
  let result = numbers[0];
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));

function max2(...numbers) {
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number > result) result = number;
  }
  return result;
}
console.log(max2(4, 1, 9, -2, 16));

let param = 2 == 2;
console.log(2 === 3 ? "verdad" : "falso");

console.log(true || "second option");

let sy = 0;
let ty = null;
let uy = "hello";
console.log(sy || ty || uy);

let xxx = [0, 8, null, "bye"];
console.log(xxx[0] || xxx[1] || xxx[2]);
console.log(2 == 2 || "mas farso que tó");

restaurant.numGuests = 0;
console.log(restaurant.numGuests || 10);
console.log(restaurant.numGuests ?? 10);

console.log("----- NEW OPERATOR PRACTICE-----");

let restaurant01 = {
  nombre: "Flamenca Salerosa",
  numGuests: 0,
  owner: "Manolo",
};

let restaurant02 = {
  nombre: "Er pishita de huerva",
  numGuests: 0,
};

let restaurant03 = {
  nombre: "La Piazza",
  numGuests: 0,
};

let restaurant04 = {
  nombre: "La Cantinita",
  numGuests: 0,
};

restaurant01.numGuests = restaurant01.numGuests || 10;
restaurant02.numGuests = restaurant02.numGuests ?? 10;
restaurant03.numGuests ||= 10;
restaurant04.numGuests ??= 10;

console.log(restaurant01);

restaurant01.owner &&= "ANONYMOUS";
console.log(restaurant01);

console.log(restaurant02);
console.log(restaurant03);
console.log(restaurant04);

/*__   _____ ___    _ _  __  
  \ \ / /_ _|   \  / / |/  \ 
   \ V / | || |) | | | | () |
    \_/ |___|___/  |_|_|\__/
*/
/**
 * We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
 */

console.log("----- FOOTBALL BETTING APPLICATION -----");

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martínez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Gazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log("-----TASK 1-----");
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

console.log("-----TASK 2-----");
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

console.log("-----TASK 3-----");
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

console.log("-----TASK 4-----");
const players1Final = [...players1, "Thiago", "Coutinho", "Persic"];
console.log(players1Final);

console.log("-----TASK 5-----");
const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

console.log("-----TASK 6-----");
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) console.log(players[i]);
};
printGoals(...players1);
console.log("-----TASK 6b-----");
printGoals("Davies", "Muller", "Lewandowsky", "Kimmich");
console.log("-----TASK 6c-----");
printGoals(...game.scored);

console.log("-----TASK 7-----");
console.log(team1 < team2 ? game.team1 : game.team2);

/*__   _____ ___    _ _ _ 
  \ \ / /_ _|   \  / / / |
   \ V / | || |) | | | | |
    \_/ |___|___/  |_|_|_|
*/
//LOOPING ARRAYS: THE FOR-OF LOOP
console.log("-----VID 111-----");
const anotherMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(anotherMenu);

for (const item of anotherMenu) console.log(item);

console.log("-----sacando los index de cada elemento en los loops for-of-----");
//y si queremos los indexes de cada iteración?
for (const item of anotherMenu.entries()) console.log(item);

//in this type of loop we can destructure the variable, as it is really an array with the index and the value.
for ([index, element] of anotherMenu.entries())
  console.log(`${index + 1} ${element}`);

console.log("-----testeando ando---");
for (let item of anotherMenu.entries()) {
  [index, item] = item;
  console.log(index, item);
}

const arr001 = [1, 2, 3, 4, 5, 6, 7, 8];
const [aa, bb, cc, dd, ee, ...others] = arr001;
console.log(others);

/*__   _____ ___    _ _ ___ 
  \ \ / /_ _|   \  / / |_  )
   \ V / | || |) | | | |/ / 
    \_/ |___|___/  |_|_/___|
*/
//ENHANCED OBJECT LITERALS
/*Viene a decir este video que dentro de los objetos hay cosas que con la llegada de ES6 se han simplificado en la escritura.
Por ejemplo, al insertar valores de otros lados o arrays o objetos, no es necesario igualarlos a si mismo a=a;, sino que
podemos poner una vez el nombre del valor y punto a,.

También no es necerario poner la palabra function al crear métodos en un objeto: calcAge(){...},

Por último, los nombres de los parámetros de un objeto pueden ser computados: [`day${4+2]: valor asignado,*/

/*__   _____ ___    _ _ ____
  \ \ / /_ _|   \  / / |__ /
   \ V / | || |) | | | ||_ \
    \_/ |___|___/  |_|_|___/
*/
//OPTIONAL CHAINING (?.)
/*ES2020 introduced this new feature of objects and arrays.*/

//WITHOUT OPTIONAL CHAINING
if (restaurant.openingHours.mondayOpeningHours)
  console.log(restaurant.openingHours.mondayOpeningHours.open);

if (restaurant.openingHours.fridayOpeningHours)
  console.log(restaurant.openingHours.fridayOpeningHours.open);

//WITH OPTIONAL CHAINING
//With the optional chaining we don't break the flow if the property or method doesn't exist. It stops there and returns 'undefined'.
console.log(restaurant.openingHours.mondayOpeningHours?.open);

console.log(restaurant.openingHours.fridayOpeningHours?.open);

console.log(
  `The restaurant opens this day at ${restaurant.openingHours.fridayOpeningHours?.open}`
);

console.log(
  `The restaurant opens this day at ${restaurant.openingHours.mondayOpeningHours?.open}`
);

//This property leaves out falsy values. Let's recreate a new big restaurant here.
const restaurant113 = {
  restaurantName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    friday: {
      open: 11,
      close: 24,
    },
    saturday: {
      open: 11,
      close: 23,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered in ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

let days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

console.log(
  "-----Test with the object restaurant113 with properties that exist and some that don't-----"
);
for (let day of days) {
  /*In a variable we can use || with this new ?. or we can use ?? with ?. to give different values to a variable depending on
  the existence of the value*/
  const open =
    restaurant113.openingHours[day]?.open || "Sorry, we are closed this day";
  console.log(`On ${day} we open at: ${open}`);
}

console.log(
  "-----The same but with the nullish coalescing operator (??) instead of the or (||)-----"
);
/*If we have problems with falsy values like the 0, we'd better use ?? instead of || */
for (let day of days) {
  const open =
    restaurant113.openingHours[day]?.open ?? "Sorry, we are closed this day";
  console.log(`On ${day} we open at: ${open}`);
}

console.log("-----Using the OPTIONAL CHAINING operator with methods-----");
//Using this optional chaining operator with methods
console.log(restaurant113.order?.(1, 1));
console.log(restaurant113.order1?.(1, 1));

console.log("-----The OPTIONAL CHAINING with arrays-----");
//It also works with arrays (objects inside arrays)
const users = [{ name: "Jose", email: "jose@londoneyepad.com" }];
console.log(users[0]?.name);

/*__   _____ ___  ___ ___    _ _ _ _  
  \ \ / /_ _|   \| __/ _ \  / / | | | 
   \ V / | || |) | _| (_) | | | |_  _|
    \_/ |___|___/|___\___/  |_|_| |_|
*/
//LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES
console.log("-----VID 114-----");
/*With the for of loop we can loop over iterables. Nevertheless, there is a way to use it to loop over non-iterables, although it
is an indirect way using 'Object.keys()'. By using this, we loop over property names of objects.*/
for (let day of Object.keys(restaurant113.openingHours)) console.log(day);

console.log("-----new object to iterate-----");
let objct114a = {
  nombre: "Jose",
  apellido: "Ariza",
  email: "jose@londoneyepad.com",
  address: "Alcalde Sanz Noguer",
  propertiesOwned: ["house", "academy", "car"],
};

console.log("-----Iterating the new object with OBJECT.KEYS-----");
//This Object.keys creates an array with the names of the properties, its keys.
console.log(Object.keys(objct114a));
for (let data of Object.keys(objct114a)) console.log(data);

console.log("-----Iterating the new object with OBJECT.VALUES-----");
//This Object.values creates an array with the values of the properties of the object.
console.log(Object.values(objct114a));
for (let propertyValues of Object.values(objct114a)) console.log(propertyValues);

//Frikeando un poco con lo aprendido de Destructuring y Object.values.
let [
  propertyValue1,
  propertyValue2,
  propertyValue3,
  propertyValue4,
  propertyValue5,
] = Object.values(objct114a);

console.log(
  propertyValue1,
  propertyValue2,
  propertyValue3,
  propertyValue4,
  propertyValue5
);

console.log("-----Iterating the new object with OBJECT.ENTRIES-----");
/*This Object.entries creates an array with the keys and values of the properties of the object.
We can't iterate over an object in the say way we do with an array, using .entries. iT WON'T work if we put 
the name of the object.entries as we did with the array. we use Object.entries(object)*/
console.log(Object.entries(objct114a));
let objectEntries = Object.entries(objct114a);
console.log(objectEntries);

console.log("-----recordando como se iteraba con un array---");
let var114a = [1, 2, 3, 4, 5];
for (let var114b of var114a.entries()) console.log(var114b);

console.log("-----To sum up-----");
const objectKeys = Object.keys(objct114a);
console.log(objectKeys);

const objectValues = Object.values(objct114a);
console.log(objectEntries);

console.log(objectEntries);

console.log(
  "-----probando un rulo final: remember you can destructure the values into the variables you create---"
);
for (let [key, value] of objectEntries)
  console.log(`Para la key ${key} el valor es ${value}`);

/*__   _____ ___  ___ ___    _ _ ___    __  _         _ _                 __  
  \ \ / /_ _|   \| __/ _ \  / / | __|  / /_| |_  __ _| | |___ _ _  __ _ __\ \ 
   \ V / | || |) | _| (_) | | | |__ \ | / _| ' \/ _` | | / -_) ' \/ _` / -_) |
    \_/ |___|___/|___\___/  |_|_|___/ | \__|_||_\__,_|_|_\___|_||_\__, \___| |
                                       \_\                        |___/   /_/
*/
//CHALLENGE
console.log("-----VIDEO 15-----");
const game2 = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martínez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Gazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log("-----Coding Challenge 2 (Part1) -----");
let playersWhoScored = Object.entries(game2.scored);
for (let [key, value] of playersWhoScored)
  console.log(`Goal number ${Number(key) + 1} scored by ${value}`);

console.log("-----Coding Challenge 2 (Part2) -----");
let averageOdd = Object.values(game2.odds);
let averageOddFunction = function () {
  let averageOdd2 = 0;
  for (let x of averageOdd) {
    averageOdd2 += x;
  }
  console.log(averageOdd2 / averageOdd.length);
};
averageOddFunction();

console.log("-----Coding Challenge 2 (Part3) -----");
/* let averageOddValues = Object.values(game2.odds);
console.log(averageOddValues);
console.log(`Odd of victory ${game2.team1}: ${averageOddValues[0]}`);
console.log(`Odd of draw: ${averageOddValues[1]}`);
console.log(`Odd of victory ${game2.team2}: ${averageOddValues[2]}`);

console.log("-----Coding Challenge 2 (Part3) Intento más currao -----"); */
for (let [keys, values] of Object.entries(game2.odds)) {
  let team = keys === "x" ? "draw" : `victory ${game2[keys]}`;
  console.log(`Odd of ${team}: ${values}`);
}

console.log("-----Coding Challenge 2 (Bonus) -----");
let scorers = {};
for (let x of game2.scored) {
  console.log(x);
  if (scorers[`${x}`]) {
    scorers[`${x}`]++;
  } else {
    scorers[`${x}`] = 1;
  }
}
console.log(scorers);

/*__   _____ ___  ___ ___    _ _  __ 
  \ \ / /_ _|   \| __/ _ \  / / |/ / 
   \ V / | || |) | _| (_) | | | / _ \
    \_/ |___|___/|___\___/  |_|_\___/
*/
console.log("----------VIDEO 16----------");
//SETS
/*With ES6 two more data structures were introduced apart from objects and arrays that already existed.
These new data structures are SETS and MAPS. SET is a collection of unique values. That means that a SET cannot have a duplicate.
Sets are iterable*/

console.log("-----We can pass iterables like arrays as values to SETS-----");
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);
console.log(new Set("Jose"));

//HOW DO SETS WORK? (METHODS)
console.log("-----How do SETS work?-----");
console.log(orderSet.size);

//Chequeando si un elemento está presente en el SET
console.log("-----Chequeando si un elemento está presente en el SET-----");
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

//Adding new elements to a SET
/*Each element in the set is unique. There can only be one. */
console.log("-----Adding new elements to a SETS-----");
orderSet.add("Garlic bread");
orderSet.add("Garlic bread");
console.log(orderSet);

//Deleting an element from a SET
console.log("-----Deleting an element from a SET-----");
orderSet.delete("Risotto");
console.log(orderSet);

//Retrieving data from a SET
console.log("-----Retrieving data from a SET-----");

//Deleting all the elements in a SET
console.log("-----Deleting all the elements in a SET-----");
orderSet.clear();
console.log(orderSet);

//Looping a SET
let orderSet2 = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log("-----Looping a SET with for-of-----");
for (let x of orderSet2) console.log(x);

/*One of the most important uses of SETS is to eliminate duplicated values from arrays. */
let staff = ["waiter", "Chef", "Waiter", "Manager", "Chef", "waiter"];

let uniqueStaff = new Set(staff);
console.log(staff);
console.log(uniqueStaff);

//Pasando de nuevo los valores del SET al ARRAY
staff = [...uniqueStaff];
console.log(staff);

/*__   _____ ___  ___ ___    _ _ ____ 
  \ \ / /_ _|   \| __/ _ \  / / |__  |
   \ V / | || |) | _| (_) | | | | / / 
    \_/ |___|___/|___\___/  |_|_|/_/ 
*/
//MAPS FUNDAMENTALS
console.log("---------- VID 117 ----------");
/*MAPS are more useful than SETS.
A MAP is a data structure that can be used to match malues to keys. Just like objects, values can be stored in pairs.
The big difference with MAPS is that the keys can have any type. In objects the keys are always strings but in maps we can
have any kind of keys.*/

console.log("-----Creating a MAP-----");
let rest = new Map();

console.log("----- Passing arguments to a MAP-----");
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);

//We can chain changes in MAPS with SET because it will return all the map.
//This allows us to include more changes to this whole map.
console.log("----- We can chain changes and additions to a MAP-----");
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "We are closed");

//In order to read data from a map we use the .GET method.
console.log("----- Retrieving data from a MAP with .GET-----");
console.log(rest.get("name"));
console.log(rest.get(true));

//aprovechando que podemos poner booleans como nombre a valores
console.log(
  "----- Aprovechando que podemos poner booleans como nombre a valores en un MAP-----"
);
let hora = 21;

console.log(rest.get(hora > rest.get("open") && hora < rest.get("close")));

//Chequeando si hay un valor en el MAP con .HAS
console.log("----- Chequear si hay cierta key en el MAP con .HAS-----");
console.log(rest.has("categories"));

//Deleting a property in the MAP with .DELETE
console.log("-----Deleting a property in the MAP with .DELETE-----");
rest.delete(2);
console.log(rest);

//MAPS also have the .SIZE method
console.log("----- MAPS also have the .SIZE method-----");
console.log(rest.size);

//MAPS also have the .CLEAR method
console.log("----- MAPS also have the .CLEAR method-----");
rest.clear();
console.log(rest);

//Using arrays or objects as MAPS keys
/*It is messy, as the array will be difficult to retrieve.
In order for this and the retrieving proces to work first we need to give a name to the array*/
console.log("-----Using arrays or objects as MAPS keys-----");
let arr117 = [1, 2];
rest.set(arr117, "Test");
console.log(rest);
//Retrieving a property from a MAP when the key is an array or object
console.log(
  "-----Retrieving a property from a MAP when the key is an array or object-----"
);
console.log(rest.get(arr117));

/*We can even use an element of the dom that we can get with 'querySelector()' as key in a MAP*/
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

/*__   _____ ___  ___ ___    _ _ ___ 
  \ \ / /_ _|   \| __/ _ \  / / ( _ )
   \ V / | || |) | _| (_) | | | / _ \
    \_/ |___|___/|___\___/  |_|_\___/
*/
//MAPS: ITERATION
console.log("---------- VID 118 ----------");

//Another way to populate a MAP: an array of arraysç
console.log("-----Creamos un nuevo MAP-----");
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);

console.log(question);

//As we can see this way to populate a MAP is like when we get the data from an object with 'Object.entries()
//This makes it easy to transform a MAP into an object.
console.log("-----convirtiendo un objeto en un MAP con Object.entries()");
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//Iteration on MAPS
console.log("-----iterando directamente el MAP-----");
for (let x of question) console.log(x);

console.log(
  "-----convirtiendo el MAP en un objeto antes de iterar algunos de sus valores-----"
);
console.log(question.get("question"));
for (let [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//let answer = Number(prompt("Your answer"));
//console.log(question.get(answer === question.get("correct")));

/*__   _____ ___    _ ___ __  
  \ \ / /_ _|   \  / |_  )  \ 
   \ V / | || |) | | |/ / () |
    \_/ |___|___/  |_/___\__/
*/
//CODING CHALLENGE 3
console.log("---------- VID 120 ----------");
console.log("-----CODE CHALLENGE 3-----");
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

console.log("---array de arrays---");
let getEntries = [...gameEvents.entries()];
console.log(getEntries);

console.log("---array con las keys---");
let getKeys = [...gameEvents.keys()];
console.log(getKeys);

console.log("---array con los values---");
let getValues = [...gameEvents.values()];
console.log(getValues);

console.log("---Task 1---");
/*Create an array called 'events' of the different game events that happened (no duplicates). */
/* let eventsSet = new Set([...getValues]);
console.log(eventsSet);
let events = [...eventsSet];
console.log(events); */
let events = [...new Set(gameEvents.values())];
console.log(events);

console.log("---Task 2---");
/*After the game has finished, it was found that the yellow card from minute 64 was unfair.
So remove this event from the game events log.*/

gameEvents.delete(64);
console.log(gameEvents);

console.log("---Task 3---");
/*Print the following string to the console: "An event happened,
on average, every 9 minutes (keep in mind that a game has 90 minutes"*/
console.log(gameEvents);
console.log(
  `An event happened, on average every ${90 / gameEvents.size} minutes`
);

console.log("---Task 4---");
/*Loop over the events and log them to the console, marking whether it's in the first hald of second half of the game.*/
for (let [key, value] of gameEvents) {
  let half = key <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
  console.log(`${half} ${key} ${value}`);
}

/*__   _____ ___    _ ___ _ 
  \ \ / /_ _|   \  / |_  ) |
   \ V / | || |) | | |/ /| |
    \_/ |___|___/  |_/___|_|
*/
// VIDEO 121
//WORKING WITH STRINGS (PART 1)
console.log("---------- VID 121 ----------");

//Strings also have methods: .length
console.log("----- String methods: .length -----");
let string01 = "airplane";
console.log(string01.length);
console.log("Helicopter".length);

//Strings also have methods: .indexOf
console.log("----- String methods: .indexOf -----");
console.log(string01.indexOf("e"));

//Strings also have methods: .lastIndexOf
console.log("----- String methods: .lastIndexOf -----");
console.log(string01.indexOf("a"));
console.log(string01.lastIndexOf("a"));

//Strings also have methods: .slice
console.log("----- String methods: .slice -----");
console.log(string01.slice(4));
console.log(string01.slice(-2));
console.log(string01.slice(2, -2));
console.log(string01.slice(string01.indexOf("a"), string01.lastIndexOf("a")));
console.log(
  string01.slice(string01.indexOf("a"), string01.lastIndexOf("a") + 1)
);

//Cuando usamos .slice, se devuelve el trozo cortado. Esto podemos usarlo de la siguiente manera:
//En un avión los asientos B y E son los del medio.
const checkMiddleSeat = function (seat) {
  let s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got middle seat");
  else console.log("You got lucky");
};
checkMiddleSeat("111B");
checkMiddleSeat("112C");

/*__   _____ ___    _ ___ ___ 
  \ \ / /_ _|   \  / |_  )_  )
   \ V / | || |) | | |/ / / / 
    \_/ |___|___/  |_/___/___|
*/
// VIDEO 122
//WORKING WITH STRINGS (PART 2)
console.log("-------------------- VID 122 --------------------");

//Strings also have methods: .toLowerCase() & .toUpperCase()
console.log("----- String methods: .toLowerCase & .toUpperCase -----");

let passenger = "jOnAS";
passenger = passenger.toLocaleLowerCase();
console.log(passenger);
let passengerLetter1 = passenger.slice(0, 1);
console.log(passengerLetter1);
passengerLetter1 = passengerLetter1.toLocaleUpperCase();
console.log(passengerLetter1);
passenger = passengerLetter1 + passenger.slice(1);
console.log(passenger);

//Strings also have methods: Comparing emails .trim(), .trimStart(), .trimEnd()
console.log("----- String methods: .toLowerCase & .toUpperCase -----");
let email = "hello@jonas.io";
let loginEmail = "  Hello@Jonas.io ";
loginEmail = loginEmail.toLowerCase();
loginEmail = loginEmail.trim().trim;
console.log(loginEmail);
console.log(loginEmail === email ? "Son iguales" : "Son diferentes");

//Strings also have methods: .replace() & .replaceAll()
console.log("----- String methods: .replace & .replaceAll -----");
const announcement =
  "Allpassengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

let priceGB = "288,97£";
let priceUSA = priceGB.replace(",", ".").replace("£", "$");
console.log(priceUSA);

//Strings also have methods: .include(), startsWith(), .endsWith()
console.log(
  "----- String methods: .include(), startsWith(), .endsWith() -----"
);
let plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Air"));
console.log(plane.endsWith("neo"));

/*__   _____ ___    _ ___ ____
  \ \ / /_ _|   \  / |_  )__ /
   \ V / | || |) | | |/ / |_ \
    \_/ |___|___/  |_/___|___/
*/
// VIDEO 123
//WORKING WITH STRINGS (PART 3)
console.log("-------------------- VID 123 --------------------");
//Strings also have methods: .split()
//This .split() will divide the string into an array of elements.
console.log("----- String methods: .split() -----");
console.log("a+very+nice+string".split("+"));
console.log("Jose Alberto Ariza Sánchez".split(" "));

//Strings also have methods: .join()
//This .join() will join different elements from an array.
console.log("----- String methods: .join() -----");
let newName = ["Mr.", "Ariza", "Sanchez"];
console.log(newName.join(" "));

console.log("-----Práctica-----");
const capitalizeName = function (name) {
  let names = name.split(" ");
  const namesUpper = [];

  for (let n of names) namesUpper.push(n[0].toLocaleUpperCase() + n.slice(1));
  console.log(namesUpper.join(" "));
};

capitalizeName("jose alberto ariza");

//another way to do it
const capitalizeName2 = function (name) {
  let names = name.split(" ");
  const namesUpper = [];

  for (let n of names) namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  console.log(namesUpper.join(" "));
};
capitalizeName2("juanita reina");

//Strings also have methods: .padStart(), padEnd(20, '*')
console.log("----- String methods: .padStart(), padEnd(20, '*') -----");

/*__   _____ ___    _ ___ _ _  
  \ \ / /_ _|   \  / |_  ) | | 
   \ V / | || |) | | |/ /|_  _|
    \_/ |___|___/  |_/___| |_|
*/
// VIDEO 124
//CODING CHALLENGE 4
console.log("-------------------- VID 124 --------------------");

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

let convert = function (text) {
  let textSeparado = text.split("\n");
  textSeparado = textSeparado;
  console.log(textSeparado);
  for (let x of textSeparado) {
    let separado2 = x.toLowerCase().split;
    console.log(separado2);
  }
};

/* document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  let textSeparado = text.split("\n");

  for (let x of textSeparado) {
    let [datum1, datum2] = x.toLowerCase().split("_");
    datum2 = datum2.replace(datum2[0], datum2[0].toUpperCase());
    let newArray124 = [datum1, datum2];
    console.log(newArray124.join("").trim());
  }
}); */

/*__   _____ ___    _ ___ ___ 
  \ \ / /_ _|   \  / |_  ) __|
   \ V / | || |) | | |/ /|__ \
    \_/ |___|___/  |_/___|___/
*/
// VIDEO 125
//CODING CHALLENGE 4
console.log("-------------------- VID 125 --------------------");
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

let flightsSeparados = flights.split("+");
console.log(flightsSeparados);

for (let x of flightsSeparados) {
  let [proceso, origen, destino, hora] = x.replace("_", "").split(";");
  let printedMsg = `${proceso.replace("_", " ")} from ${origen.toUpperCase().slice(0, 3)} to ${destino.toUpperCase().slice(0, 3)} (${hora.replace(":", "h")})`;
  console.log(printedMsg.padStart(43));
}

/*___ ___ ___ _____ ___ ___  _  _   _  __  
 / __| __/ __|_   _|_ _/ _ \| \| | / |/  \ 
 \__ \ _| (__  | |  | | (_) | .` | | | () |
 |___/___\___| |_| |___\___/|_|\_| |_|\__/ 
*/
//----- A CLOSER LOOK TO FUNCTIONS
console.log("------------------------- SECTION 10 -------------------------");

/*__   _____ ___    _ ___  __ 
  \ \ / /_ _|   \  / |_  )/ / 
   \ V / | || |) | | |/ // _ \
    \_/ |___|___/  |_/___\___/
*/
// VIDEO 126
console.log("-------------------- VID 126 --------------------");
//

/*__   _____ ___    _ ___ ___ 
  \ \ / /_ _|   \  / |_  ) _ \
   \ V / | || |) | | |/ /\_, /
    \_/ |___|___/  |_/___|/_/
*/
/******************************
 *  129.- DEFAULT PARAMETERS  *
******************************/
console.log('129.- DEFAULT VALUES PARAMETERS');
// when we create a function, the parameters can have a default value in case we do not provide one when calling the function

let reservarVuelos = function(flightNum = 0, numPassengers = 1, price = 199){
    return `You have a booking for flight number ${flightNum}, for ${numPassengers} passengers and the price is ${price}`;
}

console.log(reservarVuelos());
console.log(reservarVuelos('kg112', undefined, 399));
console.log(reservarVuelos('kg112', 2, 399));



//how passing arguments works: value vs reference
//JavaScript does not have pass by reference by which the value that you pass can be changed outside the function,
//but this does not happen in JS.
// TEORÍA PRINCIPALMENTE SOBRE LOS VALORES QUE SE PASAN A LAS FUNCIONES.
// Si le pasas a una función un valor de una variable, esta no se cambiará en la variable original.
// Si le pasas a una función como valor un objeto, lo que cambies dentro de la función cambiará en el objeto original.

let variable129 = 123;
let objeto129 = {
  numero: 123,
};

let funcion129 = function (valor1, valor2) {
  valor1 = 321;
  valor2.numero = 321;
};

console.log(variable129); // → el valor de la variable original no cambia.
console.log(objeto129.numero); // → en cambio, los objetos sí que cambian si los alteramos dentro de una función a la cual le hemos pasado el objeto como parámetro.

funcion129(variable129, objeto129);

console.log("después de ejecutar la función");
console.log(variable129);
console.log(objeto129.numero);

console.log('********************************');
/*    _    _   _ _____ 
 __ _(_)__| | / |__ / |
 \ V / / _` | | ||_ \ |
  \_/|_\__,_| |_|___/_|                       
*/
//VID 131
console.log('131.-  FIRST-CLASS AND HIGHER-ORDER FUNCTIONS');
//FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
/* First-Class functions means that functions are simply values and as such they can be stored in variables or
passed into functions as values. They can also be returned from functions. This is just a concept. This doesn exist in practice.
It's something a programming language has or not.

we call Higher-Order functions to funtions that receive functions as arguments and or return functions. This is applicable in practice if a language
accepts FIRST-CLASS functions (functions as arguments)*/

/* CALLBACK FUNCTIONS: we give this name to functions that are passed into a function as an argument or parameter. */


console.log('********************************');
/*    _    _   _ _______ 
 __ _(_)__| | / |__ /_  )
 \ V / / _` | | ||_ \/ / 
  \_/|_\__,_| |_|___/___|
*/
//VID 132
console.log("132.-  FUNCTIONS ACCEPTING CALLBACK FUNCTIONS");
//FUNCTIONS ACCEPTING CALL BACK FUNCTIONS
/* CALLBACK FUNCTIONS are functions that JavaScript itself calls later while the code is running.
   CALLBACK FUNCTIONS are considered to be a very important feature of JavaScript. Learn the topic for good.
   They allow us to create levels of abstraction in our code. This is one of the most important things in JavaScript. */

   // FUNCIONES QUE TRANSFORMAN TEXTO
const oneWord = function (str) {
  return str.replaceAll(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  let firstLetter = str.slice(0, 1).toUpperCase();
  let restLetters = str.toLowerCase().slice(1);
  let result = `${firstLetter}${restLetters}`;
  return result;
};

const upperFirstWord2 = function(str){
  const [primeraLetra, ...resto] = str.split(' ');
  return [primeraLetra.toLocaleUpperCase(), ...resto].join(' ');
}

// Ejemplo de HIGH-ORDER function (función que recibe función como parámetro).
const transformer = function(str, fn){
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
  console.log('****');
  
}

transformer('JavaScript is great!', oneWord);
transformer("motomami", upperFirstWord);
transformer('JavaScript is great!', upperFirstWord2);

let nombres131 = ["John", "Jose", "Anna"];

console.log('********************************');
/*    _    _   _ ________
 __ _(_)__| | / |__ /__ /
 \ V / / _` | | ||_ \|_ \
  \_/|_\__,_| |_|___/___/                         
*/
//VID 133
console.log("133.-  FUNCTIONS RETURNING FUNCTIONS");
//FUNCTIONS RETURNING FUNCTIONS
/* In this lecture we will deal with the opposite of the previous one. Functions that return functions. */
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

let greetHey = greet("Hey");
greetHey("Jose");

//We can rewrite the function greet with arrow functions
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

let greetHey2 = greet2("Hello!");
greetHey2("Jose");

console.log('********************************');
/*    _    _   _ _____ _  
 __ _(_)__| | / |__ / | | 
 \ V / / _` | | ||_ \_  _|
  \_/|_\__,_| |_|___/ |_| 
*/
//VID 134
console.log("134.- THE CALL AND APPLY METHODS");
//THE .CALL(), .APPLY() and .BIND() METHODS
/* Con .call() y .apply() podemos sacar un método fuera de un objeto y aplicarlo a varios objetos a la vez sin repetir el código
   dentro de cada uno de los objetos.
   Esto lo conseguimos con el primer valor que ponemos en los paréntesis al llamar al método .call(iberia, nombre, vuelo)
   o al método .apply(luftansa, [array con datos]). Mediante .call() y .apply() reruteamos el this para que no apunte a window, 
   sino al objeto que indicamos. */

//OBJETOS DE COMPAÑÍAS AÉREAS
let luftansa = {
  nombre: "Luftansa",
  codigo: "LH",
  bookings: [],
};

let iberia = {
  nombre: "Iberia",
  codigo: "IB",
  bookings: [],
};

//MÉTODOS EXTERNOS PARA OBJETOS
let book = function (passengerName, vuelo) {
  console.log(`${passengerName} ha comprado un billete en el vuelo de ${this.nombre} con código ${this.codigo + vuelo}`);
  this.bookings.push({ pasajero: passengerName, vuelo: this.codigo + vuelo });
};

//book("Paco", 441);

book.call(luftansa, "Jose", 567);

book.call(iberia, "Alberto", 227);

let order = ["Carlos", 344];
book.apply(iberia, order);

order = ["Manolito", "445"];
book.call(iberia, ...order);

console.log(luftansa);
console.log(iberia);

console.log('********************************');
/*    _    _   _ _______ 
 __ _(_)__| | / |__ / __|
 \ V / / _` | | ||_ \__ \
  \_/|_\__,_| |_|___/___/
*/
//VID 135
console.log("135.-  THE .BIND() METHOD");
//THE BIND METHOD
/* Con el método .bind() la cosa cambia, ya que no llama a la función, sino que devuelve una nueva función que queda atada
   al objeto que le indiquemos .bind(iberia). Esto podemos guardarlo en una variable y usarlo, sabiendo que 'this' apunta siempre a iberia */

let bookIberia = book.bind(iberia);
let bookLuftansa = book.bind(luftansa);
bookIberia("Mark", 566);
bookLuftansa("Jaime", 443);
console.log(iberia.bookings);
console.log(luftansa.bookings);

// .bind() can also hardcode some of the values passed as parameters
let bookIberia23 = book.bind(iberia, 'Jezú', 23);
bookIberia23();
console.log(iberia.bookings);



/*The .bind() method is also commonly used with event handlers. This is due to the fact that when we give it the callback function,
this will point to the object selected by the event and not to the object containing the method. */

luftansa.planes = 300;
luftansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document.querySelector(".buy").addEventListener("click", luftansa.buyPlane.bind(luftansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // → 220
// caso especial de las taxes en españa al 20%, creamos una función solo para este porcentaje por lo común que es.
const addVAT = addTax.bind(null, 0.2)
console.log(addVAT(100)); // → 120

// miro por mi cuenta como hacer esto sin .bind() ni leches, ya que veo tonto usarlo cuando no se está linkeando una función a cierto objeto por necesidad.
let addVat2 = function(rate = 0.20, value){
  return value + value * rate;
}
console.log(addVat2(undefined, 1000));


console.log("Práctica dentro del video 135");

//función que devolverá una función
let tax135 = (rate) => (value) => value + value * rate;

//Captura de la función que devolverá una función agregada a una variable que aporta el 'rate' fijo como valor entre paréntesis.
//Solo le damos un parámetro a la función externa (rate) y el otro parámetro a la función interna (value).
let tax135b = tax135(0.21);
//La llamada anterior devuelve (value) => value + value * 0.21;

//Llamada de la función externa que devolverá la función interna a la que le daremos el valor de 'value' indicado en los paréntesis.
console.log(tax135b(100));

console.log('********************************');
/*    _    _   _ ____  __ 
 __ _(_)__| | / |__ / / / 
 \ V / / _` | | ||_ \/ _ \
  \_/|_\__,_| |_|___/\___/
*/
//VID 136
console.log("136.-  CODING CHALLENGE #1");
//CODING CHALLENGE 1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  /* 1.- Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
          1.1.- Display a prompt window for the user to iinput the number of the selected option. The prompt should look like this:
                What is your favourite programming language?
                0: JavaScript
                1: Python
                2: Rust
                3: C++
                (Write option number)

          1.2.- Based on the input number, update the answers array. for example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
                Make sure to check if the input is an number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)*/
  registerNewAnswer() {
    let promptData = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`)); // sacamos el prompt para que el usuario responda.
    if (typeof promptData === "number" && promptData < this.options.length && promptData >= 0) { // comprobamos que el número introducido está entre 0 y 3
      this.answers[promptData]++; // incrementamos el valor del array de respuestas
      this.displayResults(this.answers); // 4.- Run the 'displayResults' method at the end of each 'registerNewAnswer' method call
    }
  },
   
  /* 3.- Create a method 'displayResults' which displayus the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array,
          simply display the results array as it is, using console.log(). This should be the default option. If type is 'string' display a string like "Poll results are 13, 2, 4, 1". */
  displayResults(type) {
    if (typeof type === "string") {
      console.log(`Poll results are ${type}`);
    } else {
      console.log(type);
    }
  },
};
poll.displayResults("5, 2, 3");
poll.displayResults([5, 2, 3]);
poll.displayResults([1, 5, 3, 9, 6, 1]);
// 2.- Call the method 'registerNewAnswer' whenever the user clicks the 'Answer poll' button.
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll)); // al añadir la función usámos el método .bind() para que 'this' apunte al objeto 'poll' y no al botón.

console.log('********************************');
/*    _    _   _ ________ 
 __ _(_)__| | / |__ /__  |
 \ V / / _` | | ||_ \ / / 
  \_/|_\__,_| |_|___//_/  
*/
//VID 137
console.log("137.-  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)");
//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
/* Sometimes we need functions that will be used once and then deleted. These are IIFE */
(function () {
  console.log("This will never run again");
})();

//We can also create them with arrow functions
(() => console.log("This will never run again either."))();

{
  const opt1 = 1;
  let opt2 = 2;
  var opt3 = 3;
}
console.log(opt3);




console.log('********************************');
/*    _    _   _ ____ ___ 
 __ _(_)__| | / |__ /( _ )
 \ V / / _` | | ||_ \/ _ \
  \_/|_\__,_| |_|___/\___/
*/
//VID 138
console.log("138.-  CLOSURES");
//CLOSURES
/* Closures makes a function remember all the variables and values that existed at the function's birthplace.
   Any function always has acces to the variables in the execution context in which it was created.
   
   DEFINITION 1: A closure is the closed-over variable environment of the execution context 
   in which a function was created, even after that execution context is gone.
   
   DEFINITION 2: A closure gives a function access to all the variables of its parent function,
   even after that parent function has returned. The function keeps a reference to its outer scope,
   which preserves the scope chain throughout time.
   
   DEFINITION 3: A closure makes sure that a function doesn't lose connection 
   to variables that existed at the function's birth place.*/

const secureBooking = function(){
  let passengerCount = 0;
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker();
booker();
booker();



console.log('********************************');
/*    _    _   _ _______ 
 __ _(_)__| | / |__ / _ \
 \ V / / _` | | ||_ \_, /
  \_/|_\__,_| |_|___//_/ 
*/
//VID 139
console.log("139.-  MORE CLOSURE EXAMPLES");
//MORE CLOSURE EXAMPLES
/* Closures even have priority over the scope chain. */
let fe;
const ge = function(){
  const aa = 23;
  fe = function(){
    console.log(aa * 2);
  }
}

ge();
fe(); // → 46 (Esto pasa porque 'fe', que es una función, puede acceder a las variables que estaban dentro de la función 'ge', incluso cuando el contexto de ejecución de 'ge' ya no existe.)

// OTRO EJEMPLO en el que reasignamos el valor de 'fe' mediante una función 'h'.
const h = function(){
  const b = 777;
  fe = function(){
    console.log(b * 2);
    console.log(aa); /* podemos seguir accediendo a la variable 'aa' que solo se creó en la función 'ge' de más arriba. Esto gracias al CLOSURE. 
                        Pero una vez reasignemos el falor a 'fe' ya no podremos volver a acceder a la variable 'aa'.*/
    
  }
}
console.dir(fe);
h();
fe(); // → 1554
console.dir(fe);

console.log('********************************');
/*    _    _   _ _ _   __  
 __ _(_)__| | / | | | /  \ 
 \ V / / _` | | |_  _| () |
  \_/|_\__,_| |_| |_| \__/ 
*/
//VID 140
console.log("140.-  CODING CHALLENGE #2");
//CODING CHALLENGE 2

(function () {
  const header = document.querySelector("header");
  header.style.color = "red";
  let body = document.querySelector("body");
  body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
