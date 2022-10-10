const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log('서버 접속중');
	const url = req.url;
	res.setHeader('Content-Type', 'text/html');
	if (url === '/') {
		fs.createReadStream('./src/index.html').pipe(res);
	} else if (url === '/member') {
		fs.createReadStream('./src/member.html').pipe(res);
	} else {
		fs.createReadStream('./src/error.html').pipe(res);
	}
});

server.listen(801);
