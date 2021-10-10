'use strict';

/**
 * Event.preventDefault()
 * 브라우저에서 기본적으로 발생하는 동작을 취소
 */

const checkbox = document.querySelector('input');
checkbox.addEventListener('click', (event) => {
	console.log('checked');
	event.preventDefault(); // (active event listener)인 click 時, input의 checkbox가 작동 안함
});

document.addEventListener('wheel', (event) => {
	console.log('scrolling');
	event.preventDefault(); // (passive event listener)인 wheel에서는 취소되지 않음
	// wheel 이벤트 실행 & console에 error 표시
	// passive event listener에서 사용 안하는 것이 좋음
});

document.addEventListener(
	'wheel',
	(event) => {
		console.log('scrolling');
		event.preventDefault();
	},
	{ passive: false } // passive 설정 변경으로 preventDefault 실행
);

const input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
	if (event.key === 'a') {
		event.preventDefault(); // a는 입력되지 않는다
	}
});

input.addEventListener('keyup', (event) => {
	if (event.key === 'a') {
		event.preventDefault(); // keyup된 이후이므로 a는 입력된다
	}
});

// (end)
