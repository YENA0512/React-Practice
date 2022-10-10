const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/data.txt', {
	highWaterMark: 8,
	//encoding: 'utf-8',
});
const data = [];
readStream.on('data', (chunk) => {
	data.push(chunk);
	readStream.close();
});
readStream.on('close', () => {
	//console.log(data);
	console.log(data.join(''));
});

readStream.on('error', (error) => {
	console.log(error);
});

// readStream
// 	.on('data', (chunk) => {
// 		data.push(chunk);
// 		readStream.close();
// 	})
// 	.on('close', () => {
// 		console.log(data.join(''));
// 	})
// 	.on('error', console.log);
