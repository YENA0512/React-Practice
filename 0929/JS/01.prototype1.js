console.log(function () {}.hasOwnProperty('prototype'));

console.log({}.hasOwnProperty('prototype'));

let arrow = (a, b) => a + b;
console.log(arrow.hasOwnProperty('prototype'));

class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
		this.sayHello = function () {
			console.log(`안녕`);
		};
	}
	makeSounds() {
		console.log(`${this.sound} 소리를 내다`);
	}
}

const cat = new Animal('나비', '미아옹');
console.log(cat.hasOwnProperty('prototype'));
console.log(cat.makeSounds.hasOwnProperty('prototype'));
console.log(cat.sayHello.hasOwnProperty('prototype'));

const obj = {};

console.log(obj.hasOwnProperty('__proto__'));

function Person(name) {
	this.name = name;
}
const me = new Person('박연미');
console.log(me.constructor === Person);
