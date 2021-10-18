{
	interface Either<L, R> {
		left(): L;
		right(): R;

		// left: () => L;
		// right: () => R;
	}

	class SimpleEither<L, R> implements Either<L, R> {
		constructor(private leftValue: L, private rightValue: R) {}

		left(): L {
			return this.leftValue;
		}

		right(): R {
			return this.rightValue;
		}
	}

	// 다양한 type을 받을 수 있다
	const test1: Either<number, number> = new SimpleEither(1, 2);
	test1.left(); // 1
	test1.right(); // 2

	const test2 = new SimpleEither('good', 45);
	test2.left(); // good
	test2.right(); // 45

	const test3 = new SimpleEither({ name: 'ellie', age: 40 }, true);
	test3.left(); // { name: 'ellie', age: 40 }
	test3.right(); // true
}
