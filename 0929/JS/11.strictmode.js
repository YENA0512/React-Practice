//'use strict';
// 엄격 모드 strict mode

var x = 10;
function add(x) {
	let a = 2;
	let b = a + x;
	console.log(this);
}
add();
