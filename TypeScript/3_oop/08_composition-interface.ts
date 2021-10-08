{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	/* interface */
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}
	interface MilkFroter {
		makeMilk(cup: CoffeeCup): CoffeeCup;
	}
	interface SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup;
	}

	/* main class */
	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOTS: number = 7;
		private coffeeBean: number = 0;

		constructor(
			beans: number,
			private milk: MilkFroter,
			private sugar: SugarProvider
		) {
			this.coffeeBean = beans;
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
			const coffee = this.extract(shots);
			const coffeeMilk = this.milk.makeMilk(coffee);
			return this.sugar.addSugar(coffeeMilk);
		}
	}

	/* MilkFroter */
	class CheapMilkSteamer implements MilkFroter {
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
	class FancyMilkSteamer implements MilkFroter {
		private steamMilke() {
			console.log('Fancy steaming some milk...');
		}

		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilke();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}
	class ColdMilkSteamer implements MilkFroter {
		private steamMilke() {
			console.log('Cold steaming some milk...');
		}

		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilke();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}
	class NoMilk implements MilkFroter {
		makeMilk(cup: CoffeeCup): CoffeeCup {
			return cup;
		}
	}

	/* SugarProvider */
	class CandySugarMixer implements SugarProvider {
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
	class BlackSugarMixer implements SugarProvider {
		private getSugar(): boolean {
			console.log('Getting some black sugar...');
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
	class NoSugar implements SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup {
			return cup;
		}
	}

	/* class */
	const cheapMilk = new CheapMilkSteamer();
	const fancyMilk = new FancyMilkSteamer();
	const coldMilk = new ColdMilkSteamer();
	const noMilk = new NoMilk();
	const candySugar = new CandySugarMixer();
	const blackSugar = new BlackSugarMixer();
	const noSugar = new NoSugar();

	/* coffee machine */
	const regularCoffee = new CoffeeMachine(30, noMilk, noSugar);
	const cafeLatte1 = new CoffeeMachine(30, fancyMilk, noSugar);
	const cafeLatte2 = new CoffeeMachine(30, cheapMilk, noSugar);
	const sweetCoffee1 = new CoffeeMachine(30, noMilk, candySugar);
	const sweetCoffee2 = new CoffeeMachine(30, noMilk, blackSugar);
	const sweetCafeLatte = new CoffeeMachine(30, coldMilk, blackSugar);

	console.log('==============================');
	console.log(regularCoffee.makeCoffee(1));
	console.log('==============================');
	console.log(cafeLatte1.makeCoffee(1));
	console.log('==============================');
	console.log(cafeLatte2.makeCoffee(1));
	console.log('==============================');
	console.log(sweetCoffee1.makeCoffee(1));
	console.log('==============================');
	console.log(sweetCoffee2.makeCoffee(1));
	console.log('==============================');
	console.log(sweetCafeLatte.makeCoffee(1));
}
