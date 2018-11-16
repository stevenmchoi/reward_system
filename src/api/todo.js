import fetch from 'unfetch';

// export default () => {
// 	fetch('https://jsonplaceholder.typicode.com/todos/1')
// 		.then((r) => r.json())
// 		.then((data) => {
// 			return data;
// 		});
// };

export default () => fetch('https://jsonplaceholder.typicode.com/todos/1');
