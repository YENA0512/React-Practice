// Spread 연산자, 전개구문

console.log(...arr1);
let a = { ...arr1 };
let b = [...arr1];
console.log(a);
console.log(b);

//ES5에서 배열 합치기
let arr1 = [2, 3, 4];
let arr2 = [5, 6, 7];
let merged = arr1.concat(arr2);
//ES6에서 배열 합치기
const newMerged = [...arr1, ...arr2];

//ES5에서 배열 복사하기
let copied1 = arr1.slice();

//ES6에서 배열 복사하기
const newCopied = [...arr1];

//ES5에서 오브젝트 합치기
let obj1 = { a: 3 };
let obj2 = { b: 4 };
let mergedObj = Object.assign({}, obj1, obj2);

//ES5에서 오브젝트 복사하기
let copiedObj = Object.assign({}, obj1);
//ES6 오브젝트 복사하기
const newCopiedObj = { ...obj1 };

// 함수 인자값
function sum(a, b, c) {
	return a + b + c;
}
let pre = [100, 200, 300];
console.log('sum=', sum(...pre));

// Rest parameters

function sum(first, second, ...nums) {
	console.log(first);
	console.log(second);
	console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Object 주의사항

const nabi = {
	name: '나비',
	kind: '고양이',
	actions: ['잠자기', '먹기'],
};

let update1 = Object.assign({}, nabi);
update1.age = 4;

console.log(update1);
console.log('==========');
update2 = { ...nabi, age: 4 };
console.log(update2);
console.log('==========');
update2.name = '냐옹이';
console.log(nabi);
console.log(update2);
update2.actions[0] = '낮잠자기';
console.log(nabi);
console.log(update2);
