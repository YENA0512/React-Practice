class Student {
	static count = 0; // 딱 한번만 만들어진다
	constructor(id, name) {
		this.id = id;
		this.name = name;
		Student.count++;
	}
	// static 메서드는 객체 생성없이 사용 가능
	static getTotalStuCnt() {
		console.log(`총 학생 수 ${Student.count}명`);
	}

	//인스턴스 메서드
	getStuInfo = () => {
		console.log(`id : ${this.id} \t name : ${this.name}`);
	};
}

console.log(Student.count);

const stu1 = new Student(2019122104, 'Park');
const stu2 = new Student(2019206028, 'Kim');
const stu3 = new Student(2019153237, 'Lee');

Student.getTotalStuCnt();

console.log(stu1);
console.log(stu2 instanceof Student);
