// 객체를 동적으로 접근하기

let cat = {
	name: '나비',
	age: 2,
};

function getValue(obj, key) {
	return obj[key];
}
//console.log(getValue(cat, 'name'));

function addKey(obj, key, value) {
	obj[key] = value;
}
addKey(cat, 'owner', { name: '박연미' });
//console.log(cat);

function deleteKey(obj, key) {
	delete obj[key];
}

const person = {
	name: '박연미',

	sayHello() {
		console.log('---------hello ------');
		console.log(this);
		console.log(`this 값은 : ${this}`);
		console.log(` 안녕하세요 ${this.name} 입니다 `);
	},
};

function sayHello() {
	console.log('---------hi ------');
	console.log(`this 값은 : ${this}`);
	console.log(` 안녕하세요 ${this.name} 입니다 `);
}

console.log(person);
console.log(this);

person.sayHello();
sayHello();
