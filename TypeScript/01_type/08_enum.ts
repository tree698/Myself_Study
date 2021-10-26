{
	/**
	 * Enum
	 */

	// JavaScript 상수 표현...
	const MAX_NUM = 6;
	const MAX_STUDENT_PER_CLASS = 10;

	//아래와 같이 연관성있는 자료를 묶을 enum은 없다
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESY = 2;

	//그래서 object.freeze를 사용하여 묶는다
	const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESY: 2 });
	const dayOfToday = DAYS_ENUM.MONDAY;
	console.log(dayOfToday); // 0

	// TypeScript는 enum type이 있음
	enum Days {
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		Sunday,
	}
	const day = Days.Tuesday; // day type 추론 생략 => Days
	console.log(day); // 1  (0부터 숫자가 자동입력됨 => 직접 입력 가능)

	let day2: Days = Days.Saturday;
	day2 = Days.Sunday;
	day2 = 10; // enum 이외 값 입력 가능 => 문제!
	console.log(day2); // 10

	// enum 대신 union 사용
	type NewDays = 'Monday' | 'Tuesday' | 'Wednesday';

	let day3: NewDays = 'Monday';
	day3 = 'Wednesday';
	console.log(day3); // Wednesday
}
