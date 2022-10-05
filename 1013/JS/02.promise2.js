// function runInDelay(callback, seconds) {
// 	if (!callback) {
// 		throw new Error('callback 함수가 아니다 ');
// 	}
// 	if (!seconds || seconds < 0) {
// 		throw new Error('0 보다 큰 ms초 단위가 들어와야한다');
// 	}
// 	setTimeout(callback, seconds * 1000);
// }

// try {
// 	runInDelay(() => {
// 		console.log('타이머 종료');
// 	}, 2);
// } catch (error) {
// 	console.log(error);
// }



// function runTimer(seconds) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (!seconds || seconds < 0) {
// 				reject(new Error('0 보다 큰 ms초 단위가 들어와야한다'));
// 			} else {
// 				resolve(`${seconds} 초가 지났습니다`);
// 			}
// 		}, seconds * 1000);
// 	});
// }

// runTimer(-2)
// 	.then(() => console.log('타이머 종료'))
// 	.catch(console.error)
// 	.finally(() => console.log('프로그램 종료'));
