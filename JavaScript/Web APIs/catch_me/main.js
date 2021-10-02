'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
	const targetRect = target.getBoundingClientRect();
	const targetHalfWidth = targetRect.width / 2;
	const targetHalfHeight = targetRect.height / 2;

	// defer => HTML parsing > JS fetching => resources가 준비되지 않은 상태에서 JS 실행
	console.log(targetRect); // 확인 with, height = > 0

	const windowinnerWith = window.innerWidth / 2;
	const windowinnerHeight = window.innerHeight / 2;

	document.addEventListener('mousemove', (event) => {
		let X = event.clientX;
		let Y = event.clientY;

		tag.textContent = `${X}px ${Y}px`;

		/** 성능 개선 前 */
		// horizontal.style.top = `${Y}px`;
		// vertical.style.left = `${X}px`;
		// target.style.top = `${Y}px`;
		// target.style.left = `${X}px`;
		// tag.style.top = `${Y}px`;
		// tag.style.left = `${X}px`;

		/** 성능 개선 後 => 초기화면 구현되지 않음 */
		// horizontal.style.transform = `translateY(${Y}px)`;
		// vertical.style.transform = `translateX(${X}px)`;
		// target.style.transform = `translate(${X - targetHalfWidth}px, ${
		// 	Y - targetHalfHeight
		// }px)`;
		// tag.style.transform = `translate(${X + 20}px, ${Y + 20}px)`;

		/** 성능 개선 => 초기화면 구현 */
		horizontal.style.transform = `translateY(${Y - windowinnerHeight}px)`;
		vertical.style.transform = `translateX(${X - windowinnerWith}px)`;
		target.style.transform = `translate(${
			X - windowinnerWith - targetHalfWidth
		}px, ${Y - windowinnerHeight - targetHalfHeight}px)`;
		tag.style.transform = `translate(${X - windowinnerWith + 30}px, ${
			Y - windowinnerHeight + 30
		}px)`;
	});
});
