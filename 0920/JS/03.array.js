
let arr = [1, 2, 3, 4];
console.log(arr);
let array = new Array(3); 
console.log(array);
array = new Array(1, 2, 3);
console.log(array);
array = Array.of(1, 2, 3, 4, 5); 
console.log(array);

// 값추가
let subject = [];
console.log(subject);
subject[0] = 'javascript';
subject[1] = 'html';
subject[2] = 'css';

console.log(subject.length); 

// 값 삭제
delete subject[1];
console.log(subject);

