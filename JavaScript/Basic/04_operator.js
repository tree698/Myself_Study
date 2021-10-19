'use strict';

// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 +  
2 = ${1 + 2}`); //줄바꿈 가능
console.log("I'm \nstudent"); //backslash n => 줄바꿈

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
/* counter = counter + 1;
preIncrement = counter;  */
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); /* 3 3 */

const postIncrement = counter++;
/* postIncrement = counter; 
counter = counter + 1;  */
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); /* 3 4 */

let n = 1;
console.log(n++); // 1
console.log(n); // 2

let m = 1;
console.log(++m); // 2
console.log(m); // 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

/* 
    6. Logical operators:  || (or), && (and), ! (not)
        - || (or) => find the first true value => 첫번째 값이 false면 다음 계산 => 시간 걸리는 함수를 마지막에 위치 
        - && (and) => find the first falsy value => 첫번째 값이 true면 다음 계산 => 시간 걸리는 함수를 마지막에 위치 
*/

const value1 = false;
const value2 = 4 < 2;
function check() {
	for (let i = 0; i < 10; i++) {
		console.log('t');
	}
	return true;
}

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);
console.log(!value1);

/* 
    often used to compress long if-statement
        - nullableObject (null object가 참이면..) && nullableObject.something (실행)
        if (nullableObject != null) {
	        nullableObject.something;
        }
*/

let obj; //undefined
obj && console.log(obj); //obj가 참이면 다음 실행 => undefine(거짓)이므로 실행 안됨

// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion  --> == (2개)
console.log(stringFive == numberFive); /* true */
console.log(stringFive != numberFive); /* false */

// === Strict equalit, no type conversion  --> === (3개)
console.log(stringFive === numberFive); /* false */
console.log(stringFive !== numberFive); /* true */

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); /* false  => 다른 reference */
console.log(ellie2 === ellie3); /* false => 다른 reference */
console.log(ellie1 === ellie3); /* true */

// equality - puzzler
console.log(0 == false); /* true */
console.log(0 === false); /* false  => boolean type이 아니기 때문 */
console.log('' == false); /* true */
console.log('' === false); /* false => boolean type이 아니기 때문 */
console.log(null == undefined); /* true */
console.log(null === undefined); /* false */

// 8. Conditional operators: if, else if, else
const name2 = 'ellie';
if (name2 === 'ellie') {
	console.log('Welcome, Ellie!');
} else if (name2 === 'coder') {
	console.log('You are amazing coder');
} else {
	console.log('unknown');
}

// 9. Ternary operator => condition ? value1 : value2;
console.log(name2 === 'ellie' ? 'yes' : 'no');

/* 
    10. switch statement
         - use for multiple if checks
         - use for enum-like value check
         - use of multiple type checks in TS
*/

const browser = 'IE';
switch (browser) {
	case 'IE':
		console.log('go away!');
		break;
	case 'Chrom':
	case 'Firefox':
		console.log('love you');
		break;
	default:
		console.log('same all!');
		break;
}

// 11. Loops => while loops, while the condition is truthy, body code is executed
let i = 3;
while (i > 0) {
	console.log(`while: ${i}`);
	i--;
}

// 12. do while loop => body code is executed first, then check the condition
do {
	console.log(`do while: ${i}`);
	i--;
} while (i > 0);

// 13. for loop => for(begin; condition; step)
for (i = 3; i > 0; i--) {
	console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
	// inline variabel declaration
	console.log(`inline varialbe for: ${i}`);
}

// nested loops
for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(`i: ${i}, i+j: ${i + j}`);
	}
}

// break, continue

// (end)
