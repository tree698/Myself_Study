{
	/**
	 * Type Inference
	 */

	let text = 'hello';
	// text = 12;  Type inference로 string이기에 에러 발생

	function print(message = 'hello') {
		console.log(message);
	}
	print('hello');
	// print(1);  Type inference로 string이기에 에러 발생

	function add(x: number, y: number) {
		return x + y; // Type inference로 number
	}
	const result = add(1, 2); // Type inference로 number
}
