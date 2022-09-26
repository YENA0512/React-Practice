class Student {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		//this.info = `${this.id} : ${this.name}`;
	}
	get info() {
		return `${this.id} : ${this.name}`;
	}
}

const student = new Student(20121234, '박연미');
console.log(student.info);
student.name = '아이유';

console.log(student.info);

//console.log(student.info());

// 은닉화 private getter and setter

class Counter {
	#value;
	constructor(start) {
		if (start < 0) {
			this.#value = 0;
		} else {
			this.#value = count;
		}
	}

	get value() {
		return this.#value;
	}
	increase() {
		this.#value++;
	}

	set value(setValue) {
		this.#value = setValue < 0 ? 0 : setValue;
	}
}

const counter = new Counter(5);
console.log(counter);
console.log(counter.value);
counter.increase();
counter.increase();
counter.increase();

counter.value = -100;
console.log(counter.value);
