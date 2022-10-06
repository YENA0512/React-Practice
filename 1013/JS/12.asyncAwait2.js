function getId(phoneNumber) {
	console.log('전화번호 : ', phoneNumber);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('test01');
		}, 1000);
	});
}
function getEmail(id) {
	console.log('아이디 : ', id);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('test@naver.com');
		}, 1000);
	});
}
function getName(email) {
	console.log('이메일 : ', email);
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('박연미');
		}, 1000);
	});
}
function order(name, menu) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`${name}님이 주문하신 ${menu} 나왔습니다  `);
		}, 1000);
	});
}

async function orderCoffee(phoneNumber) {
	try {
		const id = await getId(phoneNumber);
		const email = await getEmail(id);
		const name = await getName(email);
		const result = await order(name, '아메리카노');
		return result;
	} catch (error) {
		console.log('예상치 못한 에러');
	}
}

orderCoffee('010-123-123').then(console.log);
