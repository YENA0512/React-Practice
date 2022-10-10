const fs = require('fs');
const buf = Buffer.from('Hello');

console.log(buf);
console.log(buf.length);
let data = '';
buf.forEach((element) => {
	data += element + '/';
});

console.log(data);
console.log(buf.toString());
const buf2 = Buffer.alloc(3);

buf2[0] = 72;
buf2[1] = 105;
buf2[2] = 33;
console.log(buf2.toString());
