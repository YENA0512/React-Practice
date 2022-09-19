let num1 = 10;
let num2 = 20;

console.log('num1 =', num1);
console.log('num1 =', num1 + 1);
console.log('num1 =', num1);

let result = num1 + num2 * 100;
console.log('result =', result);
// 연산자 우선순위

result = (num1 + num2) * 100;

num2 = num2 + 1;
console.log('num2 =', num2);
num2 += 1; // num2 = num2 + 1 ;
num2 %= 10; // num2 = num2 % 10;
console.log('num2 =', num2);
num2++;
console.log('num2 =', num2);
--num2;
console.log('num2 =', num2);

// 증감 연산자
a = 0;
console.log(a++); // 0
console.log(a); // 1
let b = a++;
console.log(b); //1
console.log(a); //2

//비교연산자
console.log('비교연산자');
console.log(10 > 3);
console.log(10 < 3);
console.log(10 <= 3);
console.log(10 >= 3);
console.log(10 == 3);
console.log(10 != 3);

// == 과 === 차이
console.log('== 과 === 차이');
num1 = 10;
console.log(10 == '10');
console.log(num1 == '10');
console.log(num1 === '10');
console.log('------');
console.log(true == 1);
console.log(true === 1);
console.log('------');
let bool = false;
console.log(bool != 1);
console.log(bool !== 1);
let cat = {
	name: '별이',
};
let dog = {
	name: '별이',
};
console.log('오브젝트 비교');
console.log(cat == dog);
console.log(cat === dog);
console.log(cat.name == dog.name);
console.log(cat.name === dog.name);

let rabbit = dog;
console.log(rabbit.name == dog.name);
console.log(rabbit.name === dog.name);

// 논리연산자

console.log('논리 연산자 ');

// && 모든 값이 참이면 참 , 한개라도 거짓이면 거짓
// || 한개라도 참이면 참 ,

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

num1 = 0;
bool = true;

console.log(num1 > 4 || (cat.name == '별이' && bool));

// 활용 예제
const kor = 80;
const math = 90;
const eng = 60;
const avg = (kor + math + eng) / 3;

console.log('avg = ', avg);

// 평균값이 60점 이상이고 각각 점수가 80점 이상일때 통과
console.log(avg >= 60 && kor >= 80 && math >= 90 && eng >= 90);

let pass = avg >= 60 && kor >= 80 && math >= 90 && eng >= 90;

console.log('pass =', pass);
console.log('pass =', !pass); // true => false false -> true
console.log('0 =', !!0);
