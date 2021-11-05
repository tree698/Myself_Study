{
	/**
	 * Type Aliases
	 */

	type Text = string;
	const name: Text = 'ellie';
	const address: Text = 'korea';

	type Num = number;
	const number: Num = 123;

	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: 'ellie',
		age: 12,
	};

	/**
	 * String Literal Types
	 */

	type Name = 'name';
	let ellieName: Name;
	ellieName = 'name';

	type JSON = 'json';
	const json: JSON = 'json';

	type Boal = true;
	const isCat: Boal = true;
}