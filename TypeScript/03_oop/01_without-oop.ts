{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	const BEANS_GRAM_PER_SHOTS: number = 7;
	let coffeeBean: number = 0;

	function makeCoffee(shots: number): CoffeeCup {
		if (coffeeBean < BEANS_GRAM_PER_SHOTS * shots) {
			throw new Error('Not enought coffee beans');
		}
		coffeeBean -= shots * BEANS_GRAM_PER_SHOTS;
		return {
			shots,
			hasMilk: false,
		};
	}

	coffeeBean += BEANS_GRAM_PER_SHOTS * 3;
	const coffee = makeCoffee(2);
	console.log(coffee);
}
