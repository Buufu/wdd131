const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

function createChapterItem() {
	if (!input.value.trim()) return;
	const li = document.createElement('li');
	const deleteButton = document.createElement('button');

	li.textContent = input.value;
	deleteButton.textContent = '❌';
	deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

	li.append(deleteButton);
	list.append(li);
	input.value = '';
	input.focus();
}

button.addEventListener('click', createChapterItem);

list.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const item = e.target.closest('li');
		if (item) item.remove();
	}
});