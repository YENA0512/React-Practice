class User {
	constructor(id, password) {
		this.id = id;
		this.password = password;
	}
}

class UserManager {
	loginUser(user, input) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (input[0] === user.id && input[1] === user.password) {
					resolve(user);
				} else {
					reject(new Error('login failed'));
				}
			}, 2000);
		});
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (!user || !(user instanceof User)) {
					reject(new Error('access denied'));
				} else if (user.id === 'admin') {
					resolve({ name: user.id, role: '관리자' });
				} else {
					resolve({ name: user.id, role: '회원' });
				}
			}, 1000);
		});
	}
}
const um = new UserManager();
const user1 = new User('admin', '1234');
const user2 = new User('test', '1111');

const input1 = ['admin', '1234'];
const input2 = ['test', '1111'];
const input3 = ['test', '3333'];

um.loginUser(user2, input2)
	.then((user) => {
		return um.getRoles(user);
	})
	.then((member) => {
		return `${member.name}님은 ${member.role} 입니다 `;
	})
	.then((result) => {
		return console.log(result);
	})
	.catch((error) => {
		return console.log(error);
	});
