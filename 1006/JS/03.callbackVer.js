

class User {
	constructor(id, password) {
		this.id = id;
		this.password = password;
	}
}

class UserManager {
	loginUser(user, input, onLogin, onFail) {
		setTimeout(() => {
			if (input[0] === user.id && input[1] === user.password) {
				onLogin(user);
			} else {
				onFail(new Error('login failed'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (!user || !(user instanceof User)) {
				onError(new Error('access denied'));
			} else if (user.id === 'admin') {
				onSuccess({ name: user.id, role: '관리자' });
			} else {
				onSuccess({ name: user.id, role: '회원' });
			}
		}, 1000);
	}
}

const um = new UserManager();
const user1 = new User('admin', '1234');
const user2 = new User('test', '1111');

const input1 = ['admin', '1234'];
const input2 = ['test', '1111'];
const input3 = ['test', '3333'];

um.loginUser(
	user2,
	input2,
	(user2) => {
		um.getRoles(
			user2,
			(member) => {
				console.log(`${member.name}님은 ${member.role} 입니다 `);
			},
			(error) => {
				console.log(error);
			}
		);
	},
	(error) => {
		console.log(error);
	}
);
