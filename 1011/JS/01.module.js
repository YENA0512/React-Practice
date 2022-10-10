function hello() {
	console.log('---- hello 함수 ---- ');
	console.log('this = ', this);
	console.log(this === global);
	console.log(this === module.exports);
}

class Person {
	constructor(name) {
		this.name = name;
	}
	info() {
		console.log(' ---- info 메서드 ---- ');
		console.log('this = ', this);
		console.log(this === global);
		console.log('이름: ', this.name);
	}
}

console.log('---- 전역 실행 컨텍스트 ---- ');
hello();

console.log('----------------------');
console.log('this = ', this);
console.log(this === global);
console.log(this === module.exports);

const yeonmi = new Person('박연미');
yeonmi.info();
