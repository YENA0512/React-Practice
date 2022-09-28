//ES5
const dog = {
	name: '바둑이',
	info: function () {
		console.log(`나는 ${this.name} 이야`);
	},
};
dog.info();
const obj = new dog.info();
console.log(obj);

//ES6
const cat = {
	name: '나비',
	info() {
		console.log(`나는 ${this.name} 이야`);
	},
};
cat.info();

function sum(a, b) {
	console.log('sum = ', arguments[0] + arguments[1]);
}
sum(1, 2);

const add = (a, b) => {
	console.log('add = ', arguments[0] + arguments[1]);
};
add(1, 2);

const printThis = () => {
	console.log('this=', this);
};

printThis();
cat.printThis = printThis;
cat.printThis();
