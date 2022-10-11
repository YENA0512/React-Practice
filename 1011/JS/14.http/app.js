import express from 'express';
const app = express();

app.use(function (req, res, next) {
	console.log('Time:', Date.now());
	console.log('==========');
	next();
});

app.get('/', function (req, res) {
	res.send('루트 라우터');
});

app.get('/home', function (req, res) {
	res.status(200).send('홈페이지');
});

// 정규식으로 표현이 가능하다.(path-to-regexp)

// abcd, abbcd 및 abbbcd
app.get('/ab+cd', function (req, res) {
	res.send('ab+cd');
});
// abcd, abxcd, abRABDOMcd
app.get('/ab*cd', function (req, res) {
	res.send('ab*cd');
});
// abe 및 abcde
app.get('/ab(cd)?e', function (req, res) {
	res.send('ab(cd)?e');
});

app.use((req, res) => {
	res.send('404 ERROR 해당 경로 없음');
});

app.listen(3000, () => {
	console.log('서버 실행');
});
