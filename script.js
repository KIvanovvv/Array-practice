'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = [`a`, `b`, `c`, `d`, `e`];

// //Slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //Splice
// //console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //Reverse
// arr = [`a`, `b`, `c`, `d`, `e`];
// let arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse());

// //Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //Join
// console.log(letters.join(` - `));

// //At
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //Getting the last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log(`jonas`.at(0));
// console.log(`jonas`.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //for (const movement of movements)
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} :You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdraw ${Math.abs(movement)}`);
//   }
// }
// console.log(`---------`);
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} :You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdraw ${Math.abs(mov)}`);
//   }
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
//Set
const currnenciesUnique = new Set([`USD`, `GBP`, `EUR`, `USD`, `EUR`]);
console.log(currnenciesUnique);
currnenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

//Map
const movements = [1000, -100, 500, 200, 100];
const euroToUsd = 1.1;
const movementsUSD = movements.map(move => move * euroToUsd);
console.log(movements);
console.log(movementsUSD);
const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * euroToUsd);
}
console.log(movementsUsdfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

//Equality check
console.log(movements);
console.log(movements.includes(-130));

//Condition check
// console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);
//Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//Flat Method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, move) => acc + move, 0);
// console.log(overalBalance);

//Flat
const overalBalance1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(overalBalance1);

//flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(overalBalance2);

//Sort

//String
const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
console.log(owners.sort());

//Numbers
console.log(movements);

//return <0,A,B(keep order)
//return >0,B,A(switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);

console.log(movements);
