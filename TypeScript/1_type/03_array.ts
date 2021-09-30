{
	// Array => 두가지 표현 방식
	const fruits: string[] = ['🍊', '🍑', '🍍']; // 일관성을 위해 사용
	const num: Array<number> = [1, 2, 3];
	function printSomething(something: readonly string[]) {
		// something.push('abc');  => readonly이기 때문에 push로 변경 불가능
		// Array<string>으로 표현하면 readonly 사용 불가
	}

	// Tuple => 서로 다른 type 가능 => interface, type alias, class로 대체
	let student: [string, number];
	student = ['name', 123];
	student[0]; //name
	student[1]; //123
	const [name, age] = student; // react 예 참고
}
