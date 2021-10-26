{
	/**
	 * Type Assertions
	 */

	function jsStrFunc(): any {
		return 'hello';
	}

	const result = jsStrFunc();
	// return type이 any일지라도 return type이 string이라는 것이 확실할때
	// 만일, return type이 number라면 error 또는 undefined가 return
	console.log((result as string).length); // 5
	console.log(<string>result.length); // 5

	const wrong: any = 5;
	console.log((wrong as Array<number>).push(1)); // error

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	numbers.push(2); // 숫자 배열, undefined의 가능성이 있기에 에러 표시
	numbers!.push(2); // 숫자 배열이라는 확신!

	const button = document.querySelector('class');
	// querySelector은 element를 return하던지 element가 없으면 null을 return
	// element 값이 없을 수도 있기에 에러 표시
	button.nodeValue;

	// 그래서, button이 존재한다면, nodeValue 값을 반환하도록 함
	if (button) {
		button.nodeValue;
	}

	// element 값이 있다는 것을 확신할때
	const button2 = document.querySelector('class')!;
}
