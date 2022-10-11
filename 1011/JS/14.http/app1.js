import express from 'express';
const app = express();

app.get(
	'/',
	(req, res, next) => {
		console.log('/ 요청 들어옴');
		console.log('첫번째 호출된 인자 ');
		res.send('<h1> 메인 페이지 </h1>');
		//next(new Error('에러발생'));
		//next('router');
		//next();
	},
	(req, res, next) => {
		console.log('두번째');
		next();
	}
);

app.get('/error', (req, res, next) => {
	next(new Error('에러발생'));
});

app.get('/member/:id', (req, res, next) => {
	//console.log("경로: ",req.path);
	//console.log("해더: ",req.headers);
	console.log('파라미터: ', req.params);
	console.log('파라미터 값은 .으로 접근 ', req.params.id);
	console.log('쿼리: ', req.query);
	res.status(200).send(`<h1> ${req.params.id} 님 회원페이지 </h1>`);
});

app.use((req, res) => {
	res.status(404).send('<h1> 404 ERROR 해당 경로 없음 </h1>');
});

app.use((err, req, res, next) => {
	console.log('서버에러 발생!');
	res.status(500).send('Sever Error');
});
app.listen(3000, () => {
	console.log('서버 실행');
});
