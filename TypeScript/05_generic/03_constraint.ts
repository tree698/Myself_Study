{
	interface Employee {
		pay(): void;
	}

	class FullTimeWorker implements Employee {
		pay() {
			console.log('full time');
		}
		workFullTime() {
			console.log('full time');
		}
	}

	class PartTimeWorker implements Employee {
		pay() {
			console.log('part time');
		}
		workPartTime() {
			console.log('part time');
		}
	}

	// 세부적인 타입 인자를 받아서 추상적인 타입으로 리턴하는 것은 똥!
	function payBad(employee: Employee): Employee {
		employee.pay();
		return employee;
	}

	// T 타입에 제한을 둠
	function pay<T extends Employee>(employee: T): T {
		employee.pay();
		return employee;
	}

	const ellie = new FullTimeWorker();
	const bob = new PartTimeWorker();

	// type 정보를 잃어버려 workFullTime(), workPartTime() 적용 불가
	const ellieAfterPay = payBad(ellie);
	const BobAfterPay = payBad(bob);
	ellieAfterPay.pay();
	BobAfterPay.pay();

	// 모두 가능
	const ellieAfterPay2 = pay(ellie);
	const BobAfterPay2 = pay(bob);
	ellieAfterPay2.pay();
	ellieAfterPay2.workFullTime();
	BobAfterPay2.pay();
	BobAfterPay2.workPartTime();

	/* Another example */
	const obj = {
		name: 'ellie',
		age: 20,
	};

	const obj2 = {
		animal: '🐔',
	};

	// computed propertiy => key값으로 어떤것이 올지 모를 경우 => key는 string
	function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
		return obj[key];
	}

	console.log(getValue(obj, 'name')); // ellie
	console.log(getValue(obj, 'age')); // 20
	console.log(getValue(obj2, 'animal')); // 🐔
}
