/* 
    1. Use strict
        - added in ES5
        - use this for valina JavaScript 
*/

'use strict';

/* 
    2. Variable 
        - let : Mutable data type, added in ES6  => read & write
        - const : Immutable data type  => write once & read only
        - var : don't ever use this
            => var hoisting (declaration from bottm to top)
            => ignoring block scope

        * Immutable data types: primitive types, frozen objects (i.e object.freeze())
            - foavor immuatabel data type always for a few reasons
            - secureity, thread safety*, reduce human mistakes
                * block simultaneously change variables in threads
        * Mutabel data types: all object by default are mutable in JS
*/

// global scope => since remaining in memory during process, less use of it is good (use in class, function, for loof)
let globalbName = 'globale Name';

// block scope => can see outside from inside, but reverse can not
{
	let name = 'ellie';
	console.log(name);
	console.log(globalbName);
}
console.log(name);

// var hosting & ignoring block scope
{
	age = 4;
	var age;
}
console.log(age);

// const
const daysInWeek = 7;
const maxNumber = 5;

/* 
    3. Variable types
        - primitive (single item): number, string, boolean, null, undefned, symbol
        - object: box container
        - function (first-class function: allocate function as variable)
*/

// number => special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt => (-2**53) ~ (2**53)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

// template literals
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, -0, null, false, undefined, NaN, empty string('')
// true: any other value including object, empty array([]), 'false'
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// let x = new Boolean(false);
// if(x) {
//     this code is executed, see MDN, boolean
// }
// let x = false;
// if(x) {
//     this code is not executed
// }

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothig}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol => create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(
	`value: ${symbol1.description}, type: ${typeof symbol1.description}`
);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);

// object => data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

/* 
    4. Dynamic typing
*/

let text = 'hello';

console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

console.log(text.charAt(0));

/**
 * Variable Copy
 */

let num = 2;
let num2 = num;

num2 = 3;
console.log(num); //2
console.log(num2); //3

const obj = {
	name: 'ellie',
	age: 5,
};
const obj2 = obj; // obj와 obj2는 동일 주소를 가짐

obj.name = 'Lee';
console.log(obj.name); //Lee
console.log(obj2); //Lee

// (end)
