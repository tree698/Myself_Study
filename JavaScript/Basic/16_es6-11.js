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
	const fruits = [...fruits1, ...fruits2];
	console.log(fruits);

	// object merge => 동일한 key는 덮어 쓴다
	const dog1 = { dog: '🍤' };
	const dog2 = { dog: '🥩' };
	const dog = { ...dog1, ...dog2 };
	console.log(dog);
}

/**
 ** Default parameters (ES6)
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
}

/**
 ** Nullish Coalescing Operator (ES11)
 */

{
	// false: false, '', null, undefined
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
		console.log(userName);

		const num = 0;
		const message = num ?? 'undefined';
		console.log(message);
	}
}
