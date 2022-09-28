// 프로토타입을 베이스로한 객체지향 프로그래밍
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.eat = function () {
	console.log(`${this.name}은 밥을 먹는다 `);
};

function Teacher(name, age, teacherNo) {
	// super(name, age)
	Person.call(this, name, age);
	this.teacherNo = teacherNo;
}

Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher);

Teacher.prototype.teach = () => {
	console.log('가르친다');
};

function Student(name, age) {
	Person.call(this, name, age);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = () => {
	console.log(`공부하자!! `);
};

const yeonmi = new Teacher('박연미', 30, 12341234);
yeonmi.teach();
yeonmi.eat();
const hgd = new Student('홍길동', 20);
hgd.eat();
hgd.study();

console.log(yeonmi instanceof Teacher);
console.log(yeonmi instanceof Person);
console.log(yeonmi instanceof Student);
console.log('-------------');
console.log(hgd instanceof Teacher);
console.log(hgd instanceof Person);
console.log(hgd instanceof Student);
