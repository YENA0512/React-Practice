function* generatorFunc() {
	yield 1;
	yield 2;
	yield 3;
}

const generator = generatorFunc();

console.log(generator);
console.log(Symbol.iterator in generator);
console.log('next' in generator);

console.log(generator.next());
console.log(generator.return());

console.log('---------------------');

function* testGenerator() {
	const x = yield 1;
	const y = yield x + 10;
	return x + y;
}

const gen = testGenerator();

let resultObj = gen.next();
console.log(resultObj);

resultObj = gen.next(10);
console.log(resultObj);

resultObj = gen.next(20);
console.log(resultObj);

console.log('---------------------');

function* evenGenerator() {
	for (let i = 0; i < 5; i++) {
		console.log('i=', i);
		yield (i + 1) * 2 - 2;
	}
}

const evenNum = evenGenerator();
console.log(evenNum.next());
console.log(evenNum.next());
//console.log(evenNum.return());
console.log(evenNum.next());
console.log(evenNum.next());
console.log(evenNum.next());

console.log('---------------------');
