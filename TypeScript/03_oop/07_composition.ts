{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
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

	class CheapMilkSteamer {
		private steamMilke() {
			console.log('Steaming some milk...');
		}

		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilke();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	class CafeLatteMachine extends CoffeeMachine {
		constructor(
			beans: number,
			public readonly serialNumber: string,
			private milkFroter: CheapMilkSteamer
		) {
			super(beans);
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milkFroter.makeMilk(coffee);
		}
	}

	class CandySugarMixer {
		private getSugar(): boolean {
			console.log('Getting some sugar...');
			return true;
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}

	class SweetCoffeeMachine extends CoffeeMachine {
		constructor(beans: number, private sugar: CandySugarMixer) {
			super(beans);
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.sugar.addSugar(coffee);
		}
	}

	class SweetCafeLatteMachine extends CoffeeMachine {
		constructor(
			private beans: number,
			private milkFroter: CheapMilkSteamer,
			private sugar: CandySugarMixer
		) {
			super(beans);
		}

		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			const sugarAdded = this.sugar.addSugar(coffee);
			return this.milkFroter.makeMilk(sugarAdded);
		}
	}

	const cheapMilk = new CheapMilkSteamer();
	const candySugar = new CandySugarMixer();
	const sweetCafeeLattee = new SweetCafeLatteMachine(31, cheapMilk, candySugar);
	const coffee = sweetCafeeLattee.makeCoffee(1);
	console.log(coffee);
}
