'use strict';

/**
 * class가 callback 함수를 받는 경우
 * 다양한 callback 함수를 통해 더 많은 기능 수행이 가능하고
 * class의 재샤용성이 높아짐 (틀 제공!)
 * class는 완전체가 아닌 조립이 가능하도록 만듬
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
	}
}

// callback 함수
function printCount(count) {
	console.log(`Yo! ${count}`);
}

// callback 함수
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
