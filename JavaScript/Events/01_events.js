'use strict';

/**
 * event handler / event listeners : a block of code thant runs when the event fires
 * mouse click
 * keyboard
 * resizing window
 * close window
 * page loading
 * form submission
 * video is being played
 * error
 */

// #1. Ways of using web events
const btn = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random() * (number + 1)); // Math.random => [0, 1)
}

btn.onclick = function () {
	const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; // rgb [0, 255]
	document.body.style.backgroundColor = rndCol;
};

/**
 * btn.onfocus
 * btn.onblur
 * btn.ondblclick
 * windows.onkeydown
 * window.onkeyup
 * btn.onmouseover
 * btn.onmouseout
 */

function bgChange() {
	const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
	document.body.style.backgroundColor = rndCol;
}

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = bgChange;
}

buttons.forEach((item) => (item.onclick = bgChange));

// #2. EventTarget => DOM interface
btn.addEventListener('click', bgChange);
btn.removeEventListener('click', bgChange);
btn.dispatchEvent(new Event('click'));

//(end)
