import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
	res.send('<h1>루트 페이지 </h1>');
});
app.post('/member', (req, res, next) => {
	console.log('post 호출 ');
	res.status(201).send('멤버 호출 완료');
});

app.listen(3000, () => {
	console.log('서버 실행');
});
