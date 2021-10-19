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
user1.then(console.log); // fetchUser1().then(console.log)와 동일
console.log(user1); // return Promise state

/* 1. async */
async function fetchUser2() {
	// do network request in 10 secs...
	return 'ellie';
}
const user2 = fetchUser2();
user1.then(console.log);
console.log(user2); // return Promise state

// compare with below await
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function getApple() {
	return delay(1000).then(() => '🎈'); // 체이닝 필요
}

function getBanana() {
	return delay(1000).then(() => '🍌'); // 체이닝 필요
}

function pickFruits() {
	return getApple().then((apple) => {
		return getBanana().then((banana) => `${apple} + ${banana}`);
	});
}

pickFruits().then(console.log);

/* 2. await ✨*/
async function getApple2() {
	await delay(1000); // delay 함수가 끝날때까지 기다려라
	return '🎈';
}

async function getBanana2() {
	await delay(1000); // delay 함수가 끝날때까지 기다려라
	return '🍌';
}

async function pickFruits2() {
	try {
		const apple = await getApple2(); // 1000 소요
		const banana = await getBanana2(); // 1000 소요
	} catch {}

	return `${apple} + ${banana}`;
}

// 병렬 처리
async function pickFruits2() {
	const applePromise = getApple2(); // Promise로 바로 실행
	const banaPromise = getBanana2(); // Promise로 바로 실행
	const apple = await applePromise;
	const banana = await banaPromise;
	return `${apple} + ${banana}`;
}

pickFruits2().then(console.log);

/* 3. useful Promise APIs */
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
