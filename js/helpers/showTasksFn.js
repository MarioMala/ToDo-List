import { URL } from "./api.js";

export const showTasksFn = (task, taskBox) => {
	const li = document.createElement('li');
	li.classList.add('task__box--task');

	const divText = document.createElement('div');
	divText.classList.add('text');
	divText.innerHTML = task.title;

	const divBtnsBox = document.createElement('div');
	divBtnsBox.classList.add('buttons');

	const btnDone = document.createElement('button');
	btnDone.classList.add('btn');
	btnDone.classList.add('done-btn');

	http: btnDone.addEventListener('click', async e => {
		const res = await fetch(`${URL}/${task.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...task, done: true }),
		});
	});

	if (task.done) {
		divText.classList.add('done');
		btnDone.style.display = 'none';
	} else {
		divText.classList.remove('done');
	}

	const btnDoneImg = document.createElement('img');
	btnDoneImg.src = './assets/icons/done.png';
	btnDoneImg.alt = 'Zrobiony';
	btnDone.appendChild(btnDoneImg);

	const btnEdit = document.createElement('button');
	btnEdit.classList.add('btn');
	btnEdit.classList.add('edition-btn');

	btnEdit.addEventListener('click', () => console.log(URL));

	const btnEditImg = document.createElement('img');
	btnEditImg.src = './assets/icons/edit.png';
	btnEditImg.alt = 'Edycja';
	btnEdit.appendChild(btnEditImg);

	const btnDel = document.createElement('button');
	btnDel.classList.add('btn');
	btnDel.classList.add('delete-btn');
	btnDel.alt = 'Usuwanie';

	btnDel.addEventListener('click', async e => {
		const res = await fetch(`${URL}/${task.id}`, {
			method: 'DELETE',
		});
	});

	const btnDelImg = document.createElement('img');
	btnDelImg.src = './assets/icons/trash.png';

	btnDel.appendChild(btnDelImg);

	divBtnsBox.append(btnDone, btnEdit, btnDel);

	li.append(divText, divBtnsBox);
	taskBox.append(li);
};
