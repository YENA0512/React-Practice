const fs = require('fs').promises;
const path = require('path');
const fileName = 'member.txt';
const curPath = path.join(__dirname, fileName);

// fs.readFile(curPath, 'utf8')
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

//fs.writeFile(curPath, '홍길동').catch(console.log);

// fs.appendFile(curPath, '\n박연미').catch(console.log);
// fs.copyFile(curPath, __dirname + '/copied.txt').catch(console.error);

// fs.appendFile(curPath, '\n박연미')
// 	.then(() => {
// 		fs.copyFile(curPath, __dirname + '/copied2.txt').catch(console.error);
// 	})
// 	.catch(console.error);

//fs.mkdir('http').catch(console.error);

// fs.readdir('./').then(console.log).catch(console.error);
// fs.readdir(__dirname + '/')
// 	.then(console.log)
// 	.catch(console.error);
