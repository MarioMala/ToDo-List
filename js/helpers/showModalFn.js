/** @format */

export const showModalFn = (modal, showBtnImg) => {
	modal.classList.toggle('active');
	modal.classList.contains('active')
		? (showBtnImg.src = '/assets/icons/close.png')
		: (showBtnImg.src = '/assets/icons/add.png');
};
