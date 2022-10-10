import express from 'express';
const app = express();

app.get(
	'/',
	(req, res, next) => {
		console.log('첫번째 호출된 인자 ');
		res.send('<h1> 메인 페이지 </h1>');
		//next(new Error('에러발생'));
		//next();
	},
	(req, res, next) => {
		console.log('두번째');
		next();
	}
);

app.get('/member/:id', (req, res, next) => {
	//console.log("경로: ",req.path);
	//console.log("해더: ",req.headers);
	console.log('파라미터: ', req.params);
	console.log('파라미터 값은 .으로 접근 ', req.params.id);
	console.log('쿼리: ', req.query);
});

app.use((req, res) => {
	res.send('<h1> 404 ERROR 해당 경로 없음 </h1>');
});

app.use((err, req, res, next) => {
	console.log(err);
	res.sendStatus(500);
});
app.listen(801);
