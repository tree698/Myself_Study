{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface CommercialCoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
		fillCoffeeBeans(beans: number): void;
		clean(): void;
	}

	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
		private static BEANS_GRAM_PER_SHOTS: number = 7;
		private coffeeBean: number = 0;

		private constructor(beans: number) {
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

		repair() {
			console.log('Repair the coffee machine...');
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

	const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
	maker.fillCoffeeBeans(10);
	maker.makeCoffee(1);
	maker.clean();
	maker.repair();

	const maker2: CoffeeMaker = CoffeeMachine.makeMachine(33);
	maker2.makeCoffee(2);

	const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(30);
	maker3.fillCoffeeBeans(2);
	maker3.makeCoffee(1);
	maker3.clean();

	class AmateurUser {
		constructor(private machine: CoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(1);
			console.log(coffee);
		}
	}

	class ProBaristar {
		constructor(private machine: CommercialCoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
			this.machine.fillCoffeeBeans(100);
			this.machine.clean();
		}
	}

	const maker4 = new AmateurUser(maker);
	maker4.makeCoffee();

	const maker5 = new ProBaristar(maker);
	maker5.makeCoffee();
}
