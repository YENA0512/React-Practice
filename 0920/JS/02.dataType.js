// 데이터 타입 : number
let integer = 10;
let negative = -10;
let double = 3.14;


let binary = 0b0100001;
let octal = 0o101;
let hex = 0xb1;
let bigInt = 123232232332322322222222;
console.log(binary);
console.log(octal);
console.log(hex);
console.log(bigInt);
console.log('---------');


console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);
console.log(Math.pow(10, 3));

console.log(0 / 10);
console.log(10 / 0);
console.log(10 / 'string');

// 데이터 타입 : string
let myName = '박연미';
console.log(myName);
myName = '박연미';
console.log(myName);
myName = `박연미`;
console.log(myName);

let myInfo = "'반갑습니다 제 이름은'" + myName + '입니다.';
console.log(myInfo);

// 특수문자 \n 줄바꿈 \t 탭키
myInfo = "'반갑습니다 \n 제 이름은 \t '" + myName + '입니다.';
console.log(myInfo);

myInfo = `"반갑습니다 \n 제 이름은 ' ${myName} 입니다."`;
console.log(myInfo);

let text = '문자에서의 ' + ' + 는 연결 연산자';
console.log(text);
text = '3' + 10 + 7;
console.log(text);
text = 10 + 7 + '3';
console.log(text);

// 데이터 타입 : boolean

let isActivated = false;
let isMember = true;

console.log(isMember);

// 거짓 값으로 인식하는 데이터
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// 참인 값으로 인식하는 데이터
console.log(!!10);
console.log(!!-3.14);
console.log(!!'String');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

// null, undefined
let animal;
console.log(animal);

animal = null;
console.log(animal);

// typeof 키워드
console.log(typeof null);
console.log(typeof undefined);

animal = 'Dog';
console.log(typeof animal);
