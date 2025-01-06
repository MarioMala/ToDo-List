/** @format */



export const addDataFn = async (URL) => {
	const addTaskInput = document.querySelector('.add-task__task--input');

	const newTask = {
		title: addTaskInput.value,
		done: false,
	};
	const res = await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(newTask),
	});

};
