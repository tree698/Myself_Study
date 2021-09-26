'use strict';

/**
 * class가 callback 함수를 받는 경우
 */

class Count {
	constructor(runIfFiveTimes) {
		this.callback = runIfFiveTimes;
		this.count = 0;
	}

	increase() {
		this.count++;

		console.log(this.count);

		if (this.count % 5 === 0) {
			// callback 함수가 없을 경우 대비
			this.callback && this.callback(this.count);
		}

		// callback 함수에서 더 많은 기능 수행할 경우
		// this.callback && this.callback(this.count);
	}
}

function printCount(count) {
	console.log(`Yo! ${count}`);
}

function alertCount(count) {
	alert(`Yo! ${count}`);
}

const countPrint = new Count(printCount);
const countAlert = new Count(alertCount);

countPrint.increase();
countPrint.increase();
countPrint.increase();
countPrint.increase();
countPrint.increase();
countPrint.increase();

countAlert.increase();
countAlert.increase();
countAlert.increase();
countAlert.increase();
countAlert.increase();
countAlert.increase();
