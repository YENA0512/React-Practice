let myName = '박연미';
console.log(myName);
myName = '아이유';
console.log(myName);

const catName = '나비';

{
	const x = 1;
	console.log('부모 블럭 안이야 x=', x);
	{
		const y = 2;
		console.log('자식 블럭 안이야 x=', x);
		console.log('자식 블럭 안이야 y=', y);
	}
}

let me = 'global 전역 scope';
{
	let me = 'local 지역 scope';
	console.log('지역스코프 me=', me);
}
console.log('글로벌 스코프 me=', me);

function printName() {
	const myName = '박연미';
	console.log('함수 안이야', myName);
}

name = '박연미';
console.log('name =', name);

var dogName = '멍멍이';
console.log('dogName =', dogName);
var dogName = '강아지';
console.log('dogName =', dogName);

var animal = '고양이';
{
	var animal = '강아지';
	{
		var animal = '토끼';
	}
}
console.log('animal =', animal);

function test() {
	var z = 3;
}

//console.log(z);
