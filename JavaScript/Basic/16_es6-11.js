'use strict';

/**
 ** Shorthand property names (ES6)
 * key와 value가 동일할 경우 생략 가능
 */

{
	const ellie1 = {
		name: 'Ellie',
		age: '18',
	};

	const name = 'Ellie';
	const age = '18';

	const ellie2 = {
		name: name,
		age: age,
	};

	const ellie3 = {
		name,
		age,
	};

	console.log(ellie1, ellie2, ellie3);
}

/**
 ** Destructuring Assignment (ES6)
 */

{
	// object
	const student = {
		name: 'Anna',
		level: 1,
	};

	// 기존 방법: 각 key에 접근
	{
		const name = student.name;
		const level = student.level;
		console.log(name, level);
	}

	// 새로운 방법
	const { name, level } = student;
	console.log(name, level);

	function displayStudent(student) {
		const { name, level } = student;
		displayName(name);
		displayLevel(level);
	}

	// 다른 이름으로 선언 가능
	const { name: studentName, level: studentLevel } = student;
	console.log(studentName, studentLevel);

	// 배열에도 적용 가능
	const food = ['🍕', '🥗'];

	// 기존 방법
	{
		const first = food[0];
		const second = food[1];
		console.log(first, second);
	}

	// 새로운 방법
	{
		const [first, second] = food;
		console.log(first, second);
	}
}

/**
 ** Spread Syntax (ES6)
 */

{
	const obj1 = { key: 'key1' };
	const obj2 = { key: 'key2' };
	const array = [obj1, obj2];

	// array copy [] => 배열 內, object 주소값을 복사
	const arrayCopy = [...array];
	console.log(array, arrayCopy);

	// array copy & add array
	const arrayCopy2 = [...array, { key: 'key3' }];
	obj1.key = 'newKey'; // 값 변경
	console.log(array, arrayCopy, arrayCopy2);

	// object copy {}
	const obj3 = { ...obj1 };
	console.log(obj3);

	// array concatenation
	const fruits1 = ['🍊', '🍐'];
	const fruits2 = ['🍋', '🥒'];
	// const fruits = fruits1.concat(fruits2);
	const fruits = [...fruits1, 'add', ...fruits2];
	console.log(fruits);

	// const newFruits = fruits.push('add');
	const newFruits = [...fruits, 'add'];
	// const newFruits = ['add', ...fruits];  => 앞에 추가
	console.log(newFruits);

	// object merge => 동일한 key는 덮어 쓴다
	const dog1 = { dog: '🍤' };
	const dog2 = { dog: '🥩' };
	const dog = { ...dog1, ...dog2 };
	console.log(dog);

	// example
	const item = { type: '👩', size: 'M' };
	const detail = { price: 20, made: 'korea', gender: 'w' };

	const mix = { ...item, ...detail, price: 40 }; // change price
	console.log(mix);

	const mix2 = Object.assign(item, detail);
	console.log(mix2);
}

/**
 ** Default parameters (ES6)
 * undefined 경우에만 적용
 */

{
	{
		function printMessage(message = 'default message') {
			// if (message == null) {
			//     message = 'default message';
			// })
			console.log(message);
		}

		printMessage('hello');
		printMessage();
	}
}

/**
 ** Ternary Operator (ES6)
 */

{
	const isCat = true;
	{
		let component;
		if (isCat) {
			component = '👍';
		} else {
			component = '✋';
		}
		console.log(component);
	}

	{
		const component = isCat ? '👍' : '✋';
		console.log(component);
		console.log(isCat ? '👍' : '✋');
	}
}

/**
 ** Template Literals (ES6)
 */

{
	const weather = 'good';
	const temperature = '18';
	console.log(`Today's weather is ${weather} and temperature is ${temperature}`);
}

/**
 ** Optional Chaining (ES11)
 */

{
	const person1 = {
		name: 'Ellie',
		job: {
			title: 'S/W Engineer',
			manager: {
				name: 'Bob',
			},
		},
	};
	const person2 = {
		name: 'Bob',
	};

	{
		function printManager(person) {
			console.log(
				person.job
					? person.job.manager
						? person.job.manager.name
						: undefined
					: undefined
			);
		}
		printManager(person1); // Bob
		printManager(person2); // undefined
	}

	{
		function printManager(person) {
			console.log(person.job && person.job.manager && person.job.manager.name);
		}
		printManager(person1); // Bob
		printManager(person2); // undefined
	}

	{
		function printManager(person) {
			console.log(person.job?.manager?.name);
		}
		printManager(person1); // Bob
		printManager(person2); // undefined
	}

	{
		// Using nullish coalescing operator
		function printManager(person) {
			console.log(person.job?.manager?.name ?? 'No job yet');
		}
		printManager(person1); // Bob
		printManager(person2); // No job yet
	}
}

/**
 ** Nullish Coalescing Operator (ES11)
 * leftExpr ?? rightExpr => rightExpr is being executed when leftExpr is null or undefined
 * leftExpr || rightExpr => rightExpr is being executed when leftExpr is false
 * flasy => flase, 0, -0, '', "", ``, null, undefined
 * In case of 0 and '', different result comes out
 */

{
	{
		const name = 'Ellie';
		const userName = name || 'Guest';
		console.log(userName); // Ellie
	}

	{
		// 사용자가 이름 지정을 원치 않으나, 빈 문자열은 false 취급하여 Guest 출력
		const name = '';
		const userName = name || 'Guest';
		console.log(userName); // Guest

		// 사용자가 0을 지정했으나 0은 false 취급하여 undefined 출력
		const num = 0;
		const message = num || 'undefined';
		console.log(message); // undefined
	}

	{
		// name 값이 있다면 name 출력, 없다면 Guest 출력
		const name = '';
		const userName = name ?? 'Guest';
		console.log(userName); // 빈문자

		const num = 0;
		const message = num ?? 'undefined';
		console.log(message); // 0
	}

	{
		// Bad code
		function printMessage(text) {
			let message = text;
			if (text == null || text == undefined) {
				message = 'Nothing to display';
			}
			console.log(message);
		}

		// Good code
		//  만일, text에 대해 default parameter를 사용하면 undefined 경우에만 적용됨
		function printMessage2(text) {
			const message = text ?? 'Nothing to display';
			console.log(message);
		}
		printMessage2('Hello'); // Hello
		printMessage2(null); // Nothing to display
		printMessage2(undefined); // Nothing to display
		printMessage2(0); // 0
		printMessage2(''); // 빈 문자열

		// 비교
		function printMessage3(text) {
			const message = text || 'Nothing to display';
			console.log(message);
		}
		printMessage3('Hello'); // Hello
		printMessage3(null); // Nothing to display
		printMessage3(undefined); // Nothing to display
		printMessage3(0); // Nothing to display
		printMessage3(''); // Nothing to display
	}

	{
		// It can be applied to function
		const result = getInitialState() ?? fetchFromServer();
		console.log(result);

		function getInitialState() {
			return null;
		}

		function fetchFromServer() {
			return 'Wow~';
		}
	}
}

{
	// Looping
	const items = [1, 2, 3, 4, 5, 6];

	const result = items
		.filter((num) => num % 2 == 0)
		.map((num) => num * 4)
		.reduce((a, b) => a + b, 0);
	console.log(result);

	// Promise => Async, await
	async function displayUser() {
		const user = await fetchUser();
		const profile = await fetchProfile(user);
		updateUI(user, profile);
	}
}

{
	// Remove Duplicates!
	const array = ['🍓', '🍓', '🥝', '🍑'];
	console.log([...new Set(array)]);
}
