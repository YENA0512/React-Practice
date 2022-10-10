const http = require('http');
const fs = require('fs');
//console.log(http.STATUS_CODES);
//console.log(http.METHODS);
console.log('-------- ');
// http
const server = http.createServer((req, res) => {
	console.log('서버 실행 ');
	console.log('해더 정보 = ', req.headers);
	console.log('요청 메서드  = ', req.method);
	console.log('요청 url  = ', req.url);
	const url = req.url;
	// url 요청
	if (url === '/') {
		res.write('<h1>Welcome page </h1>');
	} else if (url === '/member') {
		res.write('<h1> member page </h1>');
	} else {
		res.write('<h1> 404 error page </h1>');
	}
	res.end(); // 엔드를 안해주면 계속 요청하는 상태
});

server.listen(800);
