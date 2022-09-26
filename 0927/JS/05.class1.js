function oldPet(kind, name, age) {
	this.kind = kind;
	this.name = name;
	this.age = age;
	this.info = () => {
		console.log(`-- ${this.kind} -- `);
		console.log(`이름 : ${this.name}`);
		console.log(`나이 : ${this.age}`);
	};
}

// 2. 클래스

class Pet {
	constructor(kind, name, age) {
		this.kind = kind;
		this.name = name;
		this.age = age;
		// this.info : ()=>{}
	}
	info = () => {
		console.log(`-- ${this.kind} -- `);
		console.log(`이름 : ${this.name}`);
		console.log(`나이 : ${this.age}`);
	};
}

const cat = new Pet('고양이', '나비', 2);
const rabbit = new Pet('토끼', '토순이', 1);

console.log(cat);
console.log(rabbit);
cat.info();
rabbit.info();

const person = { name: '박연미' };
// Pet.info()
console.log(Pet.name);
