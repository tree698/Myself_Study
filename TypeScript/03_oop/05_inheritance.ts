{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOTS: number = 7;
		private coffeeBean: number = 0;

		constructor(beans: number) {
			// protected 상속에만 허용
			this.coffeeBean = beans;
		}

		static makeMachine(beans: number): CoffeeMachine {
			if (beans < 0) {
				throw new Error('Value for beans should be greater than zero');
			}
			return new CoffeeMachine(beans);
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error('Value for beans should be greater than zero');
			}
			this.coffeeBean += beans;
		}

		clean() {
			console.log('Clean the coffee machine...');
		}

		private grindBeans(shots: number) {
			console.log(`Grinding beans for ${shots}`);
			if (this.coffeeBean < CoffeeMachine.BEANS_GRAM_PER_SHOTS * shots) {
				throw new Error('Not enought coffee beans');
			}
			this.coffeeBean -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOTS;
		}

		private preheat(): void {
			console.log('heating up....🔥');
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots...`);
			return {
				shots,
				hasMilk: false,
			};
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	class CafeLatteMachine extends CoffeeMachine {
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);
		}

		private steamMilk(): void {
			console.log('Steaming some milk...');
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
				hasMilk: true,
			};
		}
	}

	const latteMachine = new CafeLatteMachine(30, 'SSN');
	const coffee = latteMachine.makeCoffee(2);
	console.log(coffee);
	console.log(latteMachine.serialNumber);
}
