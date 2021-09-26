'use strict';

/**
 * async & await
 * clear sytle of using promise
 */

// Synchronous
function fetchUser() {
	// do network request in 10 secs...
	return 'ellie';
}
const user = fetchUser(); // wait for 10 sec
console.log(user);

// Promise
function fetchUser1() {
	return new Promise((resolve, reject) => {
		// do network request in 10 secs...
		resolve('ellie');
	});
}
const user1 = fetchUser1();
user1.then(console.log);
console.log(user1); // return Promise state

// async
async function fetchUser2() {
	// do network request in 10 secs...
	return 'ellie';
}
const user2 = fetchUser2();
user1.then(console.log);
console.log(user2); // return Promise state

// compare with await
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function getApple() {
	return delay(1000).then(() => '🎈');
}

function getBanana() {
	return delay(1000).then(() => '🍌');
}

function pickFruits() {
	return getApple().then((apple) => {
		return getBanana().then((banana) => `${apple} + ${banana}`);
	});
}

pickFruits().then(console.log);

// await ✨
async function getApple2() {
	await delay(1000);
	return '🎈';
}

async function getBanana2() {
	await delay(1000);
	return '🍌';
}

async function pickFruits2() {
	const apple = await getApple2();
	const banana = await getBanana2();
	return `${apple} + ${banana}`;
}

// 병렬 처리
// async function pickFruits2() {
//     const applePromise = getApple();
//     const banaPromise = getBanana();
// 	const apple = await applePromise;
// 	const banana = await banaPromise;
// 	return `${apple} + ${banana}`;
// }

pickFruits2().then(console.log);

// useful Promise APIs
function pickAllFruits() {
	return Promise.all([getApple(), getBanana()]).then((fruits) =>
		fruits.join(' + ')
	);
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
