'use strict';

/**
 * Promise is a JavaScript object for asychronous operation
 * (예) 사전예약 시스템: 사전 예약자에게 프로그램/상품 등이 오픈되면 알림 등을 보냄
 * State: pending -> fulfilled or rejected
 * producer vs Consumer
 */

/**
 * 1. Producer
 * !When new Promise is created, the executor runs automatically
 */
const promise = new Promise((resolve, reject) => {
	// doing some heavy work (network, read files)
	console.log('doing something...');
	setTimeout(() => {
		// resolve('ellie');
		reject(new Error('no network'));
	}, 2000);
});

/**
 * 2. Consumer
 * then, catch, finally
 */
promise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log('finally');
	});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
	.then((num) => num * 2)
	.then((num) => num * 3)
	.then((num) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num - 1), 1000);
		});
	})
	.then((num) => console.log(num));

// 4. Promise -> function
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('🐔'), 1000);
	});

const getEgg = (hen) =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${hen} => 🥚`), 1000);
	});

const getFri = (egg) =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 🍽`), 1000);
	});

// getHen()
// 	.then((hen) => getEgg(hen))
// 	.then((egg) => getFri(egg))
// 	.then((fri) => console.log(fri));

getHen() //
	.then(getEgg)
	.then(getFri)
	.then(console.log);

// 5. Error Handling
const getHen2 = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('🐔'), 1000);
		// setTimeout(() => reject(new Error(`error happened 🐔`)), 1000);
	});

const getEgg2 = (hen) =>
	new Promise((resolve, reject) => {
		// setTimeout(() => resolve(`${hen} => 🥚`), 1000);
		setTimeout(() => reject(new Error(`error happened ${hen} => 🥚`)), 1000);
	});

const getFri2 = (egg) =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 🍽`), 1000);
		// setTimeout(() => reject(new Error(`error happened ${egg} => 🍽`)), 1000);
	});

getHen2() //
	.catch((error) => {
		return 1; // 1 => 🥚 => 🍽
	})
	.then(getEgg2)
	.catch((error) => {
		return 2; // 2 => 🍽
	})
	.then(getFri2)
	.catch((error) => {
		return 3; // 3
	})
	.then(console.log);

// (end)
