function sayHi() {
	console.log('안녕');
}
sayHi();
console.log(sayHi());

function add(a, b) {
	return a + b;
}

const result = add(1, 2);
console.log(result);

const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));

function print(num) {
	if (num < 0) {
		console.log('error: 음수 값은 안됩니다');
		return;
	}
	console.log(num);
}

print(12);
print(-12);
