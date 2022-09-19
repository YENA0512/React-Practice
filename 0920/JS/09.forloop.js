for (let i = 0; i < 5; i++) {
	console.log(i);
}
console.log('----------');
for (let i = 1; i < 3; i++) {
	for (let j = 1; j < 10; j++) {
		console.log(i, j);
	}
}
console.log('----------');
for (let i = 0; i < 20; i++) {
	if (i === 10) {
		//continue;
		console.log('10 종료 ');
		break;
	}
	console.log(i);
}
console.log('----------');
let num = 5;
while (num >= 0) {
	console.log(num);
	num--;
}
console.log('----------');

let isRun = true;
let i = 0;
while (isRun) {
	console.log(`i = ${i} `);
	if (i === 10) {
		isRun = false;
	}
	i++;
}
console.log('----------');
//console.log(`i = ${i} `);
console.log('----------');
i = 0;
while (true) {
	console.log(`i = ${i} `);
	if (i === 10) {
		break;
	}
	i++;
}
console.log('----------');
//console.log(`i = ${i} `);
console.log('----------');

do {
	console.log('조건문 상관없이 작동 ');
} while (false);
