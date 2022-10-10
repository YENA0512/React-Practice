let count = 1;

setInterval(() => {
	console.log(count++);
}, 1000);

console.time('타이머');

// const interval = setInterval(() => {
// 	console.log(count++);
// }, 1000);

// setTimeout(() => {
// 	console.log('타이머 종료');
// 	console.timeEnd('타이머');
// 	clearInterval(interval);
// }, 5 * 1000);

console.time('반복문');
for (let i = 0; i < 10; i++) {
	console.log('i=', i);
}
console.timeEnd('반복문');
