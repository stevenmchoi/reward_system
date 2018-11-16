import fetch from 'unfetch';

export default async () => {
	let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

	return JSON.stringify(res);
};
