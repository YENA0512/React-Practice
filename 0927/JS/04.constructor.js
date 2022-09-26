let cat = {
	kind: '고양이',
	name: '나비',
	age: 2,
	info: function () {
		console.log(`-- ${this.kind} -- `);
		console.log(`이름 : ${this.name}`);
		console.log(`나이 : ${this.age}`);
	},
};
let dog = {
	kind: '강아지',
	name: '바둑이',
	age: 2,
	info: function () {
		console.log(`-- ${this.kind} -- `);
		console.log(`이름 : ${this.name}`);
		console.log(`나이 : ${this.age}`);
	},
};

function Pet(kind, name, age) {
	this.kind = kind;
	this.name = name;
	this.age = age;
	this.info = () => {
		console.log(`-- ${this.kind} -- `);
		console.log(`이름 : ${this.name}`);
		console.log(`나이 : ${this.age}`);
	};
	// return this;
}

const hamster = new Pet('햄스터', '햄찌', 0.5);
const rabbit = new Pet('토끼', '토순이', 1);

console.log(cat);
console.log(rabbit);
cat.info();
rabbit.info();
