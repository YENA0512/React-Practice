const cat = {
	name: '나비',
};

const dog = {
	name: '바둑이',
};

function sayName() {
	console.log(`나는 ${this.name} 이야! `);
}

sayName();
sayName.call(cat);
sayName.call(dog);

function update(age, owner) {
	this.age = age;
	this.owner = owner;
}

update.call(cat, 4, '박연미');
console.log(cat);

update.apply(dog, [5, '아이유']);
console.log(dog);

function Teacher(name) {
	this.name = name;
	this.info = function () {
		console.log(` 강사 이름: ${this.name}`);
	};

	//this.info = this.info.bind(this);
}

function Student(name) {
	this.name = name;
	this.info = function () {
		console.log(` 학생 이름: ${this.name}`);
	};
}

const kim = new Teacher('김선생');
const park = new Student('박학생');

function sayHi(callback) {
	console.log('안녕하세요');
	callback();
}

//sayHi(kim.info);
//sayHi(park.info);
