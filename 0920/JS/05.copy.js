// 얕은 복사 깊은 복사

// 깊은 복사
// 값 자체를 복사해서 기존 값에 영향을 미치지 않음

let myName = '박연미';
let yourName = myName; // myName 값을 복사해옴
console.log('myName=', myName);
console.log('yourName=', yourName);

yourName = '아이유';
console.log('myName=', myName);
console.log('yourName=', yourName);

// 값이 yourName만 변경된거 확인 => 원시타입는 값이 복사되어 전달됨
// 기존값에 영향 미치지 않음

let cat = {
	name: 'nabi',
};
console.log('복사 전 =', cat);

let dog = cat;
dog.name = '멍멍이';

console.log('복사 후 cat=', cat);
console.log('복사 후 dog=', dog);
