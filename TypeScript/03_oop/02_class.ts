{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	class CoffeeMaker {
		static BEANS_GRAM_PER_SHOTS: number = 7; // class level
		coffeeBean: number = 0; // instance (object) level

		constructor(beans: number) {
			this.coffeeBean = beans;
		}

		static makeMachine(beans: number): CoffeeMaker {
			return new CoffeeMaker(beans);
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

	const maker = new CoffeeMaker(32);
	console.log(maker);

	const maker2 = CoffeeMaker.makeMachine(42);
	console.log(maker2);
}
