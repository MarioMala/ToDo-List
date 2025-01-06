/** @format */

export const getDataFn = async URL => {
	const data = (await fetch(URL)).json();
	return data;
};
