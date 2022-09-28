let x = 'global x';
let y = 'global y';

function outer() {
	let z = 'local z';
	console.log('outer 영역이야 ');
	function inner() {
		let x = 'local x';
		console.log('inner 영역이야');
	}
	//inner();
	return inner;
}

const inner = outer();
inner();
