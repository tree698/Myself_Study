'use strict;';

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const formSubmit = document.querySelector('.form__submit');

function onAdd() {
	const text = input.value;
	if (text === '') {
		alert('Please, enter an item');
		input.focus();
		return;
	}
	const item = createItem(text);
	items.appendChild(item);
	item.scrollIntoView({ behavior: 'smooth', block: 'end' });
	input.value = '';
	input.focus();
}

// UUID
let id = 0;
function createItem(text) {
	const itemRow = document.createElement('li');
	itemRow.setAttribute('class', 'item__row');
	itemRow.setAttribute('data-id', id);

	itemRow.innerHTML = `
		<div class="item">
			<span class="item__name">${text}</span>
			<button class="item__delete">
				<i class="far fa-trash-alt" data-id = ${id}></i>  
			</button>
		</div>
		<div class="item__divider"></div>
	`;
	id++;
	return itemRow;
}

formSubmit.addEventListener('submit', (event) => {
	event.preventDefault(); // form 태그가 submit되면 다른 페이지로 이동하기 때문에 이를 방지
	onAdd();
});

items.addEventListener('click', (event) => {
	const id = event.target.dataset.id; // data-id="123" => dataset.id
	if (id) {
		const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
		toBeDeleted.remove();
	}
});
