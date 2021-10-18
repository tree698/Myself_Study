{
	// 모든 type에 대해 만들어야 함
	function checkNotNullBad(arg: number | null): number {
		if (arg === null) {
			throw new Error('not valid number');
		}
		return arg;
	}

	function checkNotNullAnyBad(arg: any | null): any {
		if (arg === null) {
			throw new Error('not valid number');
		}
		return arg;
	}

	// type of num is any => type 정보를 잃어버림
	const any = checkNotNullAnyBad(123);
	console.log(any);

	function checkNotNull<T>(arg: T | null): T {
		if (arg === null) {
			throw new Error('not valid number');
		}
		return arg;
	}

	const num = checkNotNull(123);
	const boal: boolean = checkNotNull(true);

	console.log(num);
	console.log(boal);
}
