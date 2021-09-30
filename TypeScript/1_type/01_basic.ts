{
	/**
	 * JavaScript
	 * Primitive: number, boolean, string, undefined, null, symbol, bigint
	 * Object: function, array....
	 */

	// number
	const num: number = 6;

	// string
	const str: string = 'hello';

	// boolean
	const boal: boolean = true;

	// undefined 💩
	let name: undefined;
	let age: number | undefined;
	age = undefined; // 가능
	age = 30; // 가능
	function find(): number | undefined {
		return undefined;
	}

	// null 💩
	let person: null;
	let person2: string | null;

	// unknown 💩
	let notSure: unknown; // JavaScript와 연동하기 위해 사용
	notSure = 'he'; // 가능
	notSure = true; // 가능

	// any 💩
	let anything: any = 0;
	anything = 'hello';

	// void
	function print(): void {
		console.log('hello');
		return;
	}
	let unusable: void = undefined; // 💩

	// never -> no return
	function throwError(message: string): never {
		// message -> server (long)
		throw new Error(message);
		while (true) {}
	}
	let neverEnding: never; // 💩

	// object 💩 -> 각 key별 구체적 type 명시 필요
	let obj: object;
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: 'ellie' });
	acceptSomeObject({ animal: 'dog' });
}
