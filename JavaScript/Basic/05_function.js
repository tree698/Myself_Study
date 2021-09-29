'use strict';

/* 
    Function
    - fundamental building block in the program
    - subprogram can be used multiple times
    - performs a task or calculates a value
*/

/* 
    1. Function declaration
    - function name(param1, param2) {body...return }
    - one function === one thing
    - nameing: doSomething, command, verb
        e.g. createCradAndPoint(x) => createdCard, createPont
    - function is object in JS (변수에 저장, 파라미터로 전달, 함수를 return 등 가능)
*/

function printHello() {
	console.log('Hello');
}
printHello();

function log(message) {
	console.log(message);
}
log('Hello@');
log(1234);

/* 
    2. Parameters
    - primitive parameters: passed by value
    - object parameters: passed by reference
*/

function changeName(obj) {
	obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

/* 
    3. Default parameters (added in ES6)
*/

function showMessage(message, from = 'unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 예전에는 if를 삽입하여 매개변수가 하나만 입력될 경우 대비했다
function showMessage(message, from) {
	if (from === undefined) {
		from = 'unknown';
	}
	console.log(`${message} by ${from}`);
}
showMessage('Hi');

/* 
    4. Rest parameters (added in ES6)
    - arg는 배열을 가리킨다
*/

function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}

	for (const arg of args) {
		console.log(arg);
	}

	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

/* 
    5. Local scope
    - 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
*/

let globalMessage = 'global'; //global variable
function printMessage() {
	let message = 'hello';
	console.log(message); //local variable
	console.log(globalMessage);
	function printAnother() {
		console.log(message); // 출력됨
		let childMessage = 'hello';
	}
	console.log(childMessage); // 에러
	return undefined; // return이 정의되지 않으면 undefined이고 생략 가능
}
printMessage();
console.log(message); // message는 지역변수이기에 밖에서는 출력이 안된다

/* 
    6. Return a value
*/

function sum(a, b) {
	return a + b;
}
const result = sum(1, 2);
console.log(result);
console.log(`sum: ${sum(1, 2)}`);

/* 
    7. Early return, early exit
*/

// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}

// good
function upgradeUser(User) {
	if (user.point <= 10) {
		return;
	}
	//long upgrade logic...
}

/* 
    First-class function
    - functions are treated like any other variable
    - can be assigned as a value to variable
    - can be passed as an argument to other functions
    - can be returned by another function
*/

/* 
    8. Function expression
    - a function declaration can be called earlier than it is defined => hosted
    - a function expression is created when the exccution reaches it
*/

const print = function () {
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

/* 
    9. Callback function using function expression
    - 매개 변수로 함수도 받을 수 있다 
*/

function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}

// anonymous function
const printYes = function () {
	console.log('yes!');
};
// named function => better debugging in debugger's stack traces / recursions
const printNo = function print() {
	console.log('no!');
	// print();  => recursion 할 때 named function 필요
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

/* 
    10. Arrow function
    - always anonymous
*/

const simplePrint = function () {
	console.log('simplePrint');
};
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const sumpleMultiply = (a, b) => {
	// do something more => 한 줄 이상이면 {} 사용 & return 필요 !!
	return a * b;
};

/* 
    11. IIFE (Immediately Invoked Function Expression) => 선언함과 동시에 호출
*/

(function hello() {
	console.log('IIEF');
})();

/* 
    (Quize) 💖
    - function calculate(command, a, b)
    - command: add, substract, divide, multiply, remainder
*/

function calculate(command, a, b) {
	switch (command) {
		case 'add':
			return a + b;
		case 'substract':
			return a - b;
		case 'divide':
			return a / b;
		case 'multiply':
			return a * b;
		case 'remainer':
			return a % b;
		default:
			throw Error('unknown command');
	}
}
console.log(calculate(substract, 1, 3));

// (end)
