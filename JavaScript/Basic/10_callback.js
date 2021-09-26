'use strict';

/**
 * JavaScript is synchronous
 * Execute the code block in order after hoisting
 * Hoisting: var, function declaration
 */

console.log('1'); // 첫번째 출력
setTimeout(() => console.log('4'), 1000); // 세번째 출력
setTimeout(() => console.log('6'), 3000); // 여섯번째 출력
console.log('2'); // 두번째 출력

// Synchronous Callback => hoisting
function printImmediately(print) {
	print();
}
printImmediately(() => console.log('3')); // 세번째 출력

// Asychronous Callback => hoisting
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}
printWithDelay(() => console.log('5'), 2000); // 다섯번째 출력

// (end)
