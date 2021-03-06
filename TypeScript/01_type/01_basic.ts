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

	// undefined ๐ฉ
	let name: undefined;
	let age: number | undefined;
	age = undefined; // ๊ฐ๋ฅ
	age = 30; // ๊ฐ๋ฅ
	function find(): number | undefined {
		return undefined;
	}

	// null ๐ฉ
	let person: null;
	let person2: string | null;

	// unknown ๐ฉ
	let notSure: unknown; // JavaScript์ ์ฐ๋ํ๊ธฐ ์ํด ์ฌ์ฉ
	notSure = 'he'; // ๊ฐ๋ฅ
	notSure = true; // ๊ฐ๋ฅ

	// any ๐ฉ
	let anything: any = 0;
	anything = 'hello';

	// void
	function print(): void {
		console.log('hello');
		return;
	}
	let unusable: void = undefined; // ๐ฉ

	// never -> no return
	function throwError(message: string): never {
		// message -> server (long)
		throw new Error(message);
		while (true) {}
	}
	let neverEnding: never; // ๐ฉ

	// object ๐ฉ -> ๊ฐ key๋ณ ๊ตฌ์ฒด์  type ๋ช์ ํ์
	let obj: object;
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: 'ellie' });
	acceptSomeObject({ animal: 'dog' });
}
