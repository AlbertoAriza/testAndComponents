const persona01 = {
    id: 1,
    nombre: 'jose',
    apellido: 'ariza',
    age: 0,
    items: ['pc', 'laptop', 'monitores'],
    
    diNombre: function(param1){
        console.log();
        console.log(`mi nombre es ${this.nombre} ${param1}`);
    },
    diCosa: function(param1, param2){
        return param1 ?? param2;
    }
}

const persona02 = {
    nombre: 'alberto',
}

/*************************************
 *  VID 103.-  DESTRUCTURING ARRAYS  *
************************************/
console.log('VID 103.-  DESTRUCTURING ARRAYS');

const values = ['uno', 'dos', 'tres', [4, 5, 6]];
const values1 = ["a", "b", "c"];
const values2 = ["d", "e", "f"];

let [a, b, c] = values;
console.log(a, b, c); // → 'uno', 'dos', 'tres'

let variable01 = [...values1, ...values2]
console.log(variable01); //  → ['a', 'b', 'c', 'd', 'e', 'f']

let [variable02, variable03, ...variable04] = [...values1, ...values2]
console.log(variable02); // → a
console.log(variable03); // → b
console.log(variable04); // → ['c', 'd', 'e', 'f']

let f = 5;
let g = 6;
console.log(f, g); // → 5, 6

// usando destructuring para intercambiar valores de dos variables sin necesitar una tercera variable temporal.
[f, g] = [g, f];
console.log(f, g); // → 6, 5

// destructuring se puede usar para hacer copias independientes de un array.
let arr01 = [1, 2, 3, 4];
let arr02 = [...arr01];

console.log('*******************************');


/*************************************
 *  VID 105.-  DESTRUCTURING OBJECTS  *
************************************/
console.log('VID 105.-  DESTRUCTURING OBJECTS');
const objeto02 = {
    name: "jose",
    surname: "ariza"
}

let {name: nombre = "John", surname: apellido = "nieve", id: dni = "dni no facilitado"} = objeto02;
console.log(nombre, apellido, dni);

console.log('*******************************');

/************************************
 *  VID 106.-  THE SPREAD OPERATOR  *
***********************************/
console.log('VID 106.-  THE SPREAD OPERATOR (...)');

console.log('*******************************');

/********************************
 *  VID 108.-  SHORT CIRCUITING  *
*******************************/
console.log('VID 108.-  short Circuiting (|| y &&');

console.log('--OR--');
//The or operator returns the first truthy value or the last
console.log('shortcirvuiting');

let var001 = false;
let var002 = "derecha";
console.log(var001 || var002);

console.log('--AND--');
//the and operator returns the first falsy value or the last one.
persona01.diNombres && persona01.diNombre('yeah!');

console.log('end of shortcircuiting');
console.log('*******************************');


/************************************************
 *  VID 109.-  THE NULLISH COALESCING OPERATOR  *
************************************************/
console.log('VID 109.-  The Nullish Coalescing Opetator (??)');
//Can be used to return a second value if the first one is "nullish", this is, "null" or "undefined", but not "0" or "".
console.log(persona01.age ?? 18); // → 0
console.log(persona01.age || 18); // → 18
console.log(persona01.age ?? 18); // → 0

console.log(persona01.diCosa(null, "segundo elemento")); // → segundo elemento


console.log('*******************************');

/*********************************************
 *  VID 110.-  LOGICAL ASSIGNMENT OPERATORS  *
*********************************************/
console.log('VID 110.-  Logical Assignment Operators');
//modern assignment operators included in ES2021 (||=, &&=, ??=)
const restaurant1 ={
    name: 'capri',
    numGuests: 20
}
const restaurant2 ={
    name: 'la piazza',
    owner: 'John',
    numGuests: 0
}

console.log('-- &&= --');
// &&= si el valor es falsy lo deja como está. Si es truthy asigna el de la derecha.
restaurant1.owner &&= "<ANONIMO>"
restaurant2.owner &&= "<ANONIMO>"
console.log(restaurant1); // → no cambia nada al no tener owner
console.log(restaurant2); // → cambia el nombre del owner actual a <ANONIMO>

console.log('-- ??= --');
// ??= si el valor no es nullish lo deja como está. Si es nullish asigna el de la derecha.
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;
console.log(restaurant1.numGuests); // → 20
console.log(restaurant2.numGuests); // → 0

console.log('-- ??= --');
// ||= si el valor es truthy lo deja como está. Si es falsy asigna el de la derecha.
// Con este, si algún restaurante tiene un valor de 0, al ser falsy lo cambiaría también.
restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;
console.log(restaurant1.numGuests); // → 20
console.log(restaurant2.numGuests); // → 10


console.log('*******************************');


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

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

console.log('*************************');
console.log('*  coding challenge 01  *');
console.log('*************************');
console.log('ACTIVIDAD 01');

/**
 * 1. Create one player array for each team (variables 'players1' and 'players2')
*/
let [players1, players2] = game.players;
console.log(players1);
console.log(players2);


console.log('ACTIVIDAD 02');
/*
 *2. The first player in any player array is the goalkeeper and the others are field
 *players. For Bayern Munich (team 1) create one variable ('gk') with the
 *goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
 *field players
*/
let [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);


console.log('ACTIVIDAD 03');
/*
 *3. Create an array 'allPlayers' containing all players of both teams (22
 *players)
*/
let allPlayers = [...players1, ...players2];
console.log(allPlayers.length);


console.log('ACTIVIDAD 04');
/*
 *4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
 *new array ('players1Final') containing all the original team1 players plus
 *'Thiago', 'Coutinho' and 'Perisic'
*/
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);


console.log('ACTIVIDAD 05');
/*
 *5. Based on the game.odds object, create one variable for each odd (called
 *'team1', 'draw' and 'team2')
*/
let {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw, team2);


console.log('ACTIVIDAD 06');
/*
 *6. Write a function ('printGoals') that receives an arbitrary number of player
 *names (not an array) and prints each of them to the console, along with the
 *number of goals that were scored in total (number of player names passed in)
 */
function printGoals(...numberOfPlayers){
    console.log(numberOfPlayers);
    
    let golesMarcados = 0
    for(i = 0; i < numberOfPlayers.length; i++){
        console.log(numberOfPlayers[i]);
        for(j = 0; j < game.scored.length; j++){
            if(numberOfPlayers[i] == game.scored[j]){
                golesMarcados++;
            }
        }
        console.log(`${golesMarcados} goles marcados por este jugador`);
        golesMarcados = 0
    }
}

/*
*Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
*Then, call the function again with players from game.scored
*/
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');


console.log('ACTIVIDAD 07');
/*
*7. The team with the lower odd is more likely to win. Print to the console which
*team is more likely to win, without using an if/else statement or the ternary
*operator.
*/

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

console.log('*********************************************************');


console.log('********************');
console.log('*  TIPOS DE LOOPS  *');
console.log('********************');

let variable001 = 0;
let arr001 = [1, 2, 3, 4, 5, 6, 'last item'];
let objeto001 = {
    name: 'academia',
    subject: 'english',
    openingDate: 2013,
    openingHours: {
        morning: 10,
        afternoon: 16
    }
}

console.log('for loop');
for(let i=0; i<arr001.length; i++){
    console.log(arr001[i]);   
}
console.log('********************************');

console.log('do-while loop');
variable001 = 0;
do{
    console.log(arr001[variable001++]);
    
}while(variable001 < arr001.length);
console.log('********************************');

console.log('while');
variable001 = 0;
while(variable001 < arr001.length){
    console.log(arr001[variable001++]);
}

console.log('********************************');

console.log('for... in');
for (let i in objeto001) {
    console.log(i, objeto001[i]);
}

console.log('for... in 2');
for (let i in objeto001.openingHours) {
    console.log(i, objeto001.openingHours[i]);
}
console.log('********************************');

console.log('for... of');
for (const i of arr001) {
    console.log(i);
}

for (const [index, value] of arr001.entries()) {
    console.log(index + 1 + ': ' + value);
}

console.log('********************************');

console.log('foreach');
arr001.forEach((element)=>{
    console.log(element);
})
console.log('********************************');

/*****************************************
 *  VID 113.-  ENHANCED OBJECT LITERALS  *
*****************************************/
console.log('VID 113.-  ENHANCED OBJECT LITERALS');
let openingHours = {
    morning: 10,
    afternoon: 16
}

let objeto002 = {
    name: 'academia',
    subject: 'English',
    openingDate: 2013,
    openingHours,
    [`day${2-1}`]: 'Monday' // se puede hacer destructuring de los nombres de las propiedades del objeto.
}
console.log(objeto002.day1);

console.log(objeto002);
console.log('********************************');

/***************************************
 *  VID 114.-  OPTIONAL CHAINING (?.)  *
***************************************/
console.log('VID 114.-  OPTIONAL CHAINING (?.)');

let myRestaurant01 = {
    openingHours:{
        mon: {
            open: 20,
            close: 24
        },
        tue: {
            open: 19,
            close: 24
        },
        fri: {
            open: 19,
            close: 24
        }
    },
    openDay__1: 'Monday',
}
console.log(myRestaurant01.openingHours?.wed?.open);

let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    console.log(`on ${day} the restaurant opens at ${myRestaurant01.openingHours[day]?.open ?? 'closed'}`);
    
}

console.log('********************************');

/*****************************************************************
 *  VID 115.-  LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES  *
*****************************************************************/

console.log('VID 115.-  LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES');

let persona03 = {
    name: 'jose',
    surname: 'ariza',
    email: 'hola@londoneyepad.com',
    edad(){
        let ahora = Date.now();    
    },
    workDays: {
        mon: {
            start: 7,
            finish: 22
        },
        tue: {
            start: 7,
            finish: 22
        },
        wed: {
            start: 7,
            finish: 22
        },
        thu: {
            start: 7,
            finish: 22
        },
        fri: {
            start: 7,
            finish: 14
        }
    }
}

// Object.values()
console.log('Object.values()');
for (const day of Object.values(persona03.workDays)) {
    console.log(day);
}

// Object.keys()
console.log('Object.keys()');
for (const day of Object.keys(persona03.workDays)) {
    console.log(day);
}

// Object.entries()
console.log('Object.entries()');
for (const day of Object.entries(persona03.workDays)) {
    console.log(day);
    console.log(day[0]);
    console.log(day[1]);
}

console.log('for... in');
for (let i in objeto001) {
    console.log(i, objeto001[i]);
}

console.log('for... in 2');
for (let i in objeto001.openingHours) {
    console.log(i, objeto001.openingHours[i]);
}

console.log('********************************');

/***************
 *  117.- SETS  *
***************/
console.log('17.- SETS');
let ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);
// ver el número de elementos del SET
console.log(ordersSet.size);
// ver si existe un elemento en el SET
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('pizza'));
// añadir un nuevo elemento al SET
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
// borrar elemento del SET
ordersSet.delete('Pizza');
console.log(ordersSet);
//delete all the elements of the SET
//ordersSet.clear();


// looping over a SET
for (const iterator of ordersSet) {
    console.log(iterator);
}

// turn an array into a set
let staff = ['waiter', 'chef', 'manager', 'waiter', 'cook', 'cook']
let staffSet = new Set(staff);
console.log(staffSet);

// removing all the duplicated elements from an array
staffUnique = [...new Set(staff)];
console.log(staffUnique);

// contando los elementos diferentes de un array gracias al SET.
console.log((new Set(staff)).size);






console.log('********************************');

/*************************************
 *  118-119.- MAPS AND MAPS ITERATION  *
*************************************/
console.log('MAPS AND MAPS ITERATION');
let question = new Map([
    ['question', 'what is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct🍕'],
    [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
const persona03Map = new Map(Object.entries(persona03));
console.log(persona03Map);


//Map iteration. Maps are iterable objects.
console.log(question.get('question'));

for (const [key, value] of question) {
    if(typeof key === 'number'){
        console.log(`answer ${key}: ${value}`);
    }
}

let answer;
//answer = Number(prompt('Insert your answer'));
console.log(`${answer === question.get('correct') ? question.get(true) : question.get(false)}`);
console.log(question.get((question.get('correct') === answer)));

// Convert map to an array
let newArr = [...question];
console.log(newArr);
console.log(typeof `${true}`);

console.log('********************************');

/******************
 *  CHALLENGE 03  *
******************/
console.log('challenge 3');

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
    ]);

// 1.-  Create an array 'events' of the different game events that happened (no duplicates)
let events = [...new Set(gameEvents.values())];
console.log(events);

// 2.-  After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3.-  Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(90 / gameEvents.size);


// 4.  Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: 
//     [FIRST HALF] 17: ⚽ GOAL
for (const [key, value] of gameEvents.entries()) {
    console.log((key <= 45 ? '[FIRST HALF] ' : '[SECOND HALF] ') + key + ' ' + value);
}


// como extraer el último valor de un array para usarlo.
let testArray = [1, 3, 4, 6, 8];
let testVariable = testArray.pop();
console.log(testVariable);


console.log('********************************');
/************************************
 *  122 - 124 WORKING WITH STRINGS  *
************************************/
console.log('122 - 124.- WORKING WITH STRINGS');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // → 'A'
console.log(plane[1]); // → '3'
console.log(plane[2]); // → '2'

// método .LENGTH()
console.log(airline.length); // → 16
console.log('kkd'.length); // → 3

// método .INDEXOF() and .LASTINDEXOF()
console.log(airline.indexOf('r')); // → 6
console.log(airline.lastIndexOf('r')); // → 10
console.log(airline.indexOf('Portugal')); // → 8

// método .SLICE()
console.log(airline.slice(4)); // → 'Air Portugal' (corta todo lo que esté antes del elemento en la posición con index = 4. Empieza a imprimir en el index indicado.)
console.log(airline.slice(4, 7)); // → 'Air' (imprime desde el char con index 4 y excluya desde el char en index 7)
console.log(airline.slice(0, airline.indexOf(' '))); // → imprime desde el primer char hasta el index de espacio, el cual ya excluye.
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // → Empieza a imprimir desde la primera letra que se encuentre después del último espacio.

// podemos también indicar un valor negativo a slice para imprimir solo lo que hay a partir de ese index contado desde el final hacia atrás
console.log(airline.slice(-2)); // → 'al'
console.log(airline.slice(-3)); // → 'gal'
console.log(airline.slice(-4)); // → 'ugal'
console.log(airline.slice(-5)); // → 'tugal'
console.log(airline.slice(-8)); // → 'Portugal'
console.log(airline.slice(1, -1)); // → 'Ap Air Portuga'

const checkMiddleSeat = function (seat){
    // B and E are middle seats
    let lastChar = seat.slice(-1);
    if(lastChar === 'B' || lastChar == 'E') console.log('You got the middle seat 😒');
    else console.log('You got lucky 😎');
}

checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('3E');

// métodos .TOLOWERCASE() and .TOUPPERCASE()
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

let regularizeName = function(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(regularizeName('CARLOS'));
console.log(regularizeName('mArÍA'));

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io ';

let compareEmails = function(email, loginEmail){
    let normalizedEmail = loginEmail.toLowerCase().trim();
    console.log(normalizedEmail);
    console.log(email === normalizedEmail);
    
}

compareEmails(email, loginEmail)

// replacing part of a string with .REPLACE()
let priceGB = '288,97€';
let priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

let announcement = 'All passengers come to boarding door 23. Boarding door 23!!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

console.log(announcement.replaceAll('door', 'gate'));

// Boolean methods .INCLUDES(), .STARTSWITH() and .ENDSWITH()
console.log(plane.includes('A'));

console.log(plane.startsWith('Air'));
console.log(plane.startsWith('A3'));
if(plane.startsWith('A')) console.log('Yeah');
else console.log('Nah');

const checkForWeapons = function(items){
    let baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')) console.log('You\'re NOT allowed in the plane');
    else console.log('Welcome aboard!🍸');
    
}

checkForWeapons('a knife');
checkForWeapons('A Gun');
checkForWeapons('a legal and harmless pillow');


// .SPLIT() y .JOIN()
let string02 = "a+very+nice+string";
console.log(string02.split('+'));
const [firstName, lastName] = "Jose Ariza".split(' ')
console.log(firstName);
console.log(lastName);

let arrayName = ['Mr.', firstName, lastName].join(' ');
console.log(arrayName);


let capitalizeName = function(name){
    const splitName = name.split(' ');
    const nameUpper = [];
    for (const n of splitName) {
        nameUpper.push(n.replace(n[0], n[0].toUpperCase())); //  → metemos en el array nuevo el string al que le reemplazamos la primera letra por mayúscula.
    }
    return nameUpper.join(' ');
}

console.log(capitalizeName('jose alberto ariza sanchez'));


// padding with .PADSTART() y  .PADEND
console.log('Hello'.padStart(10, '+'));
console.log('Hello'.padStart(10, '+').padEnd(15, '+'));

let concealCardNumber = function(data){
    let numero = data + ''
    return numero.slice(-4).padStart(numero.length, '*')
}

console.log(concealCardNumber(123456789));

// repeat with .REPEAT()
console.log('Bad weather... All departures delayed\n'.repeat(10));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);





console.log('********************************');

/***************************
 *  126.-  EXTRA PRACTICE  *
***************************/
console.log('126.-  EXTRA PRACTICE');
const flights = 
`_Delayed_Departure;fao93766109;txl2133758440;11:25
+_Arrival;bru0943384722;fao93766109;11:45
+_Delayed_Arrival;hel7439299980;fao93766109;12:05
+_Departure;fao93766109;lis2323639855;12:30`;

const flightDepartures = function(){
    let flightDeparturesArray = flights.split('\n+');
    
    for (const cadaUno of flightDeparturesArray) {
        let [type, code1, code2, time] = cadaUno.split(';')
        console.log(`// ${type.includes('Delayed') ? '🔴' : '  '} ${type.replace('_', '').replace('_', ' ').padStart(17)} from ${code1.slice(0, 3).toUpperCase()} to ${code2.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`);
        
    }
}
flightDepartures();

console.log('********************************');

/************************************
 *  WHICH ITEMS ARE MADE OF COTTON  *
***********************************/
//práctica para buscar
const items = [
    {
        id: 1,
        name: 'T-shirt',
        description: 'Comfortable cotton t-shirt',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Red', 'Blue', 'Green'],
        price: 19.99,
        customer: [],
    },
    {
        id: 1,
        name: 'Jeans',
        description: 'Stylish denim jeans',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Blue', 'Gray'],
        price: 39.99,
        customer: [
            {
                id: 203,
                name: 'John',
                mail: 'john@domain.es',
                purchases: [
                    {
                        itemId: 2,
                        quantity: 1,
                        size: 'L',
                        color: 'Black',
                    },
                ],
           },
        ],
    },
]

function findCottonItems(itemList){
    console.log(itemList.filter((itemList) => itemList.description.toLowerCase().includes('cotton')));
};
findCottonItems(items);
console.log('********************************');

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



console.log('********************************');



/***********
 *  DATES  *
***********/
console.log('dates');
let date1 = new Date('1978-05-07').getTime();
let dateNow = new Date().getTime();
console.log(date1);
console.log(dateNow);
let date3 = Math.floor((dateNow - date1) / (1000 * 60 * 60 * 24 * 365.25));
console.log(date3);



























