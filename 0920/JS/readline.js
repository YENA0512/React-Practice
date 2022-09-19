const readline = require('readline');

const r = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

r.write(' 터미널 창에 줄 쓰기 \n'); // 한줄 쓰기

let num1 = 1;
let num2 = 3;
let result = num1 + num2;

r.question(`${num1} + ${num2} =  ? \n`, (userInput) => {
	console.log(`내가 입력한 값 ', ${userInput}`);
	if (userInput.trim() == result) {
		r.close();
	} else {
		r.on('line', (userInput) => {
			if (userInput.trim() == result) r.close();
			else {
				r.setPrompt(`${userInput} 틀림 다시 시도하세요 \n`);
				r.prompt();
			}
		});
	}
});

r.on('close', () => {
	console.log(` 정답 입니다! `);
	console.log(` 프로그램 종료 `);
	process.exit();
});
