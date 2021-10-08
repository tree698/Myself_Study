{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// public
	// private
	// protected
	class CoffeeMaker {
		private static BEANS_GRAM_PER_SHOTS: number = 7; // class level
		private coffeeBean: number = 0; // instance (object) level

		private constructor(beans: number) {
			this.coffeeBean = beans;
		}

		static makeMachine(beans: number): CoffeeMaker {
			if (beans < 0) {
				throw new Error('Value for beans should be greater than zero');
			}
			return new CoffeeMaker(beans);
		}

		fillCoffeeBean(beans: number) {
			if (beans < 0) {
				throw new Error('Value for beans should be greater than zero');
			}
			this.coffeeBean += beans;
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeBean < CoffeeMaker.BEANS_GRAM_PER_SHOTS * shots) {
				throw new Error('Not enought coffee beans');
			}
			this.coffeeBean -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOTS;
			return {
				shots,
				hasMilk: false,
			};
		}
	}

	// const maker = new CoffeeMaker(32);
	const maker = CoffeeMaker.makeMachine(32);
	console.log(maker);

	maker.fillCoffeeBean(32);
	console.log(maker);

	/* getter & setter */

	/* class User {
		firstName: string;
		lastName: string;
		fullName: string;

		constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.fullName = `${firstName} ${lastName}`; => update가 반영되지 않는다
		}
	}

	const name = new User('Steve', 'Jobs');
	console.log(name.fullName);     ==>  Steve Jobs

	name.firstName = 'Ellie';  => update
	console.log(name.fullName);   ==>  Steve Jobs */

	class User {
		// private get fullName() { ~~ }
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}

		private internalAge: number = 5;
		get age(): number {
			return this.internalAge;
		}

		set age(num: number) {
			num < 0 ? this.internalAge : (this.internalAge += num);
		}

		constructor(public firstName: string, private lastName: string) {}
	}

	const name = new User('Steve', 'Jobs');
	console.log(name.fullName); // Steve Jobs

	name.firstName = 'Ellie';
	console.log(name.fullName); // Ellie Jobs

	name.age = 5;
	console.log(name.age); // 10
}
