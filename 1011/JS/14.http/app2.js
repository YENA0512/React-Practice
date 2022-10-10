import express from 'express';

const app = express();

app.use(express.json());
app.get('/', (req, res, next) => {
	res.send('<h1>루트 페이지 </h1>');
});
app.post('/member', (req, res, next) => {
	console.log('post 호출 ');
	console.log(req.body);
});

app.listen(802);
