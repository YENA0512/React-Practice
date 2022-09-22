const animals = ['개', '고양이', '늑대', '호랑이'];

// for (let i = 0; i < animals.length; i++) {
// 	console.log(animals[i]);
// }

// 고차함수 forEach
// animals.forEach(function (val) {
// 	console.log('val = ', val);
// });

//animals.forEach((val) => console.log('val = ', val));

const cat = { kind: '고양이', age: 4 };
const dog = { kind: '개', age: 13 };
const rabbit = { kind: '토끼', age: 2 };
const hamster = { kind: '햄스터', age: 0.5 };

const pets = [cat, dog, rabbit, hamster, cat]; // 객체배열

// find
let result = pets.find((obj) => obj.kind == '뱀');
//console.log(result); // 없는값 undefined
result = pets.findIndex((obj) => obj.kind == '개');
//console.log(result);
result = pets.some((obj) => obj.kind == '개');
//console.log(result); // true ||
result = pets.every((obj) => obj.kind == '개'); // 모든 값이 해당될때만 true
//console.log(result);
// 배열요소중에 해당되는 요소를 따로 빼서 새로운 배열 만든다
result = pets.filter((obj) => obj.kind === '고양이');
//console.log(result);
// map 배열에서 요소들을 각각 다른요소로 맵핑해서 새로운 배열만듬

const arr = [1, 2, 3];
// result = arr.map((num) => num * 10);
// console.log(result);
// const arr2 = arr.map((num) => [num, num + 1]);
// console.log(arr2);
// result = arr2.flatMap((num) => num);
// console.log(result);
// sort
// let text = ['hi', 'abc', 'ba', 'toy'];
// console.log(text);
// text.sort();
// console.log(text);
// text.reverse();
// console.log(text);
let number = [0, 5, 4, 1, 100];
//number.sort();
// 숫자 오름차순
// number.sort((a, b) => a - b);
// console.log(number);
// // 숫자 내림차순
// number.sort((a, b) => b - a);
// console.log(number);
// 총합 , 갯수
result = number.reduce((sum, value) => {
	console.log(`sum ${sum} , value ${value}`);
	return (sum += value);
}, 0);

console.log('result', result);
