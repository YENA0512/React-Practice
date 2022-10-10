function getId(phoneNumber) {
	setTimeout(() => {
		console.log('전화번호 : ', phoneNumber);
	}, 1000);
	return 'testId';
}
function getEmail(id) {
	setTimeout(() => {
		console.log('아이디 : ', id);
	}, 2000);
	return 'test@naver.com';
}
function getName(email) {
	setTimeout(() => {
		console.log('이메일 : ', email);
	}, 3000);
	return '박연미';
}
function order(name, menu) {
	setTimeout(() => {
		console.log(`${name}님이 주문하신 ${menu} 나왔습니다  `);
	}, 4000);
}

function* orderCoffee(phoneNumber) {
	try {
		const id = yield getId(phoneNumber);
		const email = yield getEmail(id);
		const name = yield getName(email);
		const result = yield order(name, '아메리카노');
		return result;
	} catch (error) {
		console.log('예상치 못한 에러');
	}
}

function run(phoneNumber) {
	const iterator = orderCoffee(phoneNumber);
	let result = iterator.next().value;
	while (true) {
		if (result !== undefined) {
			result = iterator.next(result).value;
		} else {
			break;
		}
	}
}

run('010-123-123');
