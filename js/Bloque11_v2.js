'use strict';
/*___ _    ___   ___  _   _ ___   _ _        __      _____  ___ _  _____ _  _  ___  __      _____ _____ _  _     _   ___ ___    ___   _____ 
 | _ ) |  / _ \ / _ \| | | | __| / / |  ___  \ \    / / _ \| _ \ |/ /_ _| \| |/ __| \ \    / /_ _|_   _| || |   /_\ | _ \ _ \  /_\ \ / / __|
 | _ \ |_| (_) | (_) | |_| | _|  | | | |___|  \ \/\/ / (_) |   / ' < | || .` | (_ |  \ \/\/ / | |  | | | __ |  / _ \|   /   / / _ \ V /\__ \
 |___/____\___/ \__\_\\___/|___| |_|_|         \_/\_/ \___/|_|_\_|\_\___|_|\_|\___|   \_/\_/ |___| |_| |_||_| /_/ \_\_|_\_|_\/_/ \_\_| |___/
*/

/*    _    _   _ _ _ ____
 __ _(_)__| | / | | |__ /
 \ V / / _` | | |_  _|_ \
  \_/|_\__,_| |_| |_|___/
 */
// 143.-  SIMPLE ARRAY METHODS
console.log('143.-  SIMPLE ARRAY METHODS');

let arrVid143 = ['a', 'b', 'c', 'd', 'e'];
let arrVid143b = ['f', 'g', 'h']
let arrVid143c = [1, 2, 3, 4, 5]

// .PUSH() → This method mutates the original array adding a new element at the end. It returns the length of the array with the new element
console.log('.push()');
console.log(arrVid143.push('z')); // → 6
console.log(arrVid143); // → ['a', 'b', 'c', 'd', 'e', 'z']
// comprobando que siempre muta el array original
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
arrVid143b = arrVid143.push('z'); // → 6
console.log(arrVid143); // → ['a', 'b', 'c', 'd', 'e', 'z']
console.log(arrVid143b); // → 6

// .UNSHIFT() → This method mutates de original array adding a new element at the beginning
console.log('.unshift()');
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
console.log(arrVid143.unshift('z')); // → 6
console.log(arrVid143); // → ['z', 'a', 'b', 'c', 'd', 'e']

// .POP() → This method mutates the original array removing the last element of the array. It returns the removed element.
console.log('.pop()');
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
arrVid143c = [1, 2, 3, 4, 5]
console.log(arrVid143.pop()); // → 'e'
console.log(arrVid143); // → ['a', 'b', 'c', 'd']
console.log(arrVid143c.pop()); // → 5
console.log(arrVid143c); // → [1, 2, 3, 4]

// .SHIFT() → This method mutates the original array removing the first element of the array. It returns the removed element.
console.log('.shift()');
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
arrVid143c = [1, 2, 3, 4, 5]
console.log(arrVid143.shift()); // → 'a'
console.log(arrVid143c.shift()); // → 1
console.log(arrVid143); // → ['b', 'c', 'd', 'e']
console.log(arrVid143c); // → [2, 3, 4, 5]

// .INDEXOF() → This method returns the index of the given value of the array.
console.log('.indexOf()');
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
arrVid143c = [1, 2, 3, 4, 5]
console.log(arrVid143.indexOf('b')); // → 1
console.log(arrVid143c.indexOf(5)); // → 4

// .INCLUDES() → This method returns true or false depending on the existence of the given value in the array.
console.log('.includes()');
console.log(arrVid143.includes('c')); // → true
console.log(arrVid143c.includes('5')); // → false
console.log(arrVid143c.includes(5)); // → true

// .SLICE() → This method returns a new array. Este nuevo array contiene parte del original al que se le ha cortado una parte según los valores.
console.log('.slice()');
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
console.log(arrVid143.slice(2)); // → ['c', 'd', 'e'] (Añade valores desde el index 2 hasta el final al nuevo array)
console.log(arrVid143.slice(2, 4)); // → ['c', 'd'] (Añade valores desde el index 2 hasta el 3 al nuevo array)
console.log(arrVid143.slice(-2)); // → ['d', 'e'] (Añade al nuevo array solo los dos últimos valores)
console.log(arrVid143.slice(1, -2)); // → ['b', 'c'] (Añade al nuevo array los valores desde el index uno hasta el antepenúltimo (quita los dos últimos valores))
// también se puede usar para crear una copia de un array cuando tengamos que usarla en una cadena de métodos.
let arrVid143V2 = arrVid143.slice().join().replaceAll(',', '');

// .SPLICE() → Similar to .SLICE() pero no devuelve nada, altera el array original. Tener cuidado al usarlo.
console.log('.splice()');
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
console.log(arrVid143.splice(2)); // → ['c', 'd', 'e'] (Si solo tenemos un número, este indica el indice del primer elemento que mantenemos en la cadena)
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
console.log(arrVid143.splice(2, 2)); // → ['c', 'd'] (El segundo número indica cuantos elementos mantenemos desde el indicado por el primer número)

// .REVERSE() → This method mutates the original array. It reverses and flips the order of the array.
console.log('.reverse()');
arrVid143 = ['a', 'b', 'c', 'd', 'e']; // → ['e', 'd', 'c', 'b', 'a']
console.log(arrVid143.reverse());
console.log([...'jose'].reverse().join(''));


// .CONCAT() → This method returns a new array which is the result or joining two different arrays.
console.log('.concat()');
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
arrVid143b = ['f', 'g', 'h']
console.log(arrVid143.concat(arrVid143b));
console.log([...arrVid143, ...arrVid143b]); // → Usando spread operator obtenemos el mismo resultado.

// más pruebas
console.log(arrVid143b.concat(arrVid143));
console.log(arrVid143.concat([...arrVid143b].reverse()));

// .JOIN() → This method returns a string which is the result of joining all the elements of the array.
console.log('.JOIN()');

console.log(arrVid143.join('-')); // → a-b-c-d-e
console.log(arrVid143);

console.log('*******************************************');

/*   _    _   _ _ _  _ _  
__ _(_)__| | / | | || | | 
\ V / / _` | | |_  _|_  _|
 \_/|_\__,_| |_| |_|  |_| 
*/
// 144.-  THE NEW .AT() METHOD
console.log('144.-  THE NEW .AT() METHOD');

/* .AT() → This method returns the value of a given index. It is useful
*   High Order Function: No
*   Returns: The value of the given index
*   Parameters: The index of an element of the array
*/

console.log('.at()');
arrVid143 = ['a', 'b', 'c', 'd', 'e'];
console.log(arrVid143.at(2)); // → 'c'
// Why is it so useful? Let's see how we can get the last element of an array
console.log(arrVid143[arrVid143.length - 1]); // → 'e'
console.log(arrVid143.slice(-1)[0]); // → 'e'
console.log(arrVid143.at(-1)); // → 'e'
console.log(arrVid143.at(arrVid143.length - 1)); // → 'e'

console.log('*******************************************');

/*    _    _   _ _ _  ___ 
 __ _(_)__| | / | | || __|
 \ V / / _` | | |_  _|__ \
  \_/|_\__,_| |_| |_||___/
*/
// 145.-  LOOPING ARRAYS: .FOREACH()
console.log('145.-  LOOPING ARRAYS: .FOREACH()');

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Let's start with a 'for-of' loop
console.log('for-of loop');

for (const movement of movements) {
    if(movement > 0)console.log(`You deposited ${Math.abs(movement)} Euros`);
    else console.log(`You withdrew ${Math.abs(movement)} Euros`);
}

// Let's use forEach method. This loop executes a function for each element of the array.
// This function receives three possible parameters: the value, the index and the whole array.
console.log('forEach loop');
movements.forEach(function(value, index, array){
    if(value > 0)console.log(`You deposited ${Math.abs(value)} Euros`);
    else console.log(`You withdrew ${Math.abs(value)} Euros`);
    console.log(`The index is ${index}, the value is ${value}`);
});
// continue and break doesn't work in the forEach loop.

console.log('*******************************************');

/*    _    _   _ _ _   __ 
 __ _(_)__| | / | | | / / 
 \ V / / _` | | |_  _/ _ \
  \_/|_\__,_| |_| |_|\___/
*/
// 146.-  .FOREACH() WITH MAPS AND SETS
console.log('147.-  .FOREACH() WITH MAPS AND SETS');

// with Maps
console.log('With maps');

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling'],
]);
currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`); // → USD: United States dollar (En cada vuelta imprime la 'key' y su 'valor')
});

// with Sets
console.log('With Sets');
const uniqueCurrencies = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'EUR'])
uniqueCurrencies.forEach(function(value, index, set){
    console.log(`${index}: ${value}`); // → USD: USD (en cada vuelta imprime dos veces el valor ya que los Sets no tienen índice ni key, solo contienen el valor.)
    
})

console.log('*******************************************');



/*    _    _   _ _ _ ____ 
 __ _(_)__| | / | | |__  |
 \ V / / _` | | |_  _|/ / 
  \_/|_\__,_| |_| |_|/_/  
*/
// 147.-  
console.log('147.-  JUST AN OVERVIEW OF THE BANKIST APP');


console.log('*******************************************');

/*    _    _   _ _ _  ___ 
 __ _(_)__| | / | | |( _ )
 \ V / / _` | | |_  _/ _ \
  \_/|_\__,_| |_| |_|\___/
*/
// 148.-  CREATING DOM ELEMENTS
// .INSERTADJACENTHTML()
// .INNERHTML()
console.log('148.-  CREATING DOM ELEMENTS');

const account1 = {
    owner: 'Jonas Schmetman',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
}
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
}
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
}
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
}

const displayMovements = function(movements){
    // .INNERHTML() → 
    //podemos usar innerHTML para borrar los elementos existentes antes de añadir los nuevos. Es algo común de hacer
    document.querySelector('#article--movements').innerHTML = '';
    movements.forEach(function(value, index, arr){
        console.log(`${index} ${value}`);
        const type = value > 0 ? 'deposit' : 'withdrawal';
        const htmlContent = `
            <div class="movement--row">
                <div class="movement--row--order">${index + 1}</div>
                <div class="movement--row--type--${type}">${type}</div>
                <div class="movement--row--date">1 day ago</div>
                <div class="movement--row--value">${value}</div>
            </div>
        `
        // .INSERTADJACENTHTML() → 
        // usamos el método .INSERTADJACENTHTML() para añadir nuevos elementos html en nuestro documento.
        // .insertAdjacentHTML(afterbegin/befor)
        document.querySelector('#article--movements').insertAdjacentHTML("afterbegin", htmlContent);
    });
}

displayMovements(account1.movements);

console.log('*******************************************');

/*    _    _   _ _ _  ___ 
 __ _(_)__| | / | | |/ _ \
 \ V / / _` | | |_  _\_, /
  \_/|_\__,_| |_| |_| /_/
*/
// 149.-  
console.log('149.-  CODING CHALLENGE');
/* Julia and Kate are doing a study on dogs. so each of them asked 5 dog owners about their dog's age, and stored
    the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
    A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
 */
/* Create a function 'checkDogs', which acepts 2 arrays of dog's ages (dogsJulia' and 'dogsKate'), and does the following things:
*/
const checkDogs = function(arr1, arr2){
    /* 1.-  Julia found out that the owners of the FIRST and the LAST TWO dos actually have cats, not dogs!
            So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
    */
    let juliaCopy = [...arr1].slice(1, -2);
    
    /* 2.-  Create an array with both Julia's (corrected) and Kate's data.*/
    let juliaAndKate = [...juliaCopy, ...arr2];
    
    /* 3.-  For each remaining dog, log to the console whethe it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy 
            ("Dog number 2 is still a puppy 🐶").*/
    juliaAndKate.forEach(function(value, index, arr){
        if(value >= 3)console.log(`Dog number ${index + 1} is an adult, and is ${value} years old.`);
        else console.log(`Dog number ${index+1} is still a puppy 🐶`);
    });
}
/* 4.-  Run the function for both test datasets*/
/*  test data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
test data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]*/
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


console.log('*******************************************');

/*    _    _   _ ___  __  
 __ _(_)__| | / | __|/  \ 
 \ V / / _` | | |__ \ () |
  \_/|_\__,_| |_|___/\__/
*/
// 150.-  DATA TRANSFORMATIONS: .MAP(), .FILTER(), .REDUCE()
console.log('150.-  DATA TRANSFORMATIONS: .MAP(), .FILTER(), .REDUCE()');
console.log('INTRODUCTION');



console.log('*******************************************');

/*    _    _   _ ___ _ 
 __ _(_)__| | / | __/ |
 \ V / / _` | | |__ \ |
  \_/|_\__,_| |_|___/_|
*/
// 151.-  
console.log('151.-  THE .MAP() METHOD');

// .MAP()
console.log('.MAP()');
/*  Returns: a new array.
    Parameters: function applied to each element of the original array. The function must return the value. We can use an 'ARROW' function.
    It loops over an existing array and applies a given operation to each element of the original array. All the new values are returned in a new array.
    It is different to .FOREACH method because this one returns an array and .FOREACH() only returns one value in each iteration.
    Es obligatorio que la función tenga un return.*/
let arr151 = [5, -10, 15, 20];
let euroToUsd = 1.1;
let arr151b = arr151.map(function(value){
    return value * euroToUsd;
});
console.log(arr151b);

let arr151c = arr151.map((value) => value * 2);
console.log(arr151c);

// The .MAP() method also has access to the value, index and the original array like the .FOREACH() method.
let arr151d = arr151.map(function(value, index, arr){
    return `${index}: you ${value > 0 ? 'deposited' : 'withdrew'} ${value} Euros`
});
arr151d.forEach(function(value){
    console.log(`${value}\n`);
});




console.log('*******************************************');

/*    _    _   _ ___ ___ 
 __ _(_)__| | / | __|_  )
 \ V / / _` | | |__ \/ / 
  \_/|_\__,_| |_|___/___|
*/
// 152.-  COMPUTING USERNAMES
console.log('152.-  COMPUTING USERNAMES');
/* Recibimos el nombre de una persona y queremos obtener el username, que será la primera letra de cada palabra del nombre */
let user = 'Steven Thomas Wiolliams';
let username = user.toLowerCase().split(' ').map((value) => value.slice(0, 1)).join('');
console.log(username);

console.log('Creando nombres de usuario para cada cliente');

let accounts = [account1, account2, account3, account4]

let createUsernames = function(accounts){
    accounts.forEach(function(value, index, arr){
        value.userName = value.owner.toLowerCase().split(' ').map((value) => value.slice(0, 1)).join('');
    })
    
}
createUsernames(accounts);
console.log(account1.userName);
console.log(account2.userName);
console.log(account3.userName);
console.log(account4.userName);


console.log('*******************************************');

/*    _    _   _ ___ ____
 __ _(_)__| | / | __|__ /
 \ V / / _` | | |__ \|_ \
  \_/|_\__,_| |_|___/___/
*/
// 153.-  
console.log('153.-  THE .FILTER() METHOD');
// .FILTER()
console.log('.FILTER()');
/*  Returns: a new array.
    Parameters: a function applied to each element of the original array to filter the values that we don’t want
    The returned new array contains just the elements that passed a specified test condition.*/

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
    
let deposits = movements.filter(function(value, index, arr){
    return value > 0; // → if the condition is true, the value will be included in the new array.
});
console.log(deposits); // → [200, 450, 3000, 70, 1300]
    
let withdrawals = movements.filter(value => value < 0);
console.log(withdrawals); // → [-400, -650, -130]
    
    
    
    
console.log('*******************************************');
    
/*    _    _   _ ___ _ _  
 __ _(_)__| | / | __| | | 
 \ V / / _` | | |__ \_  _|
  \_/|_\__,_| |_|___/ |_|
*/
// 154.-  
console.log('154.-  THE .REDUCE() METHOD');
// .REDUCE()
console.log('.REDUCE()');
/*  Returns: a value.
    Parameters: 
        1.	The ACCUMULATOR is the place where the value is being stored at each iteration
        2.	The initial value of the accumulator with a comma)
    Used to reduce all the elements of the original array to a single value product of some kind of mathematical operation.
    It doesn't return a new array, but a new value. This value can be for example a number or, why not, an object.
*/
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.reduce(function(acc, val, index, arr){
    console.log(`acc: ${acc}, val: ${val}, index: ${index}, arr: ${typeof arr}`);   
    return acc += val;
}, 0));

document.querySelector('.total').textContent = movements.reduce((accumulator, currentElement, index, arr) => accumulator + currentElement,0);

let highest = movements.reduce((acc, curr) => acc > curr ? acc : curr, movements[0])
console.log(highest);


console.log('*******************************************');

/*    _    _   _ ___ ___ 
 __ _(_)__| | / | __| __|
 \ V / / _` | | |__ \__ \
  \_/|_\__,_| |_|___/___/
*/
// 155.-  CODING CHALLENGE #2  
console.log('155.-  CODING CHALLENGE #2');
/*  Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages 
    and calculate the average age of the dogs in their study.
 */
/*Create a function 'calcAverageHumanAge', which accepts an array of dog's ages ('ages'), and does the following things in order:
    1.- Calculate the dog age in human years using the following formula: 
        If the dog is <=2 years old, human age = 2 * dogAge.
        If the dog is > 2 years old, humanAge = 16 + dogAge * 4. */
let calcAverageHumanAge = function(arr){
    let humanArr = arr.map(value => value <= 2 ? (2*value) : (16 + value * 4)).filter(value => value >= 18);
    console.log(humanArr.reduce((acc, value) => acc += value, 0) / humanArr.length);
    return humanArr;
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/*  2.- Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old).
 */
/*  3.- Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages) */
/*  4.- Run the function for both tests datasets
        TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
        TEST DATA 2: [16, 6, 10, 5, 6, 1, 4] */


console.log('*******************************************');

/*    _    _   _ ___   __ 
 __ _(_)__| | / | __| / / 
 \ V / / _` | | |__ \/ _ \
  \_/|_\__,_| |_|___/\___/
*/
// 156.-  THE MAGIC OF CHAINING METHODS
console.log('156.-  THE MAGIC OF CHAINING METHODS');

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




let conversionToDollar = function(arr){
    return arr.filter(value => value > 0).map(value => value * 1.1).reduce((acc, value) => acc += value)
}

console.log(Math.floor(conversionToDollar(movements)));

console.log('*******************************************');

/*    _    _   _ ___ ____ 
 __ _(_)__| | / | __|__  |
 \ V / / _` | | |__ \ / / 
  \_/|_\__,_| |_|___//_/  
*/
// 157.-  CODING CHALLENGE #3
console.log('157.-  CODING CHALLENGE #3');

let calcAverageHumanAgeArrow = function(arr){
    let humanArr = arr.map(value => value <= 2 ? (2*value) : (16 + value * 4)).filter(value => value >= 18);
    console.log(humanArr.reduce((acc, value) => acc += value, 0) / humanArr.length);
    return humanArr;
}
console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));


console.log('*******************************************');

/*    _    _   _ ___  ___ 
 __ _(_)__| | / | __|( _ )
 \ V / / _` | | |__ \/ _ \
  \_/|_\__,_| |_|___/\___/
*/
// 158.-  .FIND()
console.log('158.-  .FIND()');
/*  Used to retrieve an element of the array based on a condition. It accepts a callback function and runs it over all the elements of the array.
    Returns: an element of the array (the first element in the array that meets the condition)
    Parameters:
        1.	Function with two parameters: 
            *	accumulator 
            *	current value
        2.	The initial value of the accumulator with a comma)

 */
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.find(val => val < 0)); // → -400

console.log('.find() vs .filter()');

console.log(accounts.find(account => account.owner ==="Jessica Davis"));
console.log(accounts.filter(account => account.pin === 1111 || account.pin === 2222));


console.log('*******************************************');

/*    _    _   _ ___ ___ 
 __ _(_)__| | / | __/ _ \
 \ V / / _` | | |__ \_, /
  \_/|_\__,_| |_|___//_/ 
*/
// 159.-  IMPLEMENTING LOGIN
console.log('159.-  IMPLEMENTING LOGIN');
let getButton = document.querySelector('.form_btn');
let getFormUser = document.querySelector('.form_user');
let getFormPin = document.querySelector('.form_pin');
let getFormContente = document.querySelector('.formContent');

getButton.addEventListener('click', function(e){
    e.preventDefault();
    console.log(getFormUser.value);
    console.log(getFormPin.value);
    getFormContente.classList.toggle('oculto');
        
});



console.log('*******************************************');

/*    _    _   _  __  __  
 __ _(_)__| | / |/ / /  \ 
 \ V / / _` | | / _ \ () |
  \_/|_\__,_| |_\___/\__/ 
*/
// 160.-  IMPLEMENTING TRANSFERS
console.log('160.-  IMPLEMENTING TRANSFERS');
let getUser1 = document.querySelector('.user1');
let getBalance1 = document.querySelector('.balance1');
let getTransferAmount = document.querySelector('#transfer_amount')
let getTransferBtn = document.querySelector('.transfer_btn');

let getUser2 = document.querySelector('.user2');
let getBalance2 = document.querySelector('.balance2');

getUser1.textContent = `${account1.owner}`;

let funcionBalance1 = function(){
    getBalance1.textContent = `${account1.movements.reduce((acc, value) => acc + value, 0)}`;
}
funcionBalance1();

getUser2.textContent = `${account2.owner}`;

let funcionBalance2 = function(){
    getBalance2.textContent = `${account2.movements.reduce((acc, value) => acc + value, 0)}`;
}
funcionBalance2();

getTransferBtn.addEventListener('click', function(e){
    e.preventDefault();
    account1.movements.push(Number(-(getTransferAmount.value)));
    account2.movements.push(Number(getTransferAmount.value));
    funcionBalance1();
    funcionBalance2();
})



console.log('*******************************************');

/*    _    _   _  __ _ 
 __ _(_)__| | / |/ // |
 \ V / / _` | | / _ \ |
  \_/|_\__,_| |_\___/_|
*/
// 161.-  THE .FINDINDEX() METHOD
console.log('161.-  THE .FINDINDEX() METHOD');
/*
    Returns: The index of a given element of the array that meets the given equality.
    Parameters:
        * Element
        * Current index
        * Array    
*/

let arr161 = [" q", "w", "e", "r", "t", "y"];
console.log(arr161);
console.log(arr161.findIndex((element) => element === "w")); // → 1
console.log(arr161.splice(1, 1)); // → ['w']
console.log(arr161); // → [' q', 'e', 'r', 't', 'y']


console.log('*******************************************');

/*    _    _   _  __ ___ 
 __ _(_)__| | / |/ /|_  )
 \ V / / _` | | / _ \/ / 
  \_/|_\__,_| |_\___/___|
*/
// 162.-  .SOME() AND .EVERY() METHODS
console.log('162.-  .SOME() AND .EVERY() METHODS');

console.log('.SOME()');
/*
 *  Returns: true or false
 * Parameters:
 *  * Current element
 *  * Index
 *  * Array
 * Es parecido a .includes() pero en vez de checkear solo si existe un valor, puede buscar si existe algún elemento que cumpla una igualdad.
 */
let arr162 = [1000, 12, 543, -120, 2800];

console.log(arr162.some(element => element = 2800)); // → true
console.log(arr162.includes(2800)); // → true
console.log(arr162.indexOf(2800));


console.log('*******************************************');

/*    _    _   _  __ ____
 __ _(_)__| | / |/ /|__ /
 \ V / / _` | | / _ \|_ \
  \_/|_\__,_| |_\___/___/
*/
// 163.-  .FLAT() AND .FLATMAP()
console.log('163.-  .FLAT() AND .FLATMAP()');
/*  .FLAT()
 *  Returns: A new Array with all the values of inner arrays in the same array. It can go 1 or 2 levels deep.
 * Parameters:
 *  * The number of inner levels we want to go in order to extract the values
 * 
 */
const overalBalance = accounts
  .map((acc) => acc.movements) // → [[200, 450, -400, 3000, -650, -130, 70, 1300], [5000, 3400, -150, -790, -3210, -1000, 8500, -30], [200, -200, 340, -300, -20, 50, 400, -460], [430, 1000, 700, 50, 90]]
  .flat()  // → [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
  .reduce((acc, mov) => acc + mov, 0); // → 17840
console.log(overalBalance); // → 17840

/*  .FLATMAP()
 *  Returns: A new Array with all the values of inner arrays in the same array. It can go 1 levels deep. No more.
 * Parameters:
 *  * No parameters
 * 
 */
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements) // → [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
  .reduce((acc, mov) => acc + mov, 0); // → 17840
console.log(overalBalance2); // → 17840

console.log('*******************************************');

/*    _    _   _  __ _ _  
 __ _(_)__| | / |/ /| | | 
 \ V / / _` | | / _ \_  _|
  \_/|_\__,_| |_\___/ |_|
*/
// 164.-  SORTING ARRAYS
console.log('164.-  SORTING ARRAYS');
/* The .sort() method mutates the original array. We must be careful.
   It sorts the array based on strings. */

   let owners = ["Jonas", "Alberto", "Adam", "Martha"];
   console.log(owners);
   console.log(owners.sort());
   
   /* With the .sort() method we cannot sort numbers. To do this we need to pass in a compare callback function as argument.
      Esta compare callback function toma dos argumentos (a, b). Estos dos parámetros son el valor actual y el siguiente.
      Si devolvemos (return) un valor negativo (<0), el valor 'a' será ordenado antes del valor 'b'. Por contra, 
      si devolvemos (return) un valor positivo (>0), el valor 'b' será ordenado antes del valor 'a' en el array ordenado. */
   //movements.sort();
   console.log(movements);
   
   // para ordenar de menor a mayor
   console.log(movements.slice().sort((a, b) => a - b)); // → [-650, -400, -130, 70, 200, 450, 1300, 3000]

   // para ordenar de mayor a menor
   console.log(movements.slice().sort((a, b) => b - a)); // → [3000, 1300, 450, 200, 70, -130, -400, -650]


console.log('*******************************************');

/*    _    _   _  __ ___ 
 __ _(_)__| | / |/ /| __|
 \ V / / _` | | / _ \__ \
  \_/|_\__,_| |_\___/___/
*/
// 165.-  MORE WAYS OF CREATING AND FILLING ARRAYS
console.log('165.-  MORE WAYS OF CREATING AND FILLING ARRAYS');
/*
 *  Returns: 
 * Parameters:
 *  * 
 *  * 
 *  * 
 * 
 */
let arr165 = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(arr165);


let arr165a = new Array(7);
console.log(arr165a); // → [empty x7]

// los arrays creados de esta manera no son afectados por métodos como .MAP()
console.log(arr165a.map(() => 5));

console.log(".FILL()");
arr165a.fill(1);
console.log(arr165a); //[1, 1, 1, 1, 1, 1, 1]

arr165a.fill(2, 3);
console.log(arr165a); //[1, 1, 1, 2, 2, 2, 2]

arr165a.fill(3, 4, 6);
console.log(arr165a); //[1, 1, 1, 2, 3, 3, 2]

//MORE WAYS OF CREATING AND FILLING ARRAYS
console.log("Array.from()");
let arr164b = Array.from({ length: 7 }, () => 1);
console.log(arr164b);

let arr164c = Array.from({ length: 7 }, (value, index) => index + 1);
console.log(arr164c);

let arr164d = Array.from(
  { length: 50 },
  (current, index) => 50 + Math.round(Math.random() * 5)
);
console.log(arr164d);

let arr164f = new Array();
let valorActual = 50;
let numeroRandom = 0;
for (let i = 0; i < 50; i++) {
  numeroRandom = Math.round(Math.random() * 5);
  valorActual += numeroRandom;
  arr164f.push(valorActual);
}
console.log(arr164f);

console.log("-----100 random dice rolls-----");
let arr164g = Array.from(
  { length: 100 },
  (currentValue, index) => Math.round(Math.random() * 5) + 1
);
console.log(arr164g);

let dineritos = document.querySelectorAll(".dinerico_mostrar");
console.log(dineritos);
dineritos = Array.from(dineritos);
console.log(dineritos);
let dineritosFinal = dineritos.map((valor) =>
  valor.textContent.replace("€", "")
);
console.log(dineritosFinal);

console.log('*******************************************');

/*    _    _   _  __   __ 
 __ _(_)__| | / |/ /  / / 
 \ V / / _` | | / _ \/ _ \
  \_/|_\__,_| |_\___/\___/
*/
// 166.-  
console.log('166.-  ');
/*
 *  Returns: 
 * Parameters:
 *  * 
 *  * 
 *  * 
 * 
 */


console.log('*******************************************');

/*    _    _   _  ______ 
 __ _(_)__| | / |/ /__  |
 \ V / / _` | | / _ \/ / 
  \_/|_\__,_| |_\___/_/ 
*/
// 167.-  
console.log('167.-  ');
/*
 *  Returns: 
 * Parameters:
 *  * 
 *  * 
 *  * 
 * 
 */


console.log('*******************************************');

/*    _    _   _  __  ___ 
 __ _(_)__| | / |/ / ( _ )
 \ V / / _` | | / _ \/ _ \
  \_/|_\__,_| |_\___/\___/
*/
// 168.-  
console.log('168.-  ');
/*
 *  Returns: 
 * Parameters:
 *  * 
 *  * 
 *  * 
 * 
 */


console.log('*******************************************');