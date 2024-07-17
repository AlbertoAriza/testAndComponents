"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
/////////////////////////////////////////////////////////////////////

//UPDATING INFO ON SCREEN
const updateUi = function (currentAccount) {
  //display movements
  containerApp.style.opacity = "100";
  displayMovements(currentAccount.movements);
  //display balance
  calcPrintBalance(currentAccount);
  //display summary
  calcDisplaySummary(currentAccount);
};
/////////////////////////////////////////////////////////////////////

//EVENT HANDLERS
let currentAccount;
console.log(typeof currentAccount);
console.log(typeof currentAccount === "undefined");
btnLogin.addEventListener("click", function (e) {
  //evitar el comportamiento default de un botón de resetear la página
  e.preventDefault();

  //chequeamos el pass y el pin para ver si coinciden
  currentAccount = accounts.find(
    (acc) =>
      acc.userName === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );
  console.log(currentAccount);

  //si coincide login y pass mostramos valores de la cuenta en pantalla
  if (
    currentAccount?.userName === inputLoginUsername.value &&
    currentAccount?.pin === Number(inputLoginPin.value)
  ) {
    //display uo and message
    labelWelcome.textContent = `Wellcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUi(currentAccount);
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    console.log(index);
    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
let displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (valor, index) {
    let actionType = valor > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${actionType}">${
      index + 1
    } ${actionType} </div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${valor}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue;
  },
  0);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest}€`;
};
///////////////////////////////////////////////////

//IMPLEMENTANDO LAS TRANSFERENCIAS EN EL VID 159
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    currentAccount.userName !== receiverAcc?.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUi(currentAccount);
  }

  inputTransferAmount.value = inputTransferTo.value = "";
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some((value) => value >= loanAmount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(loanAmount);

    //Update UI
    updateUi(currentAccount);
  }
  inputLoanAmount.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/*__   _____ ___    _ _ _ ___ 
  \ \ / /_ _|   \  / | | |_  )
   \ V / | || |) | | |_  _/ / 
    \_/ |___|___/  |_| |_/___|
*/
console.log("----------------- VID 142 ------------------");
//SIMPLE ARRAY METHODS
//Arrays can also be considered objects. Because of this they also have methods.

//SLICE() METHOD
/* Arrays, like strings, can use the method .slice().
We can use it to create a new array with part of the original one.*/
console.log(".slice()");
let arr = ["a", "b", "c", "d", "e", "f"];
let arrShorter = arr.slice(2, 4);
console.log(arr);
console.log(arrShorter);
console.log(arr.slice(-1));
console.log(arr.slice(3, -1));

//Spread operator [...] vs .slice() to create a shallow copy of an array.
/*Both can be used, but .slice() allows us to put several methods together.*/
console.log(arr.slice());
console.log([...arr]);

//SPLICE() METHOD
/*.splice() deletes a value or several values in the original array.*/
console.log(".splice()");
arr.splice(1, 3);
console.log(arr);

let arr2 = ["j", "i", "h", "g"];
console.log(arr2);
console.log(arr2.reverse());
let nombre = "jose";
console.log(nombre);
console.log([...nombre].reverse());

//.CONCAT() METHOD
/**/
console.log(".concat() method");
console.log(arr);
console.log(arr2);
let letters = arr.concat(arr2);
console.log(letters);

//.JOIN() METHOD
/**/
console.log(letters.join(" - "));

/*__   _____ ___    _ _ _ ____
  \ \ / /_ _|   \  / | | |__ /
   \ V / | || |) | | |_  _|_ \
    \_/ |___|___/  |_| |_|___/
*/
console.log("----------------- VID 143 ------------------");
//THE NEW .AT() METHOD
/* There is one particularity that makes this method very useful.
This is to put together several methods.
*/
let arr143 = [23, 11, 64];
console.log(arr143[0]);
console.log(arr143.at(0));

//Getting the last element of an array
console.log(arr143[arr143.length - 1]);
console.log(arr143.slice(-1)[0]);
console.log(arr143.at(-1));

/*__   _____ ___    _ _ _  _ _  
  \ \ / /_ _|   \  / | | || | | 
   \ V / | || |) | | |_  _|_  _|
    \_/ |___|___/  |_| |_|  |_| 
*/
console.log("----------------- VID 144 ------------------");
//LOOPING ARRAYS: .FOREACH()
/* forEach() method is a high order function that receives a function as parameter that it will execute
for each element of the array. The current element of the array will be passed into the function 
as a parameter. But it doesn't only pass the current value. It also passes the index and the whole array:
function(value, index, array). We don't have to use all of them, but we need to pay attention to the order. */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for of loop
for (let x of movements) {
  console.log(x);
}
for (let x of movements.keys()) {
  console.log(x);
}
for (let x of movements.values()) {
  console.log(x);
}
for (let x of movements.entries()) {
  console.log(x);
}

//.forEach() loop
console.log("forEach() method attempt");
movements.forEach(function (value, index, arr144) {
  console.log(
    `${value > 0 ? "you deposited" : "you withdrew"} ${Math.abs(value)}`
  );
  console.log(index);
  console.log(arr144);
  console.log("-----");
});

let newArr144 = [];

movements.forEach(function (currentValue, index, originalArr) {
  console.log(currentValue);
  newArr144.push(currentValue + 100);
});
console.log(newArr144);

//Frikeando un repasito de objetos, métodos y el elemento .this.
console.log("frikeando");
let hola = {
  spanish: "hola",
  english: "hi",
  french: "bonjour",
  japanese: "ohio",
  salute(language) {
    console.log(this[language]);
  },
};
hola.salute("spanish");

/*__   _____ ___    _ _ _  ___ 
  \ \ / /_ _|   \  / | | || __|
   \ V / | || |) | | |_  _|__ \
    \_/ |___|___/  |_| |_||___/
*/
console.log("----------------- VID 145 ------------------");
//.FOREACH() WITH MAPS AND SETS
/* This method can also be used with maps and sets. But sets do not have keys. Take that into account. */

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
console.log(currencies);
currencies.forEach(function (value, key, map) {
  console.log(key, value);
});

let currenciesUnique = new Set(["USD", "GBP", "EUR"]);
currenciesUnique.forEach(function (value, key, set) {
  console.log(key, value);
});

/*__   _____ ___    _ _ _   __ 
  \ \ / /_ _|   \  / | | | / / 
   \ V / | || |) | | |_  _/ _ \
    \_/ |___|___/  |_| |_|\___/
*/
console.log("----------------- VID 146 ------------------");
//PRPJECT: "BANKIST" APP

/*__   _____ ___    _ _ _ ____ 
  \ \ / /_ _|   \  / | | |__  |
   \ V / | || |) | | |_  _|/ / 
    \_/ |___|___/  |_| |_|/_/ 
*/
console.log("----------------- VID 147 ------------------");
//CREATING DOM ELEMENTS
/* Aquí hemos aprendido a añadir nuevos elementos al DOM con:
- .insertAdjacentHTML(posición, texto)
- .innerHTML
- .textContent */

/*__   _____ ___    _ _ _  ___ 
  \ \ / /_ _|   \  / | | |( _ )
   \ V / | || |) | | |_  _/ _ \
    \_/ |___|___/  |_| |_|\___/
*/
console.log("----------------- VID 148 ------------------");
//CODING CHALLENGE 1

//Data 1
let julia = [3, 5, 2, 12, 7];
let kate = [4, 1, 15, 8, 3];
let juliaFixed = julia.slice(2, -2);

//Data 2
let juliaData2 = [9, 16, 6, 8, 3];
let KateData2 = [10, 5, 6, 1, 4];

const dogAge = function (arr1, arr2) {
  arr = [...arr1, ...arr2];
  arr.forEach(function (value, index) {
    console.log(
      `Dog number ${index + 1} is ${
        value >= 5 ? "an adult" : "still a puppy"
      } and it is ${value} years old.`
    );
  });
};
dogAge(juliaFixed, kate);
dogAge(juliaData2, KateData2);

/*__   _____ ___    _ _ _  ___ 
  \ \ / /_ _|   \  / | | |/ _ \
   \ V / | || |) | | |_  _\_, /
    \_/ |___|___/  |_| |_| /_/
  */
console.log("----------------- VID 149 ------------------");
//DATA TRANSFORMATIONS: MAP, FILTER, REDUCE
/* There are three important array methods that are used all the time to
 transform the data from arrays.
 - MAP: used to loop over arrays. similar to forEach, but it creates a new array with the results
 of applying an operation over each value of the original array.
 - FILTER: It is used to filter some elements from the original array and remove or include tiem
 in the new array.
 - REDUCE: Used to reduce all the elements of the original array to a single value product
 of some kind of mathematical operation. It doesn't return a new array, but a new value. */

/*__   _____ ___    _ ___  __  
  \ \ / /_ _|   \  / | __|/  \ 
   \ V / | || |) | | |__ \ () |
    \_/ |___|___/  |_|___/\__/ 
 */
console.log("----------------- VID 150 ------------------");
//THE MAP METHOD

let euroToUsd = 1.1;

console.log("usando map");
let movementsUsd = movements.map((valor) => Math.floor(valor * euroToUsd));
console.log(movementsUsd);

console.log("usando forEach");
let valores = [];
movements.forEach(function (valor) {
  valores.push(Math.floor(valor * euroToUsd));
});
console.log(valores);

console.log("usando LOOP FOR-OF");
let valores2 = [];
for (let x of movements) {
  valores2.push(Math.floor(x * euroToUsd));
}
console.log(valores2);

console.log("usando LOOP FOR");
let valores3 = [];
for (let x = 0; x < movements.length; x++) {
  valores3.push(Math.floor(movements[x] * euroToUsd));
}
console.log(valores3);

/*__   _____ ___    _ ___ _ 
  \ \ / /_ _|   \  / | __/ |
   \ V / | || |) | | |__ \ |
    \_/ |___|___/  |_|___/_|
*/
console.log("----------------- VID 151 ------------------");
//COMPUTING USERNAMES
/* Mediante la acumulación de métodos podemos crear, por ejemplo, nombres de usuario en una web.
Let's pay attention to the example below. We take the name and we want to return the initials
in lower case.
- .toLowerCase() makes the letter lower case. It returns a string.
- .split(' ') creates an array of objects separated by the space
- .map() returns a new array with values changed due to the function it applies.
   - (name) => name[0] is the function applied to the new array created by .map(). It returns
   the first letter of each element of the array.
   .join('') joins the different elements of the array in a string with no spaces. */

const createUserNames = function (cuentas) {
  cuentas.forEach(function (cuenta) {
    cuenta.userName = cuenta.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};

let myName = "Jose Alberto Ariza";
console.log(myName);
let myNameArr = myName.split(" ");
console.log(myNameArr);

createUserNames(accounts);

console.log(accounts);

console.log("frikeando en video 151 con methods");
let arr151 = "alita pechuga lechuga arroz";
let arr151b = arr151
  .toLowerCase()
  .split(" ")
  .map((palabra) => palabra.slice(0, 1))
  .join("");
console.log(arr151b);

/*__   _____ ___    _ ___ ___ 
  \ \ / /_ _|   \  / | __|_  )
   \ V / | || |) | | |__ \/ / 
    \_/ |___|___/  |_|___/___|
    */
console.log("----------------- VID 152 ------------------");
//THE FILTER METHOD
/* The filter method returns a new array (that must be stored in a new var) that filters out
   the values that we don't need. */
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

console.log("frikeando con el libro daily coding problem");
/* Devuelve un array que tenga en cada posición el producto de todos los números menos el
de la posición que ocupa en ese momento */

let arrFrikeando152 = [1, 2, 3, 4, 5];
let arrFinalResult = [];

const sortingArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arrFinalResult[i] = (arr[0] * arr[1] * arr[2] * arr[3] * arr[4]) / arr[i];
  }
};
sortingArr(arrFrikeando152);
console.log(arrFinalResult);

/*__   _____ ___    _ ___ ____
  \ \ / /_ _|   \  / | __|__ /
   \ V / | || |) | | |__ \|_ \
    \_/ |___|___/  |_|___/___/
*/
console.log("----------------- VID 153 ------------------");
//THE REDUCE METHOD
/* Used to reduce to one value an entire array.
The function and the values that we pass are different from the previous ones.
The first value is an accumulator, where the values are put together
(sum, multiplication, etc. ).
The .reduce method also receives a second parameter, this is the starting value
of the accumulator */

console.log(movements);
let balance = movements.reduce(function (
  accumulator,
  currentValue,
  index,
  arr
) {
  return accumulator + currentValue;
},
0);
console.log(balance);

/* This .reduce() method can also be used for other purposes, not only adding or multiplying.
  We can also keep track of the bigger number. */

const maximum = movements.reduce(function (accumulator, currentValue) {
  if (accumulator > currentValue) {
    return accumulator;
  } else {
    return currentValue;
  }
}, movements[0]);
console.log(maximum);

/*__   _____ ___    _ ___ _ _  
  \ \ / /_ _|   \  / | __| | | 
   \ V / | || |) | | |__ \_  _|
    \_/ |___|___/  |_|___/ |_|
*/
console.log("----------------- VID 154 ------------------");
//CODING CHALLENGE 2

let testData01 = [5, 2, 4, 1, 15, 8, 3];
let testData02 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arr) {
  console.log(arr);
  let humanAge = arr.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  let humanAgeFiltered = humanAge.filter((age) => age >= 18);
  let mediaHumanAgeFiltered =
    humanAgeFiltered.reduce((acc, age) => acc + age, 0) /
    humanAgeFiltered.length;
  console.log(humanAge);
  console.log(humanAgeFiltered);
  console.log(mediaHumanAgeFiltered);
};

console.log(calcAverageHumanAge(testData01));
//console.log(calcAverageHumanAge(testData02));

/*__   _____ ___    _ ___ ___ 
  \ \ / /_ _|   \  / | __| __|
   \ V / | || |) | | |__ \__ \
    \_/ |___|___/  |_|___/___/
*/
console.log("----------------- VID 155 ------------------");
//THE MAGIC OF CHAINING METHODS

/* Encadenamos distintos methods para obtener el valor deseado. Solo debemos de tener en cuenta lo que
   cada method devuelve (un valor, un array, etc.) */
const totalDepositsUSD = account1.movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUsd)
  .reduce((accumulator, currentMovement) => accumulator + currentMovement, 0);
console.log(totalDepositsUSD);

/*__   _____ ___    _ ___   __ 
  \ \ / /_ _|   \  / | __| / / 
   \ V / | || |) | | |__ \/ _ \
    \_/ |___|___/  |_|___/\___/
*/
console.log("----------------- VID 156 ------------------");
//CODING CHALLENGE 3

/* let testData01 = [5, 2, 4, 1, 15, 8, 3];
let testData02 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arr) {
  console.log(arr);
  let humanAge = arr.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  let humanAgeFiltered = humanAge.filter((age) => age >= 18);
  let mediaHumanAgeFiltered =
    humanAgeFiltered.reduce((acc, age) => acc + age, 0) /
    humanAgeFiltered.length;
  console.log(humanAge);
  console.log(humanAgeFiltered);
  console.log(mediaHumanAgeFiltered);
};

console.log(calcAverageHumanAge(testData01)); */

//Rewrite that
const calcAverageHumanAge2 = (arr) =>
  arr
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arrReduced) => acc + age / arrReduced.length, 0);

console.log(calcAverageHumanAge(testData01));
console.log(calcAverageHumanAge2(testData01));
/*__   _____ ___    _ ___ ____ 
  \ \ / /_ _|   \  / | __|__  |
   \ V / | || |) | | |__ \ / / 
    \_/ |___|___/  |_|___//_/ 
*/
console.log("----------------- VID 157 ------------------");
//THE FIND METHOD
/* The .find() method can be used to retrieve one element of an array based on a condition.
  It seems similar to .filter() method, but the .find()method does not return an array, but
  the first element in the aray that satisfies this condition. */
let testFind = movements.find((mov) => mov < 0);
console.log(movements);
console.log(testFind);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

let accountOfValue;
const accountForOf = function (accounts) {
  for (let x of accounts) {
    if (x.owner === "Jessica Davis") {
      console.log(x.owner);
      accountOfValue = x;
    }
  }
};
accountForOf(accounts);
console.log(accountOfValue);

/*__   _____ ___    _ ___  ___ 
  \ \ / /_ _|   \  / | __|( _ )
   \ V / | || |) | | |__ \/ _ \
    \_/ |___|___/  |_|___/\___/
*/
console.log("----------------- VID 158 ------------------");
//IMPLEMENTING LOGIN

console.log("frikeando con split para recordar");
let frikeando158 = "alberto ariza";
console.log(frikeando158);
frikeando158 = frikeando158.split(" ");
console.log(frikeando158);
console.log(frikeando158[0]);
/*__   _____ ___    _ ___ ___ 
  \ \ / /_ _|   \  / | __/ _ \
   \ V / | || |) | | |__ \_, /
    \_/ |___|___/  |_|___//_/ 
*/
console.log("----------------- VID 159 ------------------");
//IMPLEMENTING TRANSFERS

/*__   _____ ___    _  __  __  
  \ \ / /_ _|   \  / |/ / /  \ 
   \ V / | || |) | | / _ \ () |
    \_/ |___|___/  |_\___/\__/
*/
console.log("----------------- VID 160 ------------------");
//THE FINDINDEX METHOD
/* This method returns the index of a given value of an array */
let arr160 = [" q", "w", "e", "r", "t", "y"];
console.log(arr160);
console.log(arr160.findIndex((acc) => acc === "w")); //1

/*__   _____ ___    _  __ _ 
  \ \ / /_ _|   \  / |/ // |
   \ V / | || |) | | / _ \ |
    \_/ |___|___/  |_\___/_|
*/
console.log("----------------- VID 161 ------------------");
//SOME AND EVERY
console.log(".some()");
/* .some() method tests for a condition in an array. It receives a function as argument.
   it returns true (if a value of the array fulfill the condition) or false. */
let arr161 = [200, -200, 500, -430];
console.log(arr161.some((value) => value >= 0)); //true

console.log(".every()");
/* It is similar to the method .some(), but it only returns true if all the values of the
   array fulfill the condition. */
console.log(arr161.every((valor) => valor >= 0));

/*__   _____ ___    _  __ ___ 
  \ \ / /_ _|   \  / |/ /|_  )
   \ V / | || |) | | / _ \/ / 
    \_/ |___|___/  |_\___/___|
*/
console.log("----------------- VID 162 ------------------");
//FLAT AND FLATMAP
console.log(".flat()");
/* the array method .flat() is used to flatten an array with arrays inside. It only goes
   one level deep */
let arr162a = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr162a);
console.log(arr162a.flat());
// But it cannot deal with very deep arrays unless we change the value in the brackets
let arr162b = [1, 2, [3, 4, [5, 6]], 7, 8];
console.log(arr162b);
console.log(arr162b.flat());
console.log(arr162b.flat(2));

//FLATMAP METHOD
console.log(".flatMap()");
/* It does two things at the same time. it applies .flat() and .map() methods */

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

/*__   _____ ___    _  __ ____
  \ \ / /_ _|   \  / |/ /|__ /
   \ V / | || |) | | / _ \|_ \
    \_/ |___|___/  |_\___/___/
*/
console.log("----------------- VID 163 ------------------");
//SORTING ARRAYS
console.log(".sort()");
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
movements.sort((a, b) => a - b);
console.log(movements);

/*__   _____ ___    _  __ _ _  
  \ \ / /_ _|   \  / |/ /| | | 
   \ V / | || |) | | / _ \_  _|
    \_/ |___|___/  |_\___/ |_|
*/
console.log("----------------- VID 164 ------------------");
console.log("-----propiedades de arrays vacios-----");
let arr164a = new Array(7);
console.log(arr164a); //[empty x7]

arr164a.map(() => 5);
console.log(arr164a); //[empty x7]

console.log("-----.fill() method-----");
arr164a.fill(1);
console.log(arr164a); //[1, 1, 1, 1, 1, 1, 1]

arr164a.fill(2, 3);
console.log(arr164a); //[1, 1, 1, 2, 2, 2, 2]

arr164a.fill(3, 4, 6);
console.log(arr164a); //[1, 1, 1, 2, 3, 3, 2]

//MORE WAYS OF CREATING AND FILLING ARRAYS
console.log("-----Array.from()-----");
let arr164 = Array.from({ length: 7 }, () => 1);
console.log(arr164);

let arr164d = Array.from({ length: 7 }, (value, index) => index + 1);
console.log(arr164d);

let arr164e = Array.from(
  { length: 50 },
  (current, index) => 50 + Math.round(Math.random() * 5)
);
console.log(arr164e);

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

/*__   _____ ___    _  __ ___ 
  \ \ / /_ _|   \  / |/ /| __|
   \ V / | || |) | | / _ \__ \
    \_/ |___|___/  |_\___/___/
*/
console.log("----------------- VID 165 ------------------");
//SUMMARY: WHICH ARRAY METHOD TO USE?

let array165 = [140, 150, -20, -170, 260, -100];
console.log(
  array165.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);

let sums = array165.reduce(
  (accumulator, currentValue) => {
    currentValue > 0
      ? (accumulator.positivos += currentValue)
      : (accumulator.negativos += currentValue);
    return accumulator;
  },
  { positivos: 0, negativos: 0 }
);
console.log(sums); //{positivos: 550, negativos: -290}
/*__   _____ ___    _  __   __ 
  \ \ / /_ _|   \  / |/ /  / / 
   \ V / | || |) | | / _ \/ _ \
    \_/ |___|___/  |_\___/\___/
*/
console.log("----------------- VID 166 ------------------");
//ARRAY METHODS PRACTICE

/*__   _____ ___    _  ______ 
  \ \ / /_ _|   \  / |/ /__  |
   \ V / | || |) | | / _ \/ / 
    \_/ |___|___/  |_\___/_/ 
*/
console.log("----------------- VID 167 ------------------");
//CODING CHALLENGE 4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 22, curFood: 275, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);

let ownersEatTooMuch = [];

let dogEat = dogs.forEach((currentDog) => {
  if (currentDog.curFood * 1.1 > currentDog.recFood) {
    console.log(`${currentDog.owners.join(" and ")} Tu perro come demasiado`);
    ownersEatTooMuch.push(currentDog.owners);
  } else if (currentDog.curFood * 0.9 < dogs.recFood) {
    console.log(`${currentDog.owners.join(" and ")} Tu perro come poco`);
  } else {
    console.log(`${currentDog.owners.join(" and ")} Tu perro come bien`);
  }
});

console.log(ownersEatTooMuch);
console.log(ownersEatTooMuch.flat());
