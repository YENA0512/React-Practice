let yeonmi = {
	firstName: '연미',
	'last-name': '박',
};

let object = {
	0: 1,
	1: 2,
	2: 3,
};

console.log(object);

let cat = {
	name: '나비',
	name: '냐옹이',
};
console.log(cat);

let person = {
	// 프로퍼티
	name: '박연미',

	// 메서드
	sayHello: function () {
		console.log(` 안녕하세요 ${this.name} 입니다 `);
	},
};
console.log(person);

// ES5
let prefix = 'product';
let i = 0;

let proList = {};

// 계산된 프로퍼티 이름
proList[prefix + '-' + ++i] = i;
proList[prefix + '-' + ++i] = i;
proList[prefix + '-' + ++i] = i;

console.log(proList);

// ES6
i = 0;

proList = {
	[`${prefix}-${++i}`]: i,
	[`${prefix}-${++i}`]: i,
	[`${prefix}-${++i}`]: i,
};

console.log(proList);

// 객체 축약 생성

// ES5
const x = 1,
	y = 2;

const obj = {
	x: x,
	y: y,
};
console.log(obj);

// ES6

const newObj = { x, y };

console.log(newObj);

//ES6
person = {
	// 프로퍼티
	name: '박연미',

	// 메서드
	sayHello() {
		console.log(` 안녕하세요 ${this.name} 입니다 `);
	},
};

console.log(person);
person.sayHello();
