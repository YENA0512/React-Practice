// 접근제어자 - 캡슐화
// private(#), public(기본)

class Student {
	static #count = 0;
	#id;
	#name;
	constructor(id, name) {
		this.#id = id;
		this.#name = name;
		Student.#count++;
	}

	// 클래스 레벨의 메서드
	static getTotalStuCnt() {
		console.log(`총 학생 수 ${Student.#count}명`);
	}

	#getStuInfo = () => {
		console.log(`id : ${this.#id} \t name : ${this.#name}`);
	};
}

const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
//stu1.#name = '박연미';
console.log(stu1);
//stu1.getStuInfo();
Student.getTotalStuCnt();
