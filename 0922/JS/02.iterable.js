
// ES6 버전 부터 for of 랑 spread 연산자 사용 가능 

const array = [1, 2, 3];
for (const item of array) {
	console.log(item);
}

console.log(Symbol.iterator in array);
const object = { a: 1, b: 2 };

for (const element in object) {
	console.log(element);
}
console.log(Symbol.iterator in object); 


const iterator = array.values();
//console.log(iterator.next()); 
//console.log(iterator.next()); 
//console.log(iterator.next());
//console.log(iterator.next());

while (true) {
	const item = iterator.next();
	if (item.done) break;
	console.log(item.value);
}

console.log('------');
for (let item of array) {
	console.log(item);
}

console.log('------');
for (let item of array.values()) {
	console.log(item);
}

console.log('------');
const obj = { id: 123, name: 'Ellie' };
for (const key in obj) {
	console.log(key);
}

console.log('------');

const evenMaker = {
	[Symbol.iterator]: () => {
		const max = 5;
		let num = 0;
		return {
			next() {
				return { value: num++ * 2, done: num > max };
			},
		};
	},
};

for (const num of evenMaker) {
	console.log(num);
}
