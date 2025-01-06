/** @format */

import { URL } from './helpers/api.js';

// showModal items
const showBtn = document.querySelector('.show-btn');
const showBtnImg = document.querySelector('.show__img');

//addTasks items
const modal = document.querySelector('.add-task');
const addTaskInput = document.querySelector('.add-task__task--input');
const addTaskBtn = document.querySelector('.add-task__add--btn');
const taskBox = document.querySelector('.task__box');

//helpers function
import { showModalFn } from './helpers/showModalFn.js';
import { showTasksFn } from './helpers/showTasksFn.js';
import { getDataFn } from './helpers/getDataFn.js';
import { addDataFn } from './helpers/addDataFn.js';

const TASKS = await getDataFn(URL);

TASKS.map(task => {
	showTasksFn(task, taskBox);
});

showBtn.addEventListener('click', () => showModalFn(modal, showBtnImg));
addTaskBtn.addEventListener('click', () => addDataFn(URL));
